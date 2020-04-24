import React from 'react';
import './App.css';
import { randomPlace } from './place_generator';
import { randomRegion } from './region_generator';

function App() {
  const regions = []
  for (let index = 0; index < 10; index++) {
    regions.push(randomRegion())
  }

  const places = []
  for (let index = 0; index < 10; index++) {
    places.push(randomPlace())
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="regions">
          <h1>Regions</h1>
          <ul>
            {regions.map((region, index) => <li className="namelist" key={index} >{region}</li>)}
          </ul>
        </div>
        <div className="places">
          <h1>Places</h1>
          <ul>
            {places.map((place, index) => <li className="namelist" key={index}>{place}</li>)}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
