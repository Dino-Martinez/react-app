// src/Project.js

import React from 'react';
import './SFPOPSpace.css';

function POPSSpace(props) {
  const {name, image, address} = props;
  return (
    <div className="POPSSpace">
      <img src={`${process.env.PUBLIC_URL}images/${image}`}     
        width="300"
        height="300" 
        alt={image}
      />
      <h2>{name}</h2>
      <h4>{address}</h4>
    </div>
  )
}

export default POPSSpace