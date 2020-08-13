import React from "react";
import "./WorkExperience.css";
import { socialMediaLinks } from "../../portfolio";
import Button from "../../components/button/Button";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";


export default function WorkExperience() {
    if(workExperiences.viewExperiences){
        return (
            <div id="experience">
                <Fade bottom duration={1000} distance="20px">
                <div className="experience-container" id="workExperience">
                    <div>
                        <h1 className="experience-heading">Experiences</h1>
                        <div className="experience-cards-div">
                        {workExperiences.experience.map((card) => {
                            return (
                                <ExperienceCard
                                    cardInfo={{
                                        company: card.company,
                                        desc: card.desc,
                                        date: card.date,
                                        companylogo: card.companylogo,
                                        role: card.role,
                                        descBullets: card.descBullets
                                    }}
                                />
                            );
                        })}
                        </div>
                    </div>
                </div>
                <Button text={"More Work Experiences"} className="project-button" href={socialMediaLinks.linkedin} newTab={true} />
                </Fade>
            </div>
        );
    }
    return null;
}
