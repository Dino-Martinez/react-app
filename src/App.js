// src/App.js

import React from 'react';
import './App.css';
import Title from './Title';
import SFPOPList from './SFPOPList';
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Title/>
      <SFPOPList/>
      <Footer/>
    </div>
  );
}

export default App;