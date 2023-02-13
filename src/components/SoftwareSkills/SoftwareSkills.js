import React from "react";
import styles from "./SoftwareSkills.module.scss";
import {skillsSection} from "../../pages/portfolio";

export default function SoftwareSkills() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className={styles.devIcons}>
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className={styles.softwareSkillInline}
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   return {
//     props: {
//       skillsSection
//     }
//   }
// }
