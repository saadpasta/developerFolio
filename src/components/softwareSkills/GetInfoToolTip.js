import React from "react";
import {skillsSection} from "../../portfolio";

export default function GetInfoToolTip(input) {
  let relatedProjects = skillsSection.projects.filter(p =>
    p.skills.some(s => s.toUpperCase() === input.name.toUpperCase())
  );
  let projectList;
  if (relatedProjects.length > 0)
    projectList = (
      <div>
        <div className="toolTipHead2"> Related Projects:</div>
        <ul className="tooltipList">
          {relatedProjects.map((project, i) => {
            return (
              <li key={i} className="toolTipBulletPoint">
                <a href={project.link} className="noUnderline" target="_blank" rel="noreferrer">
                  {project.description}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  return (
    <div className="tooltip">
      <div className="toolTipHead1">{input.name}</div>
      <div className="toolTipSubTitle">{input.type}</div>
      {projectList}
    </div>
  );
}
