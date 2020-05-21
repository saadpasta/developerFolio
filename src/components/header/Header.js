import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.css";
import { greeting, workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { StyleConsumer } from "../../contexts/StyleContext";

function Header({ style }) {
  const exp = workExperiences.viewExperiences;
  const { isDark } = useContext(StyleConsumer);
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
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <a href="#skills">Skills</a>
          </li>
          {educationInfo.viewEducation && (
            <li>
              <a href="#education">Education</a>
            </li>
          )}
          {workExperiences.viewExperiences && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          <li>
            <a href="#opensource">Open Source</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#opensource">Open Source</a>
          </li>
          <li>
            <a href="#blogs">Blogs</a>
          </li>
          <li>
            <a href="#talks">Talks</a>
          </li>
          <li>
            <a href="#achievements">Achievements</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
             <a href=""><ToggleSwitch /></a>
          </li>
        </ul>
       
      </header>
    </Headroom>
  );
}
export default Header;
