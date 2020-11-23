// src/App.js

import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Title from './Title/Title';
import About from './About/About'
import POPOSList from './POPOSList/POPOSList';
import Footer from './Footer';
import POPOSDetails from './POPOSDetails/POPOSDetails'
import { HashRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
      <Title />
      <Route exact path="/" component={POPOSList}/>
      <Route exact path="/about" component={About} />
      <Route path="/details/:id" component={POPOSDetails} />
    </div>
    </Router>
  );
}

export default App;
