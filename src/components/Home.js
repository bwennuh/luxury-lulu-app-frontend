import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {

  state = {
  }

  render(){
    return(
      <div>
        <h1>🌴 🐧  WELCOME TO LUXURY LULU 🐧 🌴 </h1>

        <Link to='/login'>
          <button>LOG IN</button>
        </Link>

      </div>
    )
  }
}

export default Home