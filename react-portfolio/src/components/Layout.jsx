import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import './styles/main.css';

const Layout = ({ children }) => {
    return (
      <div className="flex flex-col min-h-screen">
        <header className="bg-gray-800 text-white p-4 text-center">
          <h1 className="text-2xl font-bold">Hi! Welcome to my Portfolio.</h1>
        </header>
        <Navigation />
        <main className="flex-grow p-4">
          <div className="container mx-auto">{children}</div>
        </main>
        <Footer />
      </div>
    );
  };
  
  export default Layout;