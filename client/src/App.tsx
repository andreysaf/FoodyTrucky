import React from 'react';
import { useQuery, gql } from '@apollo/client';
import './App.css';

const REGIONS = gql`
query GetRegions {
  regions {
    name
    country
  }
}
`;

const App = () => {
  const { loading, error, data } = useQuery(REGIONS);

  return (
    <div className="App">
      <header className="App-header">
        {loading ? <p>Loading...</p> : data.regions.map((region: any) => <div>{region.name}, {region.country}</div> )}
      </header>
    </div>
  );
}

export default App;
