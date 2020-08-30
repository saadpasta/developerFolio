import React from "react";
import "./Podcast.css";
import { podcastSection } from "../../portfolio";
import { Fade } from "react-reveal";

const cantDisplayError = "<div class='centerContent'><h2>Can't load? Check privacy protection settings</h2></div>";

function timeOut(){
  setTimeout(function() {
    if (!(document.getElementById('podcasts').innerHTML.includes('iframe'))){
      document.getElementById(`podcasts`).innerHTML = cantDisplayError ;
    }
  },
  10000);
}

export default function Podcast() {
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="podcasts">
      <div className="podcast-header">
        <h1 className="podcast-header-title">{podcastSection.title}</h1>
        <p className="subTitle podcast-header-subtitle">{podcastSection.subtitle}</p>
      </div>
      <div className="podcast-main-div">
        {podcastSection.podcast.map(podcastLink => {
          return (
            <div>
              <iframe className= "podcast" src={podcastLink} frameborder="0" scrolling="no" onLoad={timeOut}></iframe>
            </div>
          );
        })}
      </div>
    </div>
    </Fade>
  );
}
