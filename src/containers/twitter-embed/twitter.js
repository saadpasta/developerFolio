import React, { Suspense, setState, useContext } from "react";
import "./twitter.css";
import Loading from "../loading/Loading";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { twitterDetails } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import FailedLoading from "../failedLoading/FailedLoading";

const CUSTOM_ERR_MSG = "Can't load? Check privacy protection settings"
const renderLoader = () => <Loading />;
const cantDisplayError =
  `<div class='centerContent'><h2>${CUSTOM_ERR_MSG}</h2></div>`;

function timeOut() {
  setTimeout(function () {
    if (!document.getElementById("twitter").innerHTML.includes("iframe")) {
      document.getElementById("twitter").innerHTML = cantDisplayError;
    }
  }, 10000);
}
var widthScreen = window.screen.width;

export default function Twitter() {
  const { isDark } = useContext(StyleContext);

  if (twitterDetails.userName) {
    return (
      <Suspense fallback={renderLoader()}>
        <div class="tw-main-div" id="twitter">
          <div className="centerContent">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName={twitterDetails.userName}
              options={{ height: 400, width: { widthScreen } }}
              placeholder={renderLoader()}
              autoHeight={false}
              borderColor="#fff"
              key={isDark ? "1" : "2"}
              theme={isDark ? "dark" : "light"}
              noFooter={true}
              onload={timeOut()}
            />
          </div>
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading err={CUSTOM_ERR_MSG} />;
  }
}
