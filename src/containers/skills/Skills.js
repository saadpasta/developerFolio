import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection } from "../../portfolio";
import {Fade, Flip} from "react-reveal";

export default function Skills() {
  return (
		<div className="main" id="skills">
			<div className="skills-main-div">
				<Flip left duration={2000}>
					<div className="skills-image-div">
						<img
							alt="Saad Working"
							src={require("../../assests/images/developerActivity.svg")}
						></img>
					</div>
				</Flip>
				<div className="skills-text-div">
					<Fade right duration={1000}>
						<h1 className="skills-heading">{skillsSection.title} </h1>
					</Fade>
					<Fade right duration={1500}>
						<p className="subTitle skills-text-subtitle">
							{skillsSection.subTitle}
						</p>
					</Fade>
					<Fade right duration={2000}>
						<SoftwareSkill />
					</Fade>
					<Fade right duration={2500}>
						<div>
							{skillsSection.skills.map(skills => {
								return <p className="subTitle skills-text">{skills}</p>;
							})}
						</div>
					</Fade>
				</div>
			</div>
		</div>
	);
}
