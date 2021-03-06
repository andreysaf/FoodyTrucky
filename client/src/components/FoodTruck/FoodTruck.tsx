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
      <div className="contact">
        {props.phone && <a href={`tel:${props.phone}`}>
          <i className="fas fa-phone"></i> {props.phone}
        </a>}
        {props.url && <a href={`https://${props.url}`} rel="noreferrer" target={'_blank'}>
        <i className="fas fa-link"></i> {props.url}
        </a>}
      </div>
      <p>
        <i className="fas fa-heart"></i> {props.rating}
      </p>
    </div>
  );
};

export default FoodTruck;
