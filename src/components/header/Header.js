import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {skillsSection, openSource} from "../../portfolio";
import {LanguageContext} from "../../contexts/LanguageContent";
import LanguageSwitcher from "../languageSwitcher";

function Header() {
  const {data} = useContext(LanguageContext);
  const {
    greeting,
    workExperiences,
    blogSection,
    talkSection,
    achievementSection,
    navbar
  } = data;
  const {isDark} = useContext(StyleContext);

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
              <a href="#skills">{navbar.skills}</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">{navbar.workExperiences}</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">{navbar.openSource}</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">{navbar.achievements}</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">{navbar.blogs}</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">{navbar.talk}</a>
            </li>
          )}
          <li>
            <a href="#contact">{navbar.contactMe}</a>
          </li>
          <li>
            <LanguageSwitcher
              className={"lang-switcher-header" + (isDark ? " dark-mode" : "")}
            />
          </li>
          <li>
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
