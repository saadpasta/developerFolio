import React, {useContext, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {openSource, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";
import useFetch from "../../hooks/useFetch";

const GithubRepoCard = lazy(() =>
  import("../../components/githubRepoCard/GithubRepoCard")
);
const renderLoader = () => <Loading />;

export default function Projects() {
  const {isDark} = useContext(StyleContext);
  const {data, error} = useFetch("/profile.json", {
    errorMessage:
      "(because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)"
  });

  if (error || !openSource.display) {
    return null;
  }

  const repo = data?.data?.user?.pinnedItems?.edges ?? [];

  return (
    <Suspense fallback={renderLoader()}>
      <div className="main" id="opensource">
        <h1 className="project-title">Open Source Projects</h1>
        <div className="repo-cards-div-main">
          {repo.map((v, i) => {
            if (!v) {
              console.error(
                `Github Object for repository number : ${i} is undefined`
              );
            }
            return <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />;
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={socialMediaLinks.github}
          newTab={true}
        />
      </div>
    </Suspense>
  );
}
