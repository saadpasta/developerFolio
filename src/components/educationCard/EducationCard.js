import React, { useState, createRef } from "react";
import "./EducationCard.css";
import ColorThief from "colorthief";

export default function EducationCard({ school }) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined" ? null : "rgb(" + values.join(', ') + ")";
  }

  const GetDescBullets = ({ descBullets }) => {
    return descBullets ? descBullets.map((item) => <li className="subTitle">{item}</li>) : null
  };

  return (
    <div className="education-card">
      <div style={{background: rgb(colorArrays) }} className="education-banner">
        <div className="education-blurred_div"></div>
        <div className="education-div-school">
          <h5 className="education-text-school">{school.schoolName}</h5>
        </div>
        <img crossOrigin={"anonymous"} ref={imgRef} className="education-roundedimg" src={school.logo} alt={school.schoolName} onLoad={() => getColorArrays()}/>
      </div>

      <div className="education-text-details">
        <h5 className="education-text-degree">{school.degree}</h5>
        <h5 className="education-text-duration">{school.duration}</h5>
        <p className="subTitle education-text-desc">{school.desc}</p>
        <ul>
          <GetDescBullets descBullets={school.descBullets} />
        </ul>
      </div>
    </div>
  );
}
