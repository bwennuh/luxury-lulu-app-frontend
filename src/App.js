import React, { Component } from 'react';
import './App.css';
import MainContainer from './components/MainContainer.js'
import { BrowserRouter as Router } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render(){
    return (
      <div className="homepage">
      <Router>
        <MainContainer />
      </Router>
      </div>
    );
  }
}

export default App;