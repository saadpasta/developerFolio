import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";

export default function Skills() {
  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
        <div className="skills-image-div">
          <img alt="Saad Working" src={require("../../assests/images/developerActivity.svg")}></img>
        </div>
        <div className="skills-text-div">
          <h1 className="skills-heading">What i do </h1>
          <p className="subTitle skills-text-subtitle">CRAZY FULL STACK DEVELOPER WHO WANT TO EXPLORE EVERY TECH STACK </p>
          <SoftwareSkill />
          <div>
            <p className="subTitle skills-text">⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications</p>
            <p className="subTitle skills-text">⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks</p>
            <p className="subTitle skills-text">⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean</p>
          </div>
        </div>
      </div>
    </div>
  );
}
