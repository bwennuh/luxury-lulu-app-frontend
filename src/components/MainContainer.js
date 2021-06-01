import React, { Component } from 'react';
import { Switch, Route, Link, Router } from 'react-router-dom'

import Home from './Home.js'
import Navbar from './Navbar.js'
import Login from './Login.js'
import PatronLogin from './PatronLogin.js'
import ResortLogin from './ResortLogin.js'
import Patron from './Patron.js'
import Resort from './Resort.js'
import ResortInfo from './ResortInfo.js'
import BookResort from './BookResort.js'


const BASE_URL = 'http://localhost:9292/'
const patrons_URL = BASE_URL + 'patrons'
const resorts_URL = BASE_URL + 'resorts'
const excursions_URL = BASE_URL + 'excursions'
const bookings_URL = BASE_URL + 'bookings'

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

        <Switch>

          <Route exact path={['/', '/home']}>
            <Home />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/patron-login'>
            <PatronLogin />
          </Route>

          <Route path='/resort-login'>
            <ResortLogin />
          </Route>

          <Route path='/resort-view'>
            <Resort patrons={this.state.patrons} resorts={this.state.resorts} excursions={this.state.excursions} bookings={this.state.bookings} />
          </Route>

          <Route path='/patron-view'>
            <Patron patrons={this.state.patrons} resorts={this.state.resorts} excursions={this.state.excursions} bookings={this.state.bookings} />
          </Route>

          <Route path='/patron-view-booked-resort-info'>
            <ResortInfo resorts={this.state.resorts} />
          </Route>
          
          <Route path='/patron-view-book-new-resort'>
            <BookResort resorts={this.state.resorts} />
          </Route>

        </Switch>

      </div>
    )
  }
}

export default MainContainer