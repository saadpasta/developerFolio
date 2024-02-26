import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {LanguageContext} from "../../contexts/LanguageContent";

export default function Education() {
  const {educationInfo} = React.useContext(LanguageContext).data
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">{educationInfo.title}</h1>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
