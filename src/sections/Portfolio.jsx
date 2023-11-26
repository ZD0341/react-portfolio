import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import project1Image from '../assets/ecommerce.png';
import project2Image from '../assets/weatherdashboard.png';
import project3Image from '../assets/codequiz.png';
import project4Image from '../assets/workday.png';
import project5Image from '../assets/texteditor.png';
import project6Image from '../assets/star.png';
const Portfolio = () => {
    const [tab, setTab] = useState(1);

    const projects = [
        {
            id: 1,
            name: 'Ecommerce',
            image: project1Image,
            github: 'https://github.com/ZD0341/Ecommerce',
            // deploy: 'https://example.com/project1-demo',
        },
        {
            id: 2,
            name: 'Weather DashBoard',
            image: project2Image,
            github: 'https://github.com/ZD0341/weather-dashboard',
            // deploy: 'https://example.com/project2-demo',
        },
        {
            id: 3,
            name: 'Code Quiz',
            image: project3Image,
            github: 'https://github.com/ZD0341',
            // deploy: 'https://example.com/project3-demo',
        },
        {
            id: 4,
            name: 'Work Scheduler',
            image: project4Image,
            github: 'https://github.com/ZD0341/Work-Day-Scheduler',
            // deploy: 'https://example.com/project4-demo',
        },
        {
            id: 5,
            name: 'Text Editor',
            image: project5Image,
            github: 'https://github.com/ZD0341/Text-Editor',
            // deploy: 'https://example.com/project5-demo',
        },
        {
            id: 6,
            name: 'Star',
            image: project6Image,
            github: 'https://github.com/ZD0341/STAR',
            // deploy: 'https://example.com/project6-demo',
        },
    ];

    return (
        <div id="portfolio" className="bg-gray-800 text-white py-10">

            <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2">
                {tab === 1
                    ? projects.map((project) => (
                        <ProjectCard key={project.id} item={project} />
                    ))
                    : null}

            </div>
        </div>
    );
};

export default Portfolio;