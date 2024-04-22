

import React, { useContext } from "react";
import "./Resume.scss"; // Make sure to create and style appropriately
import StyleContext from "../../contexts/StyleContext";
import { Fade } from "react-reveal";
import {resumeSection} from "../../portfolio";

export default function Resume() {
  const { isDark } = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className={isDark ? "main dark-mode" : "main"} id="resume">

        <div className="resume-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading resume-heading"
                  : "heading resume-heading"
              }
            >
              {resumeSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle resume-subtitle"
                  : "subTitle resume-subtitle"
              }
            >
              {resumeSection.subtitle}
            </p>
          </div>
        <div className="resume-container">
             {/* Display the subtitle */}
          <object
            data={require("./FINAL RESUME CMU FEB 2024.pdf")} // Ensure the PDF file is located at this path
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <p>Your browser does not support PDFs. Please download the PDF to view it: <a href={require("./FINAL RESUME CMU FEB 2024.pdf")}>Download PDF</a>.</p>
          </object>
        </div>
      </div>
    </Fade>
  );
}
