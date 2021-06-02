import React from 'react'
import {Grid} from "@material-ui/core"
import {Card, CardText, CardBody,CardTitle} from 'reactstrap';

 export const PatronCard = (props) => {

    return (
   
        <div className="patron_card">
            <Grid item >
        <Card className= "text-center">
          <CardBody>
            <CardTitle tag="h5">{props.patron.patron_name}</CardTitle>
            <CardText>{props.patron.age}</CardText>
            <CardText>{props.patron.payment_info}</CardText>
            <CardText>{props.bookings.start_date}</CardText>
            <CardText>{props.bookings.end_date}</CardText>
            <CardText>{props.bookings.room_type}</CardText>
          </CardBody>
        </Card>
       </Grid>
        </div>   
       
    )
 }
