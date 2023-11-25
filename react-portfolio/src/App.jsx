import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AboutMe from './sections/AboutMe';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <AboutMe />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
