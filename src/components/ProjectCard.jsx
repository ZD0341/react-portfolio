import React from 'react';

const ProjectCard = ({ item }) => {
  const { name, image, github, deploy } = item;

  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={name}
        style={{ maxHeight: '200px' }}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
      </div>
      <div className="px-6 pb-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mr-4"
        >
          GitHub
        </a>
        <a
          href={deploy}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Deployment
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;