import React, {useContext, createRef} from "react";
import StyleContext from "../contexts/StyleContext";
import {referencesSection} from "../portfolio";
import {Fade} from "react-reveal";
import "./OtherProjects.scss"
export default function OtherProjects(project) {
  const {isDark} = useContext(StyleContext);

  return (
    <div id="otherProjects" className="main">
      <h1 className="ref-title">Explore my other projects</h1>
      <div className="ref-cards-div-main">
        {referencesSection.references.map((reference, i) => {
          const imgRef = createRef();
          return (
            <Fade left duration={1000}>
              <div className={isDark ? "dark-card-mode ref-card" : "ref-card"}>
                <div className="ref-card-left">
                  <img
                    crossOrigin={"anonymous"}
                    ref={imgRef}
                    className="ref-image"
                    src={reference.image}
                    alt={reference.name}
                  />
                </div>
                <div className="ref-card-right">
                  <div className="ref-name">{reference.name}</div>
                  <div className="ref-job-title">{reference.jobTitle}</div>
                  <div className="ref-location">{reference.organization}</div>
                  <div className="ref-location">{reference.location}</div>
                  <div className="ref-link-box">
                    {reference.website ? (
                      <a
                        href={reference.website}
                        className="icon-button web"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-globe"></i>
                        <span></span>
                      </a>
                    ) : null}
                    {reference.email ? (
                      <a
                        href={`mailto:${reference.email}`}
                        className="icon-button google"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-envelope"></i>
                        <span></span>
                      </a>
                    ) : null}
                    {reference.linkedin ? (
                      <a
                        href={reference.linkedin}
                        className="icon-button linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-linkedin-in"></i>
                        <span></span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </Fade>
          );
        })}
      </div>
    </div>
  );
}
