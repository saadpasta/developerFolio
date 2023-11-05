import React, {useContext} from "react";
import Headroom from "react-headroom";
import StyleContext from "../contexts/StyleContext";
import {greeting} from "../portfolio";

export default function ProjectHeader(project) {
  const {isDark} = useContext(StyleContext);
  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        {InfoBar(project)}
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <a href="./">Main Page</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

function InfoBar(project) {
  if (
    !("organization" in project) &&
    !("timeFrame" in project) &&
    !("teamSize" in project)
  ) {
    return;
  }
  return (
    <div className="project-page-infobar">
      {"organization" in project && (
        <a>
          {" "}
          &nbsp;<i className="fas fa-building"></i>&nbsp; {project.organization}{" "}
          &nbsp;
        </a>
      )}
      {"timeFrame" in project && (
        <a>
          {" "}
          &nbsp;<i className="fas fa-calendar"></i>&nbsp; {project.timeFrame}{" "}
          &nbsp;
        </a>
      )}
      {"teamSize" in project &&
        (project.teamSize === 1 ? (
          <a>
            &nbsp;<i className="fas fa-user"></i>&nbsp; Solo &nbsp;
          </a>
        ) : (
          <a>
            &nbsp;<i className="fas fa-users"></i>&nbsp; {project.teamSize}{" "}
            &nbsp;
          </a>
        ))}
    </div>
  );
}
