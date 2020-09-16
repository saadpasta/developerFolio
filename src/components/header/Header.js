import React from "react";
import Headroom from "react-headroom";
import "./Header.css";
import {greeting, workExperiences, openSource, bigProjects, achievementSection,
  blogSection, talkSection} from "../../portfolio";

export default function Header() {
  const exp = workExperiences.viewExperiences;
  const openSrc = openSource.viewOpenSource;
  const bigProj = bigProjects.viewBigProjects;
  const achievementSec = achievementSection.viewAchievement;
  const blogSec = blogSection.viewBlogs;
  const talkSec = talkSection.viewTalks;


  return (
    <Headroom>
      <header className="header">
        <a href="" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#skills">Skills</a>
          </li>
          { exp &&
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          }
          { openSrc &&
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          }
          { bigProj &&
            <li>
              <a href="#projects">Projects</a>
            </li>
          }
          { achievementSec &&
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          }
          { blogSec &&
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          }
          { talkSec &&
            <li>
              <a href="#talks">Talks</a>
            </li>
          }
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
