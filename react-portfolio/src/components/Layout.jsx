import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import '../../styles/main.css';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navigation />
      <div className="flex-grow p-4">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;