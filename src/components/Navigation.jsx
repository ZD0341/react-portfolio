import React from 'react';
import './styles/main.css';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
    const location = useLocation();
  
    return (
      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'text-white underline' : 'text-gray-400'}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'text-white underline' : 'text-gray-400'}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === '/contact' ? 'text-white underline' : 'text-gray-400'}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/resume" className={location.pathname === '/resume' ? 'text-white underline' : 'text-gray-400'}>
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navigation;