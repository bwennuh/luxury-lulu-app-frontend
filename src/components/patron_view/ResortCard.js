import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export const ResortCard = (props) => {

  const [resort, setResort] = useState(props.resort)

  function checkBookedStatus(){
    if (props.booked === true){
      return(
      <div className="resort-card-footer">
        <Link to='/patron-view-booked-resort-info'>
          <button className="edit-resort-booking-button">View/Edit Reservation</button>
          <br></br>
          <button className="remove-resort-booking-button">Cancel Reservation</button>
          <br></br>
          <button className="review-resort-button">Review Resort</button>
        </Link>
      </div>
      )
    } else {
      return(
      <div className="resort-card-footer">
        <Link to='/patron-view-book-new-resort'>
          <button className="review-resort-button">Book Resort</button>
        </Link>
      </div>
      )
    }
  }

  return (
      <div id={props.resort.id} className="resort-card">

          <div className="resort-card-header">
            <h2 className="resort-card-title">{props.resort.resort_name}</h2>
          </div>

          <div className="resort-card-body">
            <img src={props.resort.image_url} className="resort-images" alt="..." />
            <p className="resort-card-location">Location: {props.resort.location}</p>
            <p className="resort-card-availability">Booking start date: {props.resort.availability}</p> 
            <p className="resort-card-rating">Resort rating: {props.resort.rating} stars</p>
          </div>

          {checkBookedStatus()}

      </div>
  )
}

ResortCard.defaultProps = {
  "resort_name": "Unknown",
  "image_url": "",
  "location": "TBD",
  "availability": "None",
  "rating": 0
}
