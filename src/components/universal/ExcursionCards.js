import React from 'react'
import {Grid} from "@material-ui/core"
import {Card, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';

 export const ExcursionCards = (props) => {

    return (
   
        <div className="card">
            <Grid item >
        <Card className= "text-center">
          <CardBody>
            <CardTitle tag="h5">{props.excursion.excursion_name}</CardTitle>
            <CardSubtitle>{props.excursion.excursion_type}</CardSubtitle>
            </CardBody>
            <img width="100%" alt="" src ="https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://www.socalsurflessons.com/home1/ocsurfsp/public_html/socalsurflessons/wp-content/uploads/2018/04/SAM_1673.jpg"/>
            <CardBody>
            <CardText>{props.excursion.description}</CardText>
            <CardText>{props.excursion.most_popular}</CardText>
            <CardText>{props.excursion.reservation}</CardText>
          </CardBody>
        </Card>
       </Grid>
        </div>   
       
    )
 }

