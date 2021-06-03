import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ResortLogin extends Component {

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


    this.findResortData()

    usernameInput.value = ""
    passwordInput.value = ""

    this.setState({
      username: "",
      password: "",
      resort: {},
      bookings: [],
      patrons: [],
      excursions: []
    })

  }

  findResortData = () => {
    let resortUsername = this.state.username
    let patrons = this.props.patrons
    let resorts = this.props.resorts
    let bookings = this.props.bookings
    let excursions = this.props.excursions

    let loginResort = resorts.find(resort => resort.resort_name === resortUsername)
    this.setState({ resort: loginResort })
    
    if(loginResort){
      alert('We have found the resort account and reservations! Please click "Go to profile" to continue!')
      console.log(loginResort)

      let resortBookings = bookings.filter(booking => booking.resort_id === loginResort.id)
      this.setState({ bookings: resortBookings })
      console.log(resortBookings)
  
      let resortPatrons = resortBookings.map(booking => {
        return (patrons.find(patron => patron.id === booking.patron_id))
      })
      let filteredPatrons = [...new Set(resortPatrons)]
      this.setState({ resorts: filteredPatrons })
      console.log(filteredPatrons)
  
      let resortExcursions = resortBookings.map(booking => {
        return (excursions.find(excursion => excursion.id === booking.excursion_id))
      })
      let filteredExcursions = [...new Set(resortExcursions)]
  
      this.setState({ excursions: filteredExcursions })
      console.log(filteredExcursions)
  
      this.props.resortView(loginResort, resortBookings, filteredPatrons, filteredExcursions)
    } else {
      alert("There is no resort with that name in our database. Please try again!")
    }
  }

  render(){
    return(
      <div>
        <h1>RESORT LOGIN PAGE</h1>

        <div id="login-form">

        <h1>Enter Login Info:</h1>
        <form onSubmit={this.submitHandler}>

          <input onChange={(event) => this.setState({username: event.target.value})} type="text" placeholder="Enter your username"/>
          <br></br>
          <input onChange={(event) => this.setState({password: event.target.value})} type="text" placeholder="Enter password"/>
          <br></br>


          <button type='submit' id="login-button">Login</button>

          <Link to='/resort-view'>
            <button id="profile">Go to Resort Profile</button>
          </Link>

        </form>

        </div>

      </div>
    )
  }
}

export default ResortLogin