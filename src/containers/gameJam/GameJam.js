import React, {useContext} from "react";
import "./GameJam.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {gameJams} from "../../portfolio";

export default function GameJams() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    const win = window.open(url, url.startsWith("./") ? "_self" : "_blank");
    win.focus();
  }

  const startVideo = event => {
    event.target.play();
    event.target.parentElement
      .querySelector("img")
      .setAttribute("class", "g-card-image hidden");
  };
  const stopVideo = event => {
    event.target.pause();
    event.target.parentElement
      .querySelector("img")
      .setAttribute("class", "g-card-image visible");
  };

  const {isDark} = useContext(StyleContext);
  if (!gameJams.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="gamejam">
        <div>
          <h1 className="skills-heading">{gameJams.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode gameJam-subtitle"
                : "subTitle gameJam-subtitle"
            }
          >
            {gameJams.subtitle}
          </p>

          <div className="gameJam-container">
            {gameJams.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode gameJam-card gameJam-card-dark"
                      : "gameJam-card gameJam-card-light"
                  }
                >
                  <video
                    className="gameJam-video"
                    preload
                    onMouseOver={event => {
                      if (window.screen.width > 768) startVideo(event);
                    }}
                    onMouseOut={event => {
                      if (window.screen.width > 768) stopVideo(event);
                    }}
                    onTouchStart={event => {
                      startVideo(event);
                    }}
                    onTouchEndCapture={event => {
                      stopVideo(event);
                    }}
                    onTouchCancelCapture={event => {
                      stopVideo(event);
                    }}
                    loop
                    muted
                  >
                    <source src={project.video} type="video/webm" />
                  </video>
                  {project.image ? (
                    <div className="gameJam-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="g-card-image visible"
                      ></img>
                    </div>
                  ) : null}
                  <div className="gameJam-detail">
                    <h5
                      className={
                        isDark ? "dark-mode g-card-title" : "g-card-title"
                      }
                    >
                      {project.projectName}
                    </h5>
                    <div
                      className={
                        isDark ? "dark-mode g-card-subtitle" : "g-card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </div>
                    {project.footerLink ? (
                      <div className="gameJam-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark ? "dark-mode gameJam-tag" : "gameJam-tag"
                              }
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
