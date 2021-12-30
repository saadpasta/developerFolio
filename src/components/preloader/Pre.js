import React from "react";
import PreloaderLottie from "../../assets/lottie/preLoader";
import DisplayLottie from "../displayLottie/DisplayLottie";
import {illustration} from "../../portfolio";
import {useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import "./Pre.scss";

function Pre(props) {
  const {isDark} = useContext(StyleContext);

  return (
    <div
      id={
        isDark
          ? props.load
            ? "preloader-dark"
            : "preloader-none"
          : props.load
          ? "preloader-light"
          : "preloader-none"
      }
    >
      {props.load ? (
        illustration.animated ? (
          <DisplayLottie animationData={PreloaderLottie} width={250} />
        ) : (
          <img
            class="svg-loader "
            alt="pre loader svg"
            src={require("../../assets/pre.gif")}
          />
        )
      ) : null}
    </div>
  );
}

export default Pre;
