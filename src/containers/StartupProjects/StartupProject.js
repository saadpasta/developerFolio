import React from 'react';
import './StartupProjects.css';
import {bigProjects} from '../../portfolio';
import {Fade} from 'react-reveal';

const StartupProject = () => {
	const openProjectInNewWindow = url => {
		const win = window && window.open(url, '_blank');
		win.focus();
	};

	return (
		<Fade bottom duration={1000} distance="20px">
			<div className="main" id="projects">
				<div>
					<h2 className="skills-heading">{bigProjects.title}</h2>
					<p className="subTitle project-subtitle">
						{bigProjects.subtitle}
					</p>
					<div className="startup-projects-main">
						<div className="startup-project-text">
							{bigProjects.projects.map(project => {
								return (
									<div
										className="saaya-health-div"
										onClick={() =>
											openProjectInNewWindow(project.link)
										}
									>
										<img
											alt="Saad Working"
											src={project.image}
										></img>
									</div>
								);
							})}
						</div>
						<div className="starup-project-image"></div>
					</div>
				</div>
			</div>
		</Fade>
	);
};

export default StartupProject;
