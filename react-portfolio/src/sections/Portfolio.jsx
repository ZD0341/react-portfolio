import React from 'react';

const Portfolio = () => {
    return (
        <section>
          <h2>Portfolio</h2>
          {/* portfolio projects here */}
          <div>
            <h3>Project 1</h3>
            <p>Description of Project 1.</p>
            <p>
              Demo: <a href="#">Link</a>
            </p>
            <p>
              GitHub: <a href="#">Link</a>
            </p>
          </div>
          <div>
            <h3>Project 2</h3>
            <p>Description of Project 2.</p>
            <p>
              Demo: <a href="#">Link</a>
            </p>
            <p>
              GitHub: <a href="#">Link</a>
            </p>
          </div>
          {/* Add more projects  */}
        </section>
      );
    };
    

export default Portfolio;