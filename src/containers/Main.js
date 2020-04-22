import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
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
import { StyleProvider } from '../contexts/StyleContext';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false,
      style: { backgroundColor: 'none', color: 'black' }
    }
  }

  changeTheme = () => {
    this.setState({ style: { backgroundColor: 'black', color: 'white', transition: '0.1s' }, isDark: !this.state.isDark })
  }

  render() {
    return (
      <div style={this.state.isDark ? this.state.style : null} >
        <StyleProvider value={{ changeTheme: this.changeTheme }} >
          <Header style={this.state.isDark ? this.state.style : null} />
        </StyleProvider>
        <Greeting />
        <Skills />
        <StackProgress />
        <Projects />
        <StartupProject />
        <Achievement />
        <Blogs />
        <Talks />
        <Twitter />
        <Podcast />
        <Contact />
        <Footer />
        <Top />
      </div>
    );
  }
}
