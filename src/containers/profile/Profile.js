import React, {lazy, Suspense} from "react";
import {openSource} from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";
import useFetch from "../../hooks/useFetch";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);

export default function Profile() {
  const showGithubProfile = openSource.showGithubProfile === "true";
  const {data, error} = useFetch(showGithubProfile ? "/profile.json" : null, {
    errorMessage:
      "(because of this error GitHub contact section could not be displayed. Contact section has reverted to default)"
  });

  if (!(openSource.display && showGithubProfile) || error) {
    return <Contact />;
  }

  const prof = data ? data.data.user : [];
  return (
    <Suspense fallback={renderLoader()}>
      <GithubProfileCard prof={prof} key={prof.id} />
    </Suspense>
  );
}
