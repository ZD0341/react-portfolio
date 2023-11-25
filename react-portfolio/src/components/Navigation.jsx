import React from 'react';
import './styles/main.css';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-600 p-2">
      <ul className="flex space-x-4">
        <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
          <Link to="/">About Me</Link>
        </li>
        <li className={`nav-item ${location.pathname === '/portfolio' ? 'active' : ''}`}>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
          <Link to="/contact">Contact</Link>
        </li>
        <li className={`nav-item ${location.pathname === '/resume' ? 'active' : ''}`}>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;