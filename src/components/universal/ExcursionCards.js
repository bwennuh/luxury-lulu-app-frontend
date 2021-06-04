import React from 'react'
import { Grid } from "@material-ui/core"
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import SoloExcursion from './SoloExcursion.js'


export const ExcursionCards = (props) => {
  return (

    <div className="excursion_card">
      {/* <SoloExcursion name={props.excursion.excursion_name} type={props.excursion.excursion_type} reservation={props.excursion.reservation} excursions={props.excursions} bookings={props.bookings} /> */}

      <SoloExcursion name={props.excursion.excursion_name} type={props.excursion.excursion_type} reservation={props.excursion.reservation} bookings={props.bookings} />

      <Grid item >
        <Card className="text-center">
          <CardBody className="text-center">
            <CardTitle tag="h5">{props.excursion.excursion_name}</CardTitle>
            <CardSubtitle>{props.excursion.excursion_type}</CardSubtitle>
          </CardBody>
          {/* <img width="100%" alt="" src={props.excursion.excursion_image_url} /> */}
          <img className="excursion_img" style={{ alignSelf: 'center' }} width="1000px" alt="" src={props.excursion.excursion_image_url} />
          <CardBody>
            <CardText>{props.excursion.description}</CardText>
            <CardText>{props.excursion.most_popular}</CardText>
          </CardBody>
        </Card>
      </Grid>
    </div>

  )
}

