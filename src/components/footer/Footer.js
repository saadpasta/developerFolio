import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";

export default function Footer() {
  return (
  	<Fade bottom duration={1000} distance="5px">
    <div className="footer-div">
      <p className="footer-text">Made with ❤️ by Saad Pasta</p>
    </div>
    </Fade>
  );
}
