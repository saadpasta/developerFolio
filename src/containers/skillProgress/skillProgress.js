import React from "react";
import "./skillProgress.css";
import { techStack } from "../../portfolio";

export default function StackProgress() {
    return (
        <div className="skills-container">

            <div className="skills-bar">
                <h1 className="skills-heading">Proficiency</h1>
                {techStack.experience.map(exp => {
                    return (
                    <div class="skill">
                        <p>{exp.Stack}</p>
                        <div class="meter">
                            <span style={{width: '25%'}}></span>
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
