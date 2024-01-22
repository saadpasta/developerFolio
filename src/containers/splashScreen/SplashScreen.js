import React, {useContext} from "react";
import "./SplashScreen.css";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import {greeting, splashScreen} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SplashScreen() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-animation-container">
        <DisplayLottie animationData={splashScreen.animation} />
      </div>
      <div className="splash-title-container">
        <span>&lt;</span>
        <span className="splash-title">{greeting.username}</span>
        <span>/&gt;</span>
      </div>
    </div>
  );
}
