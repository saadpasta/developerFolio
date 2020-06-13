import React, { useState, useEffect } from "react";
import GithubProfileCard from "../../components/githubProfileCard/GithubProfileCard";
import ApolloClient, { gql } from "apollo-boost";
import { openSource } from "../../portfolio";
import Contact from "../contact/Contact";

export default function Profile() {
  const [prof, setrepo] = useState([]);
  function setProfileFunction(array) {
    setrepo(array);
  }
  function getProfileData() {
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      request: (operation) => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${openSource.githubConvertedToken}`,
          },
        });
      },
    });

    client
      .query({
        query: gql`
      {
        user(login:"${openSource.githubUserName}") { 
          name
          bio
          isHireable
          avatarUrl
          location
        }
    }
      `,
      })
      .then((result) => {
        setProfileFunction(result.data.user);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      getProfileData();
    }
  }, []);
  if (openSource.showGithubProfile === "true") {
    return <GithubProfileCard prof={prof} key={prof.id} />;
  } else {
    return <Contact />;
  }
}
