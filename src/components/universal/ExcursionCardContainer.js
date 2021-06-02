import React, { Component } from 'react';
import { ExcursionCards } from './ExcursionCards';

class ExcursionCardContainer extends Component {



  render(){
    return(
      <div>
        <div className="excursion-card-container">
          {this.props.excursions.map(excursion => <ExcursionCards key={excursion.id} excursion={excursion}/>)}
        </div>
      </div>
    )
  }
}

export default ExcursionCardContainer

