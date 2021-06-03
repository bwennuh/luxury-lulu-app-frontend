import React, { Component } from 'react';
import ExcursionCardContainer from '../universal/ExcursionCardContainer'
import PatronCardContainer from './PatronCardContainer';

class Resort extends Component {

  render(){

    return(
      <div >
        <div id="Resort_view">
          RESORT VIEW
        </div>

        <div>
          <h2>Lulu Luxury Resorts</h2>
          {/* {this.props.resorts.map(resort => <p>{resort.resort_name}</p>)} */}
        </div>

        <div>
          <h2>Current Patrons:</h2>
          <PatronCardContainer patrons={this.props.patrons} bookings={this.props.bookings}/>
        </div>

        <div>
          <h2>Excursion Schedule:</h2>
          <ExcursionCardContainer excursions={this.props.excursions} bookings={this.props.bookings} allBookings={this.props.allBookings}/>
        </div>

      </div>
    )
  }
}


export default Resort 

