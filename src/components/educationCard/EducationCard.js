import React, { createRef } from 'react';
import './EducationCard.css';

export default function EducationCard({ school }) {
  const imgRef = createRef();

  const GetDescBullets = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item) => <li className="subTitle">{item}</li>)
      : null;
  };

  return (
    <div className="education-card">
      <div className="education-card-left">
        <img
          crossOrigin={'anonymous'}
          ref={imgRef}
          className="education-roundedimg"
          src={school.logo}
          alt={school.schoolName}
        />
      </div>
      <div className="education-card-right">
        <h5 className="education-text-school">{school.schoolName}</h5>

        <div className="education-text-details">
          <h5 className="education-text-degree">{school.degree}</h5>
          <p className="education-text-duration">{school.duration}</p>
          <p className="education-text-desc">{school.desc}</p>
          <div className="education-text-bullets">
            <ul>
              <GetDescBullets descBullets={school.descBullets} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
