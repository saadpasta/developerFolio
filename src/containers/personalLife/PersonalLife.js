import React, {useContext} from "react";
import "./PersonalLife.scss";
import {Fade} from "react-reveal";
import PersonalLifeCard from "../../components/personalLifeCard/PersonalLifeCard";
import {personalLifeSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Education() {
  const {isDark} = useContext(StyleContext);
  if (personalLifeSection.display) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="main" id="achievements">
          <div className="achievement-main-div">
            <div className="achievement-header">
              <h1
                className={
                  isDark
                    ? "dark-mode heading achievement-heading"
                    : "heading achievement-heading"
                }
              >
                {personalLifeSection.title}
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode subTitle achievement-subtitle"
                    : "subTitle achievement-subtitle"
                }
              >
                {personalLifeSection.subtitle}
              </p>
            </div>
            <div className="achievement-cards-div">
              {personalLifeSection.personalLifeCards.map((card, i) => {
                return (
                  <PersonalLifeCard
                    key={i}
                    isDark={isDark}
                    cardInfo={{
                      title: card.title,
                      description: card.subtitle,
                      image: card.image,
                      imageAlt: card.imageAlt
                      // footer: card.footerLink
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
