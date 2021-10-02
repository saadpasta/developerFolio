import React from "react";
import "./AchievementCard.scss";
import {isValidHttpUrl, checkMissingValuesObj} from "../errorfunc";

export default function AchievementCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URl for ${name} not found `);
      return;
    }
    if (!isValidHttpUrl(url)) {
      console.log(`URl for ${name} is wrong `);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }
  checkMissingValuesObj(cardInfo, cardInfo.title, "Achievement");

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        <img src={cardInfo.image} alt="PWA" className="card-image"></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          checkMissingValuesObj(v, v.name, cardInfo.title, "Achievement");
          return (
            <span
              key={i}
              className={
                isDark ? "dark-mode certificate-tag" : "certificate-tag"
              }
              onClick={() => openUrlInNewTab(v.url, v.name)}
            >
              {v.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
