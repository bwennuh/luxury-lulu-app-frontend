import React, { Component } from 'react';
// import { Switch, Route, Link, Router } from 'react-router-dom'

import Home from './Home.js'
import Navbar from './Navbar.js'
import Resort from './Resort.js'
import Patron from './Patron.js'

const BASE_URL = 'http://localhost:9292/'
const patrons_URL = 'http://localhost:9292/patrons'
const resorts_URL = 'http://localhost:9292/resorts'
const excursions_URL = 'http://localhost:9292/excursions'
const bookings_URL = 'http://localhost:9292/bookings'

class MainContainer extends Component {

  state = {
    resorts: [],
    patrons: [],
    excursions: [],
    bookings: [],
    display: ""
  }

  componentDidMount() {
    this.fetchAllData()
  }

  fetchAllData = () => {
    this.fetchPatrons()
    this.fetchResorts()
    this.fetchExcursions()
    this.fetchBookings()
  }

  fetchPatrons = () => {
    fetch(patrons_URL)
    .then(resp => resp.json())
    .then(patrons => this.setState({patrons: patrons.patrons}))
  }

  fetchResorts = () => {
    fetch(resorts_URL)
    .then(resp => resp.json())
    .then(resorts => this.setState({resorts: resorts.resorts}))
  }

  fetchExcursions = () => {
    fetch(excursions_URL)
    .then(resp => resp.json())
    .then(excursions => this.setState({excursions: excursions.excursions}))
  }

  fetchBookings = () => {
    fetch(bookings_URL)
    .then(resp => resp.json())
    .then(bookings => this.setState({bookings: bookings.bookings}))
  }

  render(){
    return(
      <div>
        <h1>MAIN CONTAINER RENDERED</h1>
          
          <Navbar />

          <Patron patrons={this.state.patrons} />

          <Resort resorts={this.state.resorts} /> 

      </div>
    )
  }
}

export default MainContainer