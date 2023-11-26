import React from 'react';

const Project = ({ image, title, deployLink, githubLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <div className="project-links">
        <a href={deployLink} target="_blank" rel="noopener noreferrer" className="project-link">
          Deployed
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Project;