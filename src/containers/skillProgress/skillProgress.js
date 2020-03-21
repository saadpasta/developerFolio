import React from "react";
import "./Progress.css";
import { techStack } from "../../portfolio";

export default function StackProgress() {
    return (
        <div className="skills-container">

            <div className="skills-bar">
                <h1 className="skills-heading">Proficiency</h1>
                {techStack.experience.map(exp => {
                    const progressStyle = {
                        width: exp.progressPercentage
                    }
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
                <img alt="Skills" src={require("../../assests/images/skill.svg")} />
            </div>

        </div>
    );
}
