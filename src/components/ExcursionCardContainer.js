import React, { Component } from 'react';
import { ExcursionCards } from './ExcursionCards';

class ExcursionCardContainer extends Component {

  state = {
    booked: false
  }

  render(){
    return(
      <div >
        <div className="excursion-card-container">
          {this.props.excursions.map(excursion => <ExcursionCards key={excursion.id} excursion={excursion} booked={!this.state.booked}/>)}
        </div>
      </div>
    )
  }
}

export default ExcursionContainer