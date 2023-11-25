import React from 'react';

const Resume = () => {
    return (
      <section>
        <h2>Resume</h2>
        <p>
          Download my resume:{' '}
          <a href="/path/to/your/resume.pdf" download>
            Resume.pdf
          </a>
        </p>
        <h3>Proficiencies</h3>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          {/* Add more proficiencies as needed */}
        </ul>
      </section>
    );
  };

export default Resume;