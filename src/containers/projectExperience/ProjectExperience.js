import React, {useContext} from "react";
import "./ProjectExperience.scss";
// import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import {projectExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function ProjectExperience() {
  const {isDark} = useContext(StyleContext);

  // This could be any date you choose to filter experiences by.
  const cutoffDate = new Date("2023-01-01");

  if (projectExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="projectExperience">
            <div>
              <h1 className="experience-heading">Project Experiences</h1>
              <div className="experience-cards-div">
                {projectExperiences.experience
                  //.filter(card => new Date(card.date) >= cutoffDate)
                  .map((card, i) => {
                    return (
                      <ProjectCard
                        key={i}
                        isDark={isDark}
                        cardInfo={{
                          company: card.projectName, // changed from card.company to card.projectName
                          desc: card.desc,
                          date: card.date,
                          companylogo: card.projectlogo, // changed from card.companylogo to card.projectlogo
                          role: card.role,
                          descBullets: card.descBullets
                        }}
                      />
                      // <ProjectCard
                      //   isDark={isDark}
                      //   projectInfo={{
                      //     name: card.projectName, // The name of the project
                      //     description: card.desc, // A short description of the project
                      //     duration: card.date, // Duration or timeline of the project
                      //     projectLogo: card.projectlogo, // The project logo
                      //     lead: card.role, // The project lead or responsible person
                      //     descBullets: card.descBullets, // Bullet points about the project
                      //   }}
                      // />
                    );
                  })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
