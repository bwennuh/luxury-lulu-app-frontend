import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ResortLogin extends Component {

  state = {
    username: "",
    password: ""
  }

  submitHandler = (event) => {
    event.preventDefault()
    console.log("Add on submit logic!")

    const usernameInput = event.target.children[0]
    const passwordInput = event.target.children[2]

    usernameInput.value = ""
    passwordInput.value = ""

    this.setState({
      username: "",
      password: ""
    })

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

          <Link to='/resort-page'>
            <button type='submit' id="login-button">Login</button>
          </Link>

        </form>

        </div>

      </div>
    )
  }
}

export default ResortLogin