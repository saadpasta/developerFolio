import React, { useContext } from "react";
import "./Podcast.css";
import { podcastSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import FailedLoading from "../failedLoading/FailedLoading";

export default function Podcast() {
  const { isDark } = useContext(StyleContext);
  const CUSTOM_ERR_MSG = "Podcast Section is not configured properly."

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main">
        <div className="podcast-header">
          <h1 className="podcast-header-title">{podcastSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode podcast-header-subtitle"
                : "subTitle podcast-header-subtitle"
            }
          >
            {podcastSection.subtitle}
          </p>
        </div>
        <div className="podcast-main-div">
          {podcastSection.podcast ? podcastSection.podcast.map((podcastLink) => {
            return (
              <div>
                <iframe
                  className="podcast"
                  src={podcastLink}
                  frameborder="0"
                  scrolling="no"
                ></iframe>
              </div>
            );
          }) : <FailedLoading err={CUSTOM_ERR_MSG} />}
        </div>
      </div>
    </Fade>
  );
}
