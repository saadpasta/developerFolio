import React, {useContext} from "react";
import "./Publications.scss";
import {publicationSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Publications() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!publicationSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="publications">
        <div>
          <h1 className="skills-heading">{publicationSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode publication-subtitle"
                : "subTitle publication-subtitle"
            }
          >
            {publicationSection.subtitle}
          </p>

          <div className="publications-container">
            {publicationSection.publications.map((publication, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode publication-card publication-card-dark"
                      : "publication-card publication-card-light"
                  }
                >
                  {publication.image ? (
                    <div className="publication-image">
                      <img
                        src={publication.image}
                        alt={publication.publicationName}
                        className="card-image"
                      ></img>
                    </div>
                  ) : null}
                  <div className="publication-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {publication.publicationName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {publication.publicationDesc}
                    </p>
                    {publication.footerLink ? (
                      <div className="publication-card-footer">
                        {publication.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark
                                  ? "dark-mode publication-tag"
                                  : "publication-tag"
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
