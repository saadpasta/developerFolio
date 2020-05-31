import React from "react";
import {techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import "./Progress.css";

const StackProgress = () => {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            {techStack.experience.map(exp => {
              const progressStyle = {
                width: exp.progressPercentage
              };
              return (
                <div className="skill">
                  <p>{exp.Stack}</p>
                  <div className="meter">
                    <span style={progressStyle}></span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="skills-image">
            <img alt="Skills" src={require("../../assets/images/skill.svg")} />
          </div>
        </div>
      </Fade>
    );
  }
  return null;
};

export default StackProgress;
