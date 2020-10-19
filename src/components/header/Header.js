import React from "react";
import "./Header.css";
import {Fade} from "react-reveal";
import {greeting, skillsSection, bigProjects, openSource, blogSection, talkSection, achievementSection, contactInfo} from "../../portfolio";

function Header() {
  if (!greeting.displayHeader) {
    return null;
  } 
  return (
    <Fade top duration={1000} distance="20px">
    <div>
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
          {(() => {
            if (skillsSection) {
              return (
                <li>
                  <a href="#skills">Skills</a>
                </li>
              );
            }
          })()}
          {openSource.display &&
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          }
          {bigProjects &&
            <li>
              <a href="#projects">Projects</a>
            </li>
          }
          {achievementSection.display && 
            <li>
              <a href="#achievements">Achievements</a>
            </li> 
          }
          {blogSection.display &&
              <li>
                <a href="#blogs">Blogs</a>
              </li>
          }
          {talkSection.display &&
              <li>
                <a href="#talks">Talks</a>
              </li>    
          }
          {contactInfo.display  &&
              <li>
                <a href="#contact">Contact Me</a>
              </li>   
          }
        </ul>
      </header>
    </div>
    </Fade>
  );
}
export default Header;
