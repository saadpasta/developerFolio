import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import LanguageToggleSwitch from "../languageToggleSwitch/LanguageToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection
} from "../../portfolio";
import LanguageContext from "../../contexts/LanguageContext";

function Header() {
  const {isDark} = useContext(StyleContext);
  const {lang} = useContext(LanguageContext);

  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;

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
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">{lang === "en" ? "Skills" : "Skills"}</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">
                {lang === "en" ? "Work Experiences" : "Esperienze"}
              </a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">
                {lang === "en" ? "Open Source" : "Open Source"}
              </a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">
                {lang === "en" ? "Achievements" : "Achievements"}
              </a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">{lang === "en" ? "Blogs" : "Blogs"}</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">{lang === "en" ? "Talks" : "Talks"}</a>
            </li>
          )}
          <li>
            <a href="#contact">{lang === "en" ? "Contact Me" : "Contattami"}</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <LanguageToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
