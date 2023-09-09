import React, {useState, createRef} from "react";
import "./ExperienceCard.scss";
import "../educationCard/EducationCard.scss";
import ColorThief from "colorthief";
import {Fade, Slide} from "react-reveal";

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <>
      <div>
        <Fade left duration={1000}>
          <div className="education-card">
            <div className="education-card-left">
              <img
                crossOrigin={"anonymous"}
                ref={imgRef}
                className="education-roundedimg"
                src={cardInfo.companylogo}
                alt={cardInfo.company}
                onLoad={() => getColorArrays()}
              />
            </div>

            <div className="education-card-right">
              <h5 className="experience-text-company">{cardInfo.company}</h5>

              <div className="education-text-details">
                <h5
                  className={
                    isDark
                      ? "dark-mode education-text-subHeader"
                      : "education-text-subHeader"
                  }
                >
                  {cardInfo.role}
                </h5>
                <p
                  className={`${
                    isDark ? "dark-mode" : ""
                  } education-text-duration`}
                >
                  {cardInfo.date}
                </p>
                <p className="education-text-desc"> {cardInfo.desc}</p>
                <div className="education-text-bullets">
                  <ul>
                    <GetDescBullets
                      descBullets={cardInfo.descBullets}
                      isDark={isDark}
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <Slide left duration={2000}>
          <div className="education-card-border"></div>
        </Slide>
      </div>
    </>
  );
}
