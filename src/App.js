import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Volunteer from './pages/Volunteer';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <Router basename="/Resume_Website">
     <Navigation /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
    </Router>
  );
}

export default App;
