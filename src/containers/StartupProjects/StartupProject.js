import React from "react";
import "./StartupProjects.css";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="main" id="projects">
      <div>
        <h1 className="skills-heading">Big Projects</h1>
        <p className="subTitle project-subtitle">SOME STARTUPS AND COMPANIES THAT I HELP TO CREATE THEIR TECH.</p>
        <div className="startup-projects-main">
          <div className="startup-project-text">
            <div className="saaya-health-div" onClick={() => openProjectInNewWindow("http://saayahealth.com/")}>
              <img alt="Saad Working" src={require("../../assests/images/saayaHealthLogo.png")}></img>
            </div>
            <div className="nextu-div" onClick={() => openProjectInNewWindow("http://nextu.se/")}>
              <img alt="Saad Working" src={require("../../assests/images/nextuLogo.jpg")}></img>
            </div>
          </div>
          <div className="starup-project-image"></div>
        </div>
      </div>
    </div>
  );
}
