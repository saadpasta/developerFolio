import React from 'react';
import './Education.css';
import EducationCard from '../../components/educationCard/EducationCard';
import { educationInfo } from '../../portfolio';

export default function Education() {
  return (
    <div className="education-main-div" id="education">
      <div>
        <h1 className="education-heading">{educationInfo.title}</h1>
        <div className="education-card-div">
          {educationInfo.schools.map((school) => (
            <EducationCard school={school} />
          ))}
        </div>
      </div>
    </div>
  );
}
