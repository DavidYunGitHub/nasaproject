import React from 'react';
import './App.css';
import Container from './components/Container';
import Particles from 'react-particles-js';

const particleOpt = {
  particles: {
    number: {
      value: 280,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

function App() {
  return (
    <div>
      <Particles 
        params={particleOpt}
      />

      <Container />

      <Particles 
        params={particleOpt}
      />
    </div>
  );
}

export default App;
