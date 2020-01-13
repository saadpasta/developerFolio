import {greeting} from "../../portfolio";
import "./Resume.css";
import React from "react";

export default function Resume() {
    return (
        <div className="resume-container">
            <iframe frameBorder="0" className="resume-frame" src={greeting.resumeLink}/>
        </div>
    );
}
