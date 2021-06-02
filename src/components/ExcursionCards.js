import React from 'react'
import {Grid} from "@material-ui/core"
import {Card, CardText, CardBody,CardTitle} from 'reactstrap';

 export const ExcursionCards = (props) => {

    return (
   
        <div className="card">
            <Grid item >
        <Card className= "text-center">
          <CardBody>
            <CardTitle tag="h5">{props.excursion.excursion_name}</CardTitle>
          <img width="100%" src="/assets/318x180.svg" alt="Card image cap"  src = {props.excursion.excursion_image_url}/>
            <CardText>{props.excursion.type}</CardText>
            <CardText>{props.excursion.descripton}</CardText>
            <CardText>{props.excursion.most_popular}</CardText>
            <CardText>{props.excursion.reservations}</CardText>
          </CardBody>
        </Card>
       </Grid>
        </div>   
       
    )
 }

