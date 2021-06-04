import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Home extends Component {

  state = {
  }

  render(){
    return(
      <div className="home_container">

      <Link to='/login'>
          <button>LOG IN</button>
        </Link>

        <h1 className="welcome">🌴 🐧  Welcome to Lulu Luxury 🐧 🌴 </h1>


      </div>
    )
  }
}

export default Home