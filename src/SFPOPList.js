// src/POPOSList.js

import React from 'react';
import POPSSpace from './SFPOPSpace';
import './SFPOPSList.css';
import data from './sfpopos-data.json'

function POPSList() {
  const spaces = data.map(( { title, address, images, hours } ) => {
    return (
      <POPSSpace
        key={title}
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
      />
    )
  })

  return (
    <div className="POPSList">
      { spaces }
    </div>
  )
}

export default POPSList