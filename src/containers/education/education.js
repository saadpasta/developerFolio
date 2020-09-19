import React from 'react';
import './Education.css';
import EducationCard from '../../components/educationCard/EducationCard';
import { educationInfo } from '../../portfolio';
import { Fade } from 'react-reveal';

export default function Education() {
  return (
    <div className="main" id="education">
      <div className="education-main-div">
        <Fade left duration={1000}>
          <h1 className="education-heading">{educationInfo.title}</h1>
          <div className="education-card-div">
            {educationInfo.schools.map((school) => (
              <EducationCard school={school} />
            ))}
          </div>
        </Fade>

        <Fade right duration={1000}>
          <div className="education-image-div">
            <img
              alt="Education"
              src={require('../../assets/images/education.svg')}
            ></img>
          </div>
        </Fade>
      </div>
    </div>
  );
}
