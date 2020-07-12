import React from "react";
import {Fade} from "react-reveal";
import A from "../Basic/A";
import "./Header.css";
import {greeting, workExperiences} from "../../portfolio";

function Header() {
  const exp = workExperiences.viewExperiences;
  return (
    <Fade top duration={1000} distance="20px">
      <div>
        <header className="header">
          <A href="/" className="logo">
            <span className="grey-color"> &lt;</span>
            <span className="logo-name">Saad Pasta</span>
            <span className="grey-color">/&gt;</span>
          </A>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <A href="#skills">Skills</A>
            </li>
            {exp === true && (
              <li>
                <a href="#experience">Work Experiences</a>
              </li>
            )}
            <li>
              <a href="#opensource">Open Source</a>
            </li>
            <li>
              <A href="#projects">Projects</A>
            </li>
            <li>
              <a href="#achievements">Achievements</a>
            </li>
            <li>
              <a href="#blogs">Blogs</a>
            </li>
            <li>
              <a href="#talks">Talks</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </header>
      </div>
    </Fade>
  );
}
export default Header;
