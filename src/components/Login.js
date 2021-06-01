import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Login extends Component {

  render(){
    return(
      <div>
        <h1>LOGIN PAGE</h1>

        <div id="choose-login">

          <Link to='/patron-login'>
            <button id="patron-login-button">Patron Login</button>
          </Link>

          <Link to='/resort-login'>
            <button id="resort-login-button">Resort Login</button>
          </Link>
        </div>

      </div>
    )
  }
}

export default Login