import React from "react";
import Headroom from "react-headroom";
import "./Header.css";
import {greeting, workExperiences} from "../../portfolio";

function Header() {
  const exp = workExperiences.viewExperiences;
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
          { exp === true &&
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          }
          <li>
            <a href="#opensource">Open Source</a>
          </li>
          <li>
            <a href="#awards">Awards</a>
          </li>
          <li>
            <a href="#patents">Patents</a>
          </li>
          <li>
            <a href="#talks">Talks</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
