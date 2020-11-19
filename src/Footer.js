// src/Title.js

import React from 'react'
import './Footer.css'

function Footer(props) {
  return (
    <div className="Footer">
        <p>Secundino Martinez copyright {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer