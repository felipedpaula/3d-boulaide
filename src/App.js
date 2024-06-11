// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import BoulaidCastelo from './components/BoulaidCastelo';
import ExpoLandOfMemory from './components/ExpoLandOfMemory';
import HoufelsAnimado from './components/HoufelsAnimado';
import ThreeDModel from './components/ThreeDModel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model1" element={<BoulaidCastelo />} />
        <Route path="/model2" element={<ExpoLandOfMemory />} />
        <Route path="/model3" element={<HoufelsAnimado />} />
      </Routes>
    </Router>
  );
}

export default App;
