// src/Title.js

import React from 'react';
import './Title.css';
import { NavLink } from 'react-router-dom';

function Title(props) {
  return (
    <div className="Title">
      <h1>SFPOPS</h1>
      <div className="Title-Subtitle">
          <h3>San Francisco Privately Owned Public Spaces</h3>
      </div>

      <div>
          <NavLink activeClassName="nav-link-active" className="nav-link" exact to="/">List</NavLink>
          <NavLink activeClassName="nav-link-active" className="nav-link" to="/about">About</NavLink>
        </div>
    </div>
  )
}

export default Title