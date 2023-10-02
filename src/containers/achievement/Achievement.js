import React, {useContext} from "react";
import {useState} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  if (!achievementSection.display) {
    return null;
  }
  const section = Object.values(achievementSection);
  const renderSlide = section.map(achievementCards => {
    return (
      <div key={achievementCards.image}>
        <p className="titles">
          {achievementCards.title},{achievementCards.subtitle}
        </p>
        <img src={achievementCards.image} alt={achievementCards.imageAlt} />
        <p className="footer">{achievementCards.footerLink}</p>
      </div>
    );
  });
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
              {achievementSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>
          <Carousel
            showArrows={true}
            showThumbs={false}
            showIndicators={true}
            showStatus={false}
            infiniteLoop={true}
            onChange={handleChange}
            selectedItem={achievementSection[currentIndex]}
            className="custom-carousel"
            style={{
              backgroundColor: "#CCCCFF",
              padding: "20px",
              borderRadius: "20px"
            }}
          >
            <div className="achievement-cards-div">
              {achievementSection.achievementsCards.map((card, i) => {
                return (
                  <AchievementCard
                    key={i}
                    isDark={isDark}
                    cardInfo={{
                      title: card.title,
                      description: card.subtitle,
                      image: card.image,
                      imageAlt: card.imageAlt,
                      footer: card.footerLink
                    }}
                  />
                );
              })}
            </div>
            {renderSlide}
          </Carousel>
        </div>
      </div>
    </Fade>
  );
}
