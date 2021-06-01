import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Excursion extends Component {

  render(){

    return(
      <div >
        <div id="Excursion_view">
          EXCURSION LIST
        </div>

        <div>
          <h2>Lulu Luxury Amentities + Experiences</h2>
          {this.props.excursions.map(excursion => <p>{excursion.excursion_name}</p>)}
        </div>

      </div>
    )
  }
}

export default Excursion 