import React, { Component } from 'react';
import { ExcursionCards } from './ExcursionCards';

class ExcursionCardContainer extends Component {

  render() {
    return (
      <div>
        <div className="excursion-card-container">
          {/* {this.props.excursions.map(excursion => <ExcursionCards key={excursion.id} excursion={excursion}/>)} */}

          {this.props.excursions.map(excursion => {

            let excursionBookings = this.props.allBookings.filter(booking => booking.excursion_id == excursion.id)

            return (
              <ExcursionCards
                key={excursion.id}
                id={excursion.id}
                excursion={excursion}
                bookings={excursionBookings}
              />
            )
          })}

        </div>
      </div>
    )
  }
}

export default ExcursionCardContainer

