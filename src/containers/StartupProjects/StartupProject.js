import React from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
		<div className="main" id="projects">
			<div>
				<Fade bottom duration={1000} distance="20px">
					<h1 className="skills-heading">{bigProjects.title}</h1>
				</Fade>
				<Fade bottom duration={1500} distance="20px">
					<p className="subTitle project-subtitle">{bigProjects.subtitle}</p>
				</Fade>
				<div className="startup-projects-main">
					<div className="startup-project-text">
						{bigProjects.projects.map(project => {
							return (
								<Fade bottom duration={2000} distance="20px">
									<div
										className="saaya-health-div"
										onClick={(...args) => openProjectInNewWindow(project.link)}
									>
										<img alt="Saad Working" src={project.image}></img>
									</div>
								</Fade>
							);
						})}
					</div>
					<div className="starup-project-image"></div>
				</div>
			</div>
		</div>
	);
}
