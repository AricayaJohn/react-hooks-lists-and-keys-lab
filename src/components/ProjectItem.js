import React from "react";

function ProjectItem({ name, about, technologies }) {
  const techProducts = technologies.map((tech)=> (  //why () instead of {}
      <span key = {tech}> {tech}</span>
    ))
 
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        { techProducts }
      </div>
    </div>
  );
}

export default ProjectItem;
