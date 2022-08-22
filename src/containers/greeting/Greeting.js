import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import StyleContext from "../../contexts/StyleContext";

const BreakTwice = () => {
	return (
		<span>
			<br/><br/>
		</span>
	);
}

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
	const greeting = {
	  username: "Sinan Yumurtaci",
	  title: "Hey, I'm Sinan", // and ...
	  subTitle: "I'm a curious and passionate software professional.",
	  displayGreeting: true // Set false to hide this section, defaults to true
	};

  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle} <BreakTwice/>
			   {/*"Check out some of the cool stuff I built, and the awesome teams I got to work with."*/}
	  			{/*"Skim my resume for a quick summary, or find more details below at your pace."*/} 
				{"Fancy a chat? Find me on on LinkedIn, or just shoot me a message!"}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                {greeting.resumeLink && (
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
              <img
                alt="Close up photograph of Sinan Yumurtaci"
                src={require("../../assets/images/sinanW.png")}
              ></img>
          </div>
        </div>
      </div>
    </Fade>
  )}
