import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import BoulaidCastelo from './components/BoulaidCastelo';
import ExpoLandOfMemory from './components/ExpoLandOfMemory';
import HoufelsAnimado from './components/HoufelsAnimado';
import BoulaidCasteloAtt from './components/BoulaidCasteloAtt';
import ThreeDModel from './components/ThreeDModel';
import BoulaidReduzido from './components/BoulaidReduzido';
import FBXModel from './components/FBXModel';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model1" element={<BoulaidCastelo />} />
        <Route path="/model2" element={<ExpoLandOfMemory />} />
        <Route path="/model3" element={<HoufelsAnimado />} />
        <Route path="/model4" element={<BoulaidCasteloAtt />} />
        <Route path="/model5" element={<BoulaidReduzido />} />
        {/* <Route path="/model6" element={<FBXModel />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
