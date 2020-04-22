import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.css";
import { Fade } from "react-reveal";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({ style }) {
  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu" style={{ ...style }}>
          <li>
            <a href="#skills" style={{ ...style }}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" style={{ ...style }}>
              Projects
            </a>
          </li>
          <li>
            <a href="#opensource" style={{ ...style }}>
              Open Source
            </a>
          </li>
          <li>
            <a href="#blogs" style={{ ...style }}>
              Blogs
            </a>
          </li>
          <li>
            <a href="#talks" style={{ ...style }}>
              Talks
            </a>
          </li>
          <li>
            <a href="#achievements" style={{ ...style }}>
              Achievements
            </a>
          </li>
          <li>
            <a href="#contact" style={{ ...style }}>
              Contact Me
            </a>
          </li>
        </ul>
        <ToggleSwitch />
      </header>
    </Headroom>
  );
}
export default Header;
