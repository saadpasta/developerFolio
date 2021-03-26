import React, {useContext} from "react";
import "./SoftwareSkill.css";
import {skillsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SoftwareSkill() {
  const {isDark} = useContext(StyleContext);
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className={
                  isDark
                    ? "software-skill-inline dark-mode-skill"
                    : "software-skill-inline"
                }
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
