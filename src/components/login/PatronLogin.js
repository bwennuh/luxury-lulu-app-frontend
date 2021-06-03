import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Patron from '../patron_view/Patron.js'

class PatronLogin extends Component {

  state = {
    username: "",
    password: "",
    patron: {},
    bookings: [],
    resorts: [],
    excursions: []
  }

  submitHandler = (event) => {
    event.preventDefault()
    console.log("Add on submit logic!")

    const usernameInput = event.target.children[0]
    const passwordInput = event.target.children[2]


    this.findPatronData()

    usernameInput.value = ""
    passwordInput.value = ""

    this.setState({
      username: "",
      password: "",
      patron: {},
      bookings: [],
      resorts: [],
      excursions: []
    })

  }

  findPatronData = () => {
    let patronUsername = this.state.username
    let patrons = this.props.patrons
    let resorts = this.props.resorts
    let bookings = this.props.bookings
    let excursions = this.props.excursions

    let loginPatron = patrons.find(patron => patron.patron_name === patronUsername)
    this.setState({ patron: loginPatron })
    console.log(loginPatron)

    let patronBookings = bookings.filter(booking => booking.patron_id === loginPatron.id)
    this.setState({ bookings: patronBookings })
    console.log(patronBookings)

    let patronResorts = patronBookings.map(booking => {
      return (resorts.find(resort => resort.id === booking.resort_id))
    })
    let filteredResorts = [...new Set(patronResorts)]
    this.setState({ resorts: filteredResorts })
    console.log(patronResorts)
    console.log(filteredResorts)

    let patronExcursions = patronBookings.map(booking => {
      return (excursions.find(excursion => excursion.id === booking.excursion_id))
    })
    let filteredExcursions = [...new Set(patronExcursions)]

    this.setState({ excursions: filteredExcursions })
    console.log(patronExcursions)
    console.log(filteredExcursions)

    this.renderPatronPage()
  }

  renderPatronPage = () => {
    return (
      <Patron patron={this.state.patron} bookings={this.state.bookings} resorts={this.state.resorts} excursions={this.state.excursions} />
    )
  }


  render() {
    return (
      <div>
        <h1>PATRON LOGIN PAGE</h1>

        <div id="login-form">

          <h1>Enter Login Info:</h1>
          <form onSubmit={this.submitHandler}>

            <input onChange={(event) => this.setState({ username: event.target.value })} type="text" placeholder="Enter your name" />
            <br></br>
            <input onChange={(event) => this.setState({ password: event.target.value })} type="text" placeholder="Enter password" />

            <br></br>
            {/* <Link to='/patron-view'> */}
              <button type='submit' id="login-button">Login</button>
            {/* </Link> */}

          </form>

        </div>

      </div>
    )
  }
}

export default PatronLogin