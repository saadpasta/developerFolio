import React from "react";
import "./Podcast.css";
import { podcastSection } from "../../portfolio";

export default function Podcast() {
  return (
    <div className="main">
      <div className="podcast-header">
        <h1 className="podcast-header-title">{podcastSection.title}</h1>
        <p className="subTitle podcast-header-subtitle">{podcastSection.subtitle}</p>
      </div>
      <div className="podcast-main-div">
        {podcastSection.podcast.map(podcastLink => {
          return (
            <div>
              <iframe className= "podcast" src={podcastLink} frameborder="0" scrolling="no"></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
}
