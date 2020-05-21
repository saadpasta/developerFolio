import React from "react";
import "./workExperiences.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";


export default function Experiences() {
    if(workExperiences.viewExperiences){
        return (
            <Fade bottom duration={1000} distance="20px">
            <div className="experience-container" id="workExperiences">
                <div>
                    <h1 className="experience-heading">Experiences</h1>
                    <div className="experience-cards-div">
                    {workExperiences.experience.map((card) => {
                        return (
                            <ExperienceCard
                                cardInfo={{
                                    company: card.company,
                                    descrip: card.descrip,
                                    date: card.date,
                                    companylogo: card.companylogo,
                                    role: card.role
                                }}
                            />
                        );
                    })}
                    </div>
                </div>
            </div>
            </Fade>
        );
    }
    return null;
}
