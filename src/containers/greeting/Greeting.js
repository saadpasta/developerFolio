import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { gretting } from "../../portfolio";

export default function Greeting() {
  return (
    <div className="gretting-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">{gretting.title}</h1>
            <p className="greeting-text-p subTitle">{gretting.subTitle}</p>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={gretting.resumeLink} />
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <img alt="saad sitting on table" src={require("../../assests/images/manOnTable.svg")}></img>
        </div>
      </div>
    </div>
  );
}
