import React from "react";
import "./SoftwareSkill.css";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map(skills => {
            return (
              <li className="software-skill-inline" name={skills.skillName}>
                <div className="tooltip">
                <i className={skills.fontAwesomeClassname}></i>
                <span className="tooltiptext">{skills.skillName}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
