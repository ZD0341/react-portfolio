import React from 'react';
import Project from '../components/Project';
import project1Image from '../assets/photos/project1.jpg';
import project2Image from '../assets/photos/project2.jpg';
import project3Image from '../assets/photos/project3.jpg';
import project4Image from '../assets/photos/project4.jpg';
import project5Image from '../assets/photos/project5.jpg';
import project6Image from '../assets/photos/project6.jpg';

const portfolio = [
  {
    id: 1,
    name: 'Ecommerce',
    image: project1Image,
    github: 'https://github.com/yourusername/project1',
    deploy: 'https://example.com/project1-demo',
  },
  {
    id: 2,
    name: 'Project 2',
    image: project2Image,
    github: 'https://github.com/yourusername/project2',
    deploy: 'https://example.com/project2-demo',
  },
  {
    id: 3,
    name: 'Project 3',
    image: project3Image,
    github: 'https://github.com/yourusername/project3',
    deploy: 'https://example.com/project3-demo',
  },
  {
    id: 4,
    name: 'Project 4',
    image: project4Image,
    github: 'https://github.com/yourusername/project4',
    deploy: 'https://example.com/project4-demo',
  },
  {
    id: 5,
    name: 'Project 5',
    image: project5Image,
    github: 'https://github.com/yourusername/project5',
    deploy: 'https://example.com/project5-demo',
  },
  {
    id: 6,
    name: 'Project 6',
    image: project6Image,
    github: 'https://github.com/yourusername/project6',
    deploy: 'https://example.com/project6-demo',
  },
];


const Portfolio = () => {
    return (
      <section>
        <h2>Portfolio</h2>
        <div className="grid-container vertical-line">
          {portfolio.map((project) => (
            <Project
              key={project.id}
              image={project.image}
              title={project.name}
              deployLink={project.deploy}
              githubLink={project.github}
            />
          ))}
        </div>
      </section>
    );
  };
  

export default Portfolio;