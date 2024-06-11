// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Escolha um Modelo 3D</h1>
        <nav>
          <ul>
            <li><Link to="/model1">BoulaidCastelo</Link></li>
            <li><Link to="/model2">ExpoLandOfMemory</Link></li>
            <li><Link to="/model3">HoufelsAnimado</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Home;
