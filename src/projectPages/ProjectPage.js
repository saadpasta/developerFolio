import React, {createRef, useEffect, useState} from "react";
import  {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import ProjectHeader from "./ProjectHeader";
import ScrollToTopButton from "../containers/topbutton/Top";
import Profile from "../containers/profile/Profile";
import OtherProjects from "./OtherProjects";
import "./ProjectPage.scss"
import YoutubeEmbed from "./ProjectPageHelper";
import Markdown from 'react-markdown'
import {red} from "../assets/images/DeveloperFolio Developer Portfolio Template_files/0";
export default function ProjectPage(project) {
  const [isDark, setIsDark] = useLocalStorage("isDark", "true");

  const imgRef = createRef();
  return (
    <div className={isDark ? "dark-mode" : "lite-mode"} style={{height: "100%", minHeight: "100vh"}}>
      <StyleProvider value={{isDark: isDark}}>
          <>
            {ProjectHeader(project)}
            <div className="project-page-canvas">
            <div className="project-page-canvas-inner">
            <div className="project-page-image-container">
              <img
                crossOrigin={"anonymous"}
                ref={imgRef}
                className="project-page-image"
                src={project.image}
                alt={project.name}
              />
              {("header" in project) && (<h1 className="project-page-header">{project.header}</h1>)}
            </div>
            {TextBody(project)}
            {AdditionalLinks(project)}
            {/*OtherProjects(project)*/}
            <Profile />
            </div>
            </div>
            <ScrollToTopButton />
          </>
      </StyleProvider>
    </div>
  );
}


function TextBody(project){
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 925px)").matches
  )

  useEffect(() => {
    window
      .matchMedia("(min-width: 925px)")
      .addEventListener('change', e => setMatches( e.matches));
  }, []);

  return (
    project.text.map((text, i) => {
      if("videos" in text){
        const ratio =  100.0 / text.videos.length;
        return (
          <div className="project-page-box" style={{"justifyContent": "center"}} key={project.name + "-mediabox-" + i}>
            {(text.videos.map((video, j) => {
              return (
                <div className="project-page-video-card" style={{width: (matches ? ratio : 100) + "%"}}>
                  <YoutubeEmbed embedId={video} />
                </div>
              )
            }))}
          </div>);
      }
      if("image" in text || "video" in text){
        const right = text.right;
        const ratio = text.ratio * 100.0;

        const textDiv = (
          <div className="project-page-text-card" style={{width: (matches ? 100-ratio : 100) + "%"}}>
            {text.text}
          </div>);
        var mediaDiv = (<div className="project-page-box" style={{minWidth: (ratio) + "%"}}/>);
        if("image" in text){
          const imgRef = createRef();
          mediaDiv = (
            <div className="project-page-image-card" style={{width: (matches ? ratio : 100) + "%"}}>
              <img
                crossOrigin={"anonymous"}
                ref={imgRef}
                className="project-page-image"
                src={text.image}
                alt={project.name + " Image " + i}
              />
            </div>
          );
        } else if("video" in text){
          mediaDiv = (
            <div className="project-page-video-card" style={{width: (matches ? ratio : 100) + "%"}}>
              <YoutubeEmbed embedId={text.video} />
            </div>
          );
        }
        if(text.text === ""){
          return (
            <div className="project-page-box" style={{"justifyContent": "center"}} key={project.name + "-mediabox-" + i}>
              {mediaDiv}
            </div>);
        }
        return (
          <div className="project-page-box" key={project.name + "-mediatextbox-" + i}>
            {right ? mediaDiv : textDiv}
            <div style={{width: "1rem"}}/>
            {right ? textDiv : mediaDiv}
          </div>
        )
      }
      return (
        <div className="project-page-box" key={project.name + "-texbox-" + i}>
          <div className="project-page-text-card">
            <Markdown>{text.text}</Markdown>
          </div>
        </div>
        )
      // Only text
  }));
}

function openUrlInNewTab(url) {
  if (!url) {
    return;
  }
  const win = window.open(
    url,
    url.startsWith("./") ? "_self" : "_blank");
  win.focus();
}

function AdditionalLinks(project){
  if(!("additionalLinks" in project)){
    return <></>
  }
  return (<div>
    <h1 className="project-page-sub-header">Additional Links</h1>
    <div className="project-page-button-box" >
    {project.additionalLinks.map((link, i) => {
      return (
        <span
          key={i}
          className={
          "project-page-button"
          }
          onClick={() => openUrlInNewTab(link.url)}
        >
                              {link.name}
                            </span>
      );})}
    </div>
  </div>)
}