import React from 'react';
import '../../styles/main.css';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="flex justify-center space-x-4">
        <a href="https://github.com/ZD0341hub-profile" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/zechiel-lozer-0a49642a1/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://stackoverflow.com/users/your-stackoverflow-profile" target="_blank" rel="noopener noreferrer">
          Stack Overflow
        </a>
      </div>
    </footer>
  );
};

export default Footer;