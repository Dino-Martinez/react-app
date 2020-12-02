// src/App.js

import React from 'react';
import './App.css';
import Title from './Title';
import SFPOPList from './SFPOPList';
import Footer from './Footer';
import About from './About';
import Details from './POPSDetails';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Title/>
        <Route exact path='/' component={SFPOPList}/>
        <Route path='/about' component={About}/>
        <Route path='/details/:id' component={Details}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;