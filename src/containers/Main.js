import React, { useEffect } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";

const Main = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      fetch(`https://api.countapi.xyz/hit/${window.location.hostname}/visits`);
    }
  }, []);

  return (
    <div>
      <Header />
      <Greeting />
      <Skills />
      <Projects />
      <StartupProject />
      <Achievement />
      <Blogs />
      <Talks />
      <Podcast />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
