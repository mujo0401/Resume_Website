import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Volunteer from './pages/Volunteer';
import './App.css';

function App() {
  return (
    <Router basename="/Resume_Website">
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/education" element={<Education />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
    </Router>
  );
}

export default App;
