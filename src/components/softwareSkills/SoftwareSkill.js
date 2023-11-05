import React, {useContext} from "react";
import "./SoftwareSkill.scss";
import GetSkillIcon from "./GetSkillIcon";
import StyleContext from "../../contexts/StyleContext";
import {
  activateTexture,
  deactivateTexture
} from "../../submodules/WebGL-Boids/utils/updateVelocityForceTexture";
import {getTexture} from "../../submodules/WebGL-Boids/utils/textureManager";

export default function SoftwareSkill(skillList) {
  const {isDark} = useContext(StyleContext);
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillList.map((skills, i) => {
            return (
              <li
                key={i}
                className={
                  isDark
                    ? "software-skill-inline software-skill-white"
                    : "software-skill-inline"
                }
                name={skills.skillName}
                onMouseOver={event => {
                  if (window.screen.width > 768)
                    activateTexture(getTexture(skills.iconData.tooltip.name));
                }}
                onMouseOut={event => {
                  if (window.screen.width > 768) deactivateTexture();
                }}
              >
                {GetSkillIcon(skills.iconData)}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
