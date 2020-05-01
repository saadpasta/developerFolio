import React, { useState, useEffect } from "react";
import GithubProfileCard from "../../components/githubProfileCard/GithubProfileCard";
import axios from "axios";
import { openSource } from "../../portfolio";
import { Fade } from "react-reveal";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";

export default function Profile() {
  const [prof, setrepo] = useState([]);

  useEffect(() => {
    getProfileData();
  }, []);

  function getProfileData() {
      const client=axios.get("https://api.github.com/users/"+openSource.githubUserName)
            .then(function(response){
                    setProfileFunction(response.data);
                    console.log(response.data);
      })
  }

  function setProfileFunction(array) {
    setrepo(array);
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="github-profile">
                <div className="blog-header">
                   <h1 className="blog-header-text">Reach Out to me!</h1>
                   <p className="subTitle blog-subtitle">{contactInfo.subtitle}</p>
                </div>
                <div className="repo-cards-div-main">
                   <GithubProfileCard prof={prof} key={prof.id} />
                </div>
      </div>
      </Fade>
  );
}
