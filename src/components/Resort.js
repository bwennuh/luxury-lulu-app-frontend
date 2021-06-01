import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Resort extends Component {

  render(){

    return(
      <div >
        <div id="Resort_view">
         
        </div>

        <div>
          <h2>Lulu Luxury Resorts</h2>
          {this.props.resorts.map(resort => <p>{resort.resort_name}</p>)}
        </div>

      </div>
    )
  }
}

export default Resort 