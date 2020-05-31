import React from "react";
import {Fade} from "react-reveal";
import A from "../Basic/A";
import "./Header.css";

function Header() {
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
            <li>
              <A href="#projects">Projects</A>
            </li>
            <li>
              <A href="#opensource">Open Source</A>
            </li>
            <li>
              <A href="#blogs">Blogs</A>
            </li>
            <li>
              <A href="#talks">Talks</A>
            </li>
            <li>
              <A href="#achievements">Achievements</A>
            </li>
            <li>
              <A href="#contact">Contact</A>
            </li>
          </ul>
        </header>
      </div>
    </Fade>
  );
}
export default Header;
