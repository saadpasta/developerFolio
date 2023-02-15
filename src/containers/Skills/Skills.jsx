"use client";

import React, {useContext} from "react";
import styles from "./Skills.module.scss";
import SoftwareSkills from "../../components/SoftwareSkills/SoftwareSkills";
import {illustration, skillsSection} from "../../portfolio";
//import {Fade} from "react-reveal";
import {Fade} from "react-awesome-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import Image from "next/image";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const styleContext = useContext(StyleContext);
  const isDark = styleContext ? styleContext.isDark : false;
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className={styles.skillsMainDiv}>
        <Fade left duration={1000}>
          <div className={styles.skillsImageDiv}>
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <Image
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              />
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className={styles.skillsTextDiv}>
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkills />
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
