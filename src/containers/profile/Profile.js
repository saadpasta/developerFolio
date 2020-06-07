import React, { useState, useEffect  ,lazy, Suspense } from "react";
//import GithubProfileCard from "../../components/githubProfileCard/GithubProfileCard";
import axios from "axios";
import { openSource } from "../../portfolio";
import Contact from "../contact/Contact";

const renderLoader = () => <div className="centerContent loader"></div>;
const GithubProfileCard = lazy(() => import('../../components/githubProfileCard/GithubProfileCard'));
export default function Profile() {
  const [prof, setrepo] = useState([]);
  function setProfileFunction(array) {
    setrepo(array);
  }
  function getProfileData() {
    const client=axios.get("https://api.github.com/users/"+openSource.githubUserName)
      .then(function(response){
            setProfileFunction(response.data);
      })
      .catch(function (error) {
          console.log(error);
          setProfileFunction(error);
          console.log("Because of this Error Contact Section is Showed instead of Profile");
          openSource.showGithubProfile = "false";
        });
  }
  useEffect(() => {
    getProfileData();
  }, []);
  if (openSource.showGithubProfile === "true" && (typeof prof === 'string' || prof instanceof String)){
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} /> 
      </Suspense>
       );
  } else {
    return(<Contact />);
  }
}
