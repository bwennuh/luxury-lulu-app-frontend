import React, { Component } from 'react';
import './App.css';
import MainContainer from './components/MainContainer.js'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render(){
    return (
      <Router>
        <MainContainer />
      </Router>
    );
  }
}

export default App;