import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Patron extends Component {

  render(){

    return(
      <div >
        <div id="home">
          PATRON PAGE
        </div>

        <div>
          <h2>Current Patrons:</h2>
          {/* {console.log(this.props.patrons)} */}
          {this.props.patrons.map(patron => <p>{patron.patron_name}</p>)}
        </div>

      </div>
    )
  }
}

export default Patron