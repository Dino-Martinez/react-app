// src/POPOSList.js

import React from 'react';
import POPSSpace from './SFPOPSpace';

function POPSList() {
  return (
    <div>
      <POPSSpace
        name="50 California Street"
        address="50 California St."
        image="50-california-st.jpg"
      />
      <POPSSpace 
        name="100 Pine"
        address="100 Pine St."
        image="100-pine.jpg"
      />
    </div>
  )
}

export default POPSList