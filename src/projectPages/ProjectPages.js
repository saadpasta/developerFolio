import React from "react";
import {Navigate, Route} from "react-router-dom";
import {projectPages} from "../portfolio";
import ProjectPage from "./ProjectPage";

export default function ProjectPages() {
  return projectPages.map((project, i) => {
    const mainRoute = project.routes[0];
    return project.routes.map((route, i) => {
      if (i === 0) {
        return (
          <Route
            path={mainRoute}
            element={ProjectPage(project)}
            key={"Main-Route-to-" + mainRoute}
          />
        );
      }
      return (
        <Route
          path={route}
          element={<Navigate to={mainRoute} />}
          key={"Alt-Route-to-" + mainRoute + "-" + i}
        />
      );
    });
  });
}
