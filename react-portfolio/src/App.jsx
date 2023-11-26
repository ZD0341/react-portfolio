import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AboutMe from './sections/AboutMe';
import Portfolio from './sections/Portfolio'; 
import Contact from './sections/Contact';  
import Resume from './sections/Resume';  


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><AboutMe /></Layout>} />
        <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/resume" element={<Layout><Resume /></Layout>} />
      </Routes>
    </Router>
  );
};


export default App;
