import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectItems = projects.map((item)=> {
    return (
      <ProjectItem key = {item.id} name = {item.name} about = {item.about}
      technologies={item.technologies}>
      </ProjectItem>
    )
    
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{
        projectItems
      /* render ProjectItem components here */
      }</div>
    </div>
  );
}

export default ProjectList;
