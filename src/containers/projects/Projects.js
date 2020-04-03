import React, { useState, useEffect } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import "./Project.css";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import { openSource } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Projects() {
  const [repo, setrepo] = useState([]);

  useEffect(() => {
    getRepoData();
  }, []);

  function getRepoData() {
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      request: operation => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${atob(openSource.githubConvertedToken)}`
          }
        });
      }
    });

    client
      .query({
        query: gql`
          {
            repositoryOwner(login: "${openSource.githubUserName}") {
              ... on User {
                pinnedRepositories(first: 6) {
                  edges {
                    node {
                      nameWithOwner
                      description
                      forkCount
                      stargazers {
                        totalCount
                      }
                      url
                      id
                      diskUsage
                      primaryLanguage {
                        name
                        color
                      }
                    }
                  }
                }
              }
            }
          }
        `
      })
      .then(result => {
        setrepoFunction(result.data.repositoryOwner.pinnedRepositories.edges);
        console.log(result);
      });
  }

  function setrepoFunction(array) {
    setrepo(array);
  }

  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="opensource">
      <h1 className="project-title">Open Source Projects</h1>
      <div className="repo-cards-div-main">
        {repo.map((v, i) => {
          return <GithubRepoCard repo={v} key={v.node.id} />;
        })}
      </div>
      <Button text={"More Projects"} className="project-button" href="https://github.com/saadpasta" newTab={true} />
    </div>
    </Fade>
  );
}
