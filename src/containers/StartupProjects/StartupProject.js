import React, {useContext} from "react";
import "../projects/Project.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
// import {workExperiences} from "../../portfolio";
import {Fade} from  "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experience: [
      {
        // role: "Life Dasboard",
        company: "Life Dashboard",
        companylogo: require("../../assets/images/life-dashboard.png"),
        // date: "July 2023 – August 2023",
        desc: "A full-stack web application providing comprehensive, real-time health and wellness metrics by integrating devices like Oura ring, blood glucose monitors, and Fitbit scales. Designed for health enthusiasts and professionals, it offers a seamless experience in centralizing and monitoring health data.",
        footerLink: [
          {
            name: "Visit Demo",
            url: "https://life-dashboard-indol.vercel.app/"
          }
          //  you can add extra buttons here.
        ]
      }
    ]
  };

  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Personal projects</h1>
              <div className="container">
                <div className="experience-cards-div">
                  {workExperiences.experience.map((card, i) => {
                    return (
                      <ExperienceCard
                        key={i}
                        isDark={isDark}
                        cardInfo={{
                          company: card.company,
                          desc: card.desc,
                          date: card.date,
                          companylogo: card.companylogo,
                          role: card.role,
                          descBullets: card.descBullets,
                          footerLink: card.footerLink
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}

// import React, {useContext} from "react";
// import "./StartupProjects.scss";
// import {bigProjects} from "../../portfolio";
// import {Fade} from "react-reveal";
// import StyleContext from "../../contexts/StyleContext";

// export default function StartupProject() {
//   function openUrlInNewTab(url) {
//     if (!url) {
//       return;
//     }
//     var win = window.open(url, "_blank");
//     win.focus();
//   }

//   const {isDark} = useContext(StyleContext);
//   if (!bigProjects.display) {
//     return null;
//   }
//   return (
//     <Fade bottom duration={1000} distance="20px">
//       <div className="main" id="projects">
//         <div>
//           <h1 className="skills-heading">{bigProjects.title}</h1>
//           <p
//             className={
//               isDark
//                 ? "dark-mode project-subtitle"
//                 : "subTitle project-subtitle"
//             }
//           >
//             {bigProjects.subtitle}
//           </p>

//           <div className="projects-container">
//             {bigProjects.projects.map((project, i) => {
//               return (
//                 <div
//                   key={i}
//                   className={
//                     isDark
//                       ? "dark-mode project-card project-card-dark"
//                       : "project-card project-card-light"
//                   }
//                 >
//                   {project.image ? (
//                     <div className="project-image">
//                       <img
//                         src={project.image}
//                         alt={project.projectName}
//                         className="card-image"
//                       ></img>
//                     </div>
//                   ) : null}
//                   <div className="project-detail">
//                     <h5
//                       className={isDark ? "dark-mode card-title" : "card-title"}
//                     >
//                       {project.projectName}
//                     </h5>
//                     <p
//                       className={
//                         isDark ? "dark-mode card-subtitle" : "card-subtitle"
//                       }
//                     >
//                       {project.projectDesc}
//                     </p>
//                     {project.footerLink ? (
//                       <div className="project-card-footer">
//                         {project.footerLink.map((link, i) => {
//                           return (
//                             <span
//                               key={i}
//                               className={
//                                 isDark ? "dark-mode project-tag" : "project-tag"
//                               }
//                               onClick={() => openUrlInNewTab(link.url)}
//                             >
//                               {link.name}
//                             </span>
//                           );
//                         })}
//                       </div>
//                     ) : null}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </Fade>
//   );
// }
