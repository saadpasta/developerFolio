import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {/* {skills.image?  */}
                <img className="icon" src={skills.image} alt={skills.skillName + " logo"}/>
                 {/* : <i className={skills.fontAwesomeClassname}></i>} */}
                {/* <p>{skills.skillName}</p> */}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
