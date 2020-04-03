import React from "react";
import "./Progress.css";
import { techStack } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StackProgress() {
    if(techStack.viewSkillBars){
        return (
					<div className="skills-container">
						<div className="skills-bar">
							<Fade bottom duration={1000} distance="20px">
								<h1 className="skills-heading">Proficiency</h1>
							</Fade>
							{techStack.experience.map(exp => {
								const progressStyle = {
									width: exp.progressPercentage
								};
								return (
									<Fade bottom duration={1000} distance="20px">
										<div className="skill">
											<p>{exp.Stack}</p>
											<div className="meter">
												<span style={progressStyle}></span>
											</div>
										</div>
									</Fade>
								);
							})}
						</div>
						<div className="skills-image">
							<img
								alt="Skills"
								src={require("../../assests/images/skill.svg")}
							/>
						</div>
					</div>
				);
    }
    return null;
}
