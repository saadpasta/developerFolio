import React from 'react';
import './Education.css';
import EducationCard from '../../components/educationCard/EducationCard';
import { educationInfo } from '../../portfolio';
import { Fade } from 'react-reveal';

export default function Education() {
  return (
    <div className="education-main-div" id="education">
      <Fade left duration={1000}>
        <div>
          <h1 className="education-heading">{educationInfo.title}</h1>
          <div className="education-card-div">
            {educationInfo.schools.map((school) => (
              <EducationCard school={school} />
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
}
