import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Top from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import Education from "./education/Education";
import { StyleProvider } from "../contexts/StyleContext";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false,
      style: { backgroundColor: "none", color: "#171c28" },
    };
  }

  changeTheme = () => {
    this.setState({
      style: { backgroundColor: "#171c28", color: "white", transition: "0.1s" },
      isDark: !this.state.isDark,
    });
  };

  render() {
    return (
      <div style={this.state.isDark ? this.state.style : null}>
        <StyleProvider value={{ changeTheme: this.changeTheme }}>
          <Header style={this.state.isDark ? this.state.style : null} />
        </StyleProvider>
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
      </div>
    );
  }
}
