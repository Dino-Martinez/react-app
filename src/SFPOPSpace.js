// src/Project.js

import React from 'react'

function POPSSpace(props) {
  const {name, image, address} = props;
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}images/${image}`}     
        width="300"
        height="300" 
        alt={image}
      />
      <h1>{name}</h1>
  <div>{address}</div>
    </div>
  )
}

export default POPSSpace