import React from "react";
import GetInfoToolTip from "./GetInfoToolTip";

export default function GetSkillIcon(input) {
  return (
    <div className="tooltipBase">
      <img
        id={input.tooltip.name + "-forceTexture"}
        className="dev-hidden-img"
        src={input.boidForceTexture}
      ></img>
      <a
        className="software-skill-pointer"
        onClick={event => {
        if(window.screen.width>768)
          window.open(input.link, '_blank').focus();}} target="_blank">
        {input.saturatedIcon ? (
          <img
            className="dev-icons-picture-saturated"
            src={input.saturatedIcon}
            alt={input.tooltip.name + "_saturated"}
          />
        ) : null}
        <img
          className={
            input.saturatedIcon
              ? "dev-icons-picture hideOnHover"
              : "dev-icons-picture"
          }
          src={input.icon}
          alt={input.tooltip.name}
        />
      </a>
      {GetInfoToolTip(input.tooltip)}
    </div>
  );
}
