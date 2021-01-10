import React from 'react';

import './FoodTruck.css';

interface FoodTruckProps {
  id: string;
  name: string;
  url: string;
  phone: string;
  email: string;
  instagram: string;
  facebook: string;
  twitter: string;
  description: string;
  rating: string;
}

const FoodTruck = (props: FoodTruckProps) => {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default FoodTruck;
