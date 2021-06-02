import React, { Component } from 'react';

class Resort extends Component {

  render(){

    return(
      <div >
        <div id="Resort_view">
          RESORT VIEW
        </div>

        <div>
          <h2>Lulu Luxury Resorts</h2>
          {this.props.resorts.map(resort => <p>{resort.resort_name}</p>)}
        </div>

        <div>
          <h2>Current Patrons:</h2>
          {/* {console.log(this.props.patrons)} */}
          {this.props.patrons.map(patron => <p>{patron.patron_name}</p>)}
        </div>

        <div>
          <h2>Excursion Schedule:</h2>
          {/* {console.log(this.props.patrons)} */}
          {this.props.excursions.map(excursion => <p>{excursion.excursion_name}</p>)}
        </div>

      </div>
    )
  }
}


export default Resort

