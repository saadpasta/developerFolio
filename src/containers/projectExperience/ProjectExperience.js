import React, { useContext } from "react";
import "./ProjectExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { projectExperiences } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function ProjectExperience() {
  const { isDark } = useContext(StyleContext);

  // This could be any date you choose to filter experiences by.
  const cutoffDate = new Date('2023-01-01');

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
                      <ExperienceCard
                        key={i}
                        isDark={isDark}
                        cardInfo={{
                            company: card.projectName, // changed from card.company to card.projectName
                            desc: card.desc,
                            date: card.date,
                            companylogo: card.projectlogo, // changed from card.companylogo to card.projectlogo
                            role: card.role,
                            descBullets: card.descBullets,
                        }}
                      />
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
