import React, { useState } from 'react';
import Regions from './queries/Regions/Regions';
import FoodTrucks from './queries/FoodTrucks/FoodTrucks';
import './App.css';

const App = () => {
  const [regionId, setRegionId] = useState<string>('');

  return (
    <div className="App">
      <header className="App-header">
        <Regions updateRegionId={setRegionId} />
        <div className='container'>{regionId !== '' ? <FoodTrucks region={regionId} /> : null}</div>
      </header>
    </div>
  );
};

export default App;
