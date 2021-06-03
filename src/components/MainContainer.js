import React, { Component } from 'react';
import { Switch, Route, Link, Router } from 'react-router-dom'

import Home from './Home.js'
import Navbar from './Navbar.js'
import Login from './login/Login.js'
import PatronLogin from './login/PatronLogin.js'
import ResortLogin from './login/ResortLogin.js'
import Patron from './patron_view/Patron.js'
import Resort from './resort_view/Resort.js'
import ResortInfo from './patron_view/ResortInfo.js'
import BookResort from './patron_view/BookResort.js'
import BookExcursion from './universal/BookExcursion.js'


const BASE_URL = 'http://localhost:9292/'
const patrons_URL = BASE_URL + 'patrons'
const resorts_URL = BASE_URL + 'resorts'
const excursions_URL = BASE_URL + 'excursions'
const bookings_URL = BASE_URL + 'bookings'

class MainContainer extends Component {

  state = {
    allResorts: [],
    allPatrons: [],
    allExcursions: [],
    allBookings: [],
    display: "",
    loginPatron: {},
    loginPatronBookings: [],
    loginPatronResorts: [],
    loginPatronExcursions: [],
    loginResort: {},
    loginResortBookings: [],
    loginResortPatrons: [],
    loginResortExcursions: []
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
      .then(patrons => this.setState({ allPatrons: patrons.patrons }))
  }

  fetchResorts = () => {
    fetch(resorts_URL)
      .then(resp => resp.json())
      .then(resorts => this.setState({ allResorts: resorts.resorts }))
  }

  fetchExcursions = () => {
    fetch(excursions_URL)
      .then(resp => resp.json())
      .then(excursions => this.setState({ allExcursions: excursions.excursions }))
  }

  fetchBookings = () => {
    fetch(bookings_URL)
      .then(resp => resp.json())
      .then(bookings => this.setState({ allBookings: bookings.bookings }))
  }

  renderPatronViewPage = (patron, bookings, resorts, excursions) => {
    this.setState({
      loginPatron: patron,
      loginPatronBookings: bookings,
      loginPatronResorts: resorts,
      loginPatronExcursions: excursions
    })
  }

  renderResortViewPage = (resort, bookings, patrons, excursions) => {
    this.setState({
      loginResort: resort,
      loginResortBookings: bookings,
      loginResortPatrons: patrons,
      loginResortExcursions: excursions
    })
  }

  addmember = patron => this.setState({
    ...this.state,
    allPatrons: [...this.state.patrons, patron]
  })

  render() {
    return (
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
            <PatronLogin addmember={this.addmember} patrons={this.state.allPatrons} resorts={this.state.allResorts} excursions={this.state.allExcursions} bookings={this.state.allBookings} patronView={this.renderPatronViewPage} />
          </Route>

          <Route path='/resort-login'>
            <ResortLogin patrons={this.state.allPatrons} resorts={this.state.allResorts} excursions={this.state.allExcursions} bookings={this.state.allBookings} resortView={this.renderResortViewPage} allBookings={this.state.allBookings}/>
          </Route>

          <Route path='/resort-view'>
            <Resort resort={this.state.loginResort} patrons={this.state.loginResortPatrons} excursions={this.state.loginResortExcursions} bookings={this.state.loginResortBookings} allBookings={this.state.allBookings} />
          </Route>

          <Route path='/patron-view'>
            <Patron patron={this.state.loginPatron} bookedResorts={this.state.loginPatronResorts} excursions={this.state.loginPatronExcursions} bookings={this.state.loginPatronBookings} allBookings={this.state.loginPatronBookings} resorts={this.state.allResorts} />
          </Route>

          <Route path='/patron-view-booked-resort-info'>
            <ResortInfo resorts={this.state.allResorts} />
          </Route>

          <Route path='/patron-view-book-new-resort'>
            <BookResort resorts={this.state.allResorts} />
          </Route>

          <Route path='/resort-view-book-new-excursion'>
            <BookExcursion excursions={this.state.allExcursions} />
          </Route>

        </Switch>

      </div>
    )
  }
}

export default MainContainer