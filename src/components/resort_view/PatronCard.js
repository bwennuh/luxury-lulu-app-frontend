import React from 'react'
import { Grid } from "@material-ui/core"
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export const PatronCard = (props) => {

  return (

    <div className="patron_card">
      <Grid item >
        <Card className="text-center">
          <CardBody>
            <CardTitle tag="h5">{props.patron.patron_name}</CardTitle>
            <CardText>Age: {props.patron.age}</CardText>
            <CardText>Paid: {props.patron.payment_info}</CardText>

            <CardSubtitle tag="h6">Current bookings:</CardSubtitle>
            { props.bookings.map(booking => {
              return(
                <CardBody>
                  <CardText>Start date: {booking.start_date}</CardText>
                  <CardText>End date: {booking.end_date}</CardText>
                  <CardText>Room type: {booking.room_type}</CardText>
                </CardBody>
              )
            })}



            <CardText>{props.bookings.end_date}</CardText>
            <CardText>{props.bookings.room_type}</CardText>
          </CardBody>
        </Card>
      </Grid>
    </div>

  )
}
