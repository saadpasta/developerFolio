import React, { useState, useEffect } from "react";
import GithubProfileCard from "../../components/githubProfileCard/GithubProfileCard";
import axios from "axios";
import { openSource } from "../../portfolio";
import { Fade } from "react-reveal";
import Contact from "../contact/Contact";


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
	if (openSource.showProfile === "true"){
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="github-profile">
                <div className="repo-cards-div-main">
                   <GithubProfileCard prof={prof} key={prof.id} />
                </div>
      </div>
      </Fade>
);} else {
	return(<Contact />);
}
}
