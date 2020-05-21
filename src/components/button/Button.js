import React from "react";
import "./Button.css";

export default function Button({ text, className, href, newTab }) {
  return (
    <div>
      <a className="main-button" href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}
