import React, {useContext} from "react";
import { useState } from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
   const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index){
    setCurrentIndex(index);
  }
  const experience = Object.values(workExperiences);
  const renderSlides = experience.map((experience)=>{
   return(
   <div key={experience.company}>
    <p className="roles">{experience.roles},{experience.dates},{experience.desc},{experience.descBullets}</p>
      <img src={experience.companylogo} alt={experience.companylogo}/>
    </div>
   );
  });
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <Carousel showArrows={true} showThumbs={false} showIndicators={true} showStatus={false} infiniteLoop={true} onChange={handleChange} selectedItem={workExperiences[currentIndex]} className="custom-carousel" style={{backgroundColor: '#CCCCFF', padding: '20px',
    borderRadius: '20px',}} emulateTouch={true}>

              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
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
              {renderSlides}
    </Carousel>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
