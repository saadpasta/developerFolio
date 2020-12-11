import React from "react";
import "./Progress.css";
import { techStack } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StackProgress() {
    if(techStack.viewSkillBars){
        return (
            <Fade bottom duration={1000} distance="20px">
            <div className="skills-container">

                <div className="skills-bar">
                    <h1 className="skills-heading">Proficiency</h1>
                    {techStack.experience.map((exp) => {
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
                    <img alt="Skills" src={require("../../assets/images/skill.svg").default} />
                </div>

            </div>
            </Fade>
        );
    }
    return null;
}
