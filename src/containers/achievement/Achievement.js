import React from "react";
import "./Achievement.css";
import AchivementCard from "../../components/achievementCard/AchivementCard";

export default function Achievement() {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <div className="main" id="achievements">
      <div className="achievement-main-div">
        <div className="achievement-header">
          <h1 className="heading achievement-heading">Achievements And Certifications 🏆</h1>
          <p className="subTitle achievement-subtitle">Achievements, Certifications Award Letters and Some Cool Stuff that i have done !</p>
        </div>
        <div className="achievement-cards-div">
          <AchivementCard
            cardInfo={{
              title: "Google Code-In Finalist",
              description: "First Pakistani to be selected as Google Google-in Finalist from 4000 students from 77 diffrent countries",
              image: "codeInLogo.png",
              footer: [
                { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
                { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
                { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
              ]
            }}
          />
          <AchivementCard
            cardInfo={{
              title: "Google Assistant Action",
              description: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
              image: "googleAssistant.svg",
              footer: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
            }}
          />
          <AchivementCard
            cardInfo={{
              title: "PWA Web App Developer",
              description: "Completed Certifcation from SMIT for PWA Web App Development.",
              image: "pwa.png",
              footer: [
                { name: "Certification", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" },
                { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
              ]
            }}
          />
        </div>
      </div>
    </div>
  );
}
