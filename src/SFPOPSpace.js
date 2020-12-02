// src/Project.js

import React from 'react';
import './SFPOPSpace.css';
import { Link } from 'react-router-dom'

function POPSSpace(props) {
  const {name, image, address, hours, id} = props;
  return (
    <div className="POPSSpace">
      <Link to={`/details/${id}`} >
        <img src={`${process.env.PUBLIC_URL}images/${image}`}     
          width="300"
          height="300" 
          alt={image}
        />
      </Link>
      <h2>
        <Link to={`/details/${id}`}>
          {name}
        </Link>
      </h2>
      <h4>{address}</h4>
      <h4 className='hours'>{hours}</h4>
    </div>
  )
}

export default POPSSpace