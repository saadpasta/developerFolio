import React, {useEffect, useState} from "react";
import {Fade} from "react-reveal";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import Top from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import {StyleProvider} from "../contexts/StyleContext";
import "./Main.css";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";

const Main = () => {
  const [isDark, setIsDark] = useState(false);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("isDark") === null) {
      const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
      localStorage.setItem("isDark", darkPref.matches);
    }
    setIsDark(JSON.parse(localStorage.getItem("isDark")));
    const splashTimer = setTimeout(() => setIsShowingSplashAnimation(false), splashScreen.duration)
    return () => {
      clearTimeout(splashTimer);
    };
  }, []);


  const changeTheme = () => {
    setIsDark(!isDark);
  };
  useEffect(() => {
    // Update local storage as soon as isDark changes
    localStorage.setItem("isDark", isDark);
  }, [isDark]);

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider
        value={{isDark: isDark, changeTheme: changeTheme}}
      >
        {isShowingSplashAnimation && splashScreen.enabled ?
          <SplashScreen /> :
          <Fade bottom duration={500} distance="40px">
            <Header />
            <Greeting />
            <Skills />
            <StackProgress />
            <Education />
            <WorkExperience />
            <Projects />
            <StartupProject />
            <Achievement />
            <Blogs />
            <Talks />
            <Twitter />
            <Podcast />
            <Profile />
            <Footer />
            <Top />
          </Fade>
        }
      </StyleProvider>
    </div>
  );
};

export default Main;
