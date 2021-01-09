import React, { useEffect, useState } from 'react';
import Regions from './components/Regions/Regions';
import './App.css';

const App = () => {
  const [regionId, setRegionId] = useState<string>('');

  useEffect(() => {
    console.log(regionId);
  }, [regionId]);

  return (
    <div className="App">
      <header className="App-header">
        <Regions updateRegionId={setRegionId} />
      </header>
    </div>
  );
};

export default App;
