import React from 'react'
import {Grid} from "@material-ui/core"
import {Card, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';

 export const ExcursionCards = (props) => {

    return (
   
        <div className="excursion_card">
            <Grid item >
        <Card className= "text-center">
          <CardBody>
            <CardTitle tag="h5">{props.excursion.excursion_name}</CardTitle>
            <CardSubtitle>{props.excursion.excursion_type}</CardSubtitle>
            </CardBody>
            <img width="100%" alt="" src ={props.excursion.excursion_image_url}/>
            <CardBody>
            <CardText>{props.excursion.description}</CardText>
            {/* {console.log(props)} */}
            <CardText>{props.excursion.most_popular}</CardText>
            <CardText>{props.excursion.reservation}</CardText>
          </CardBody>
        </Card>
       </Grid>
        </div>   
       
    )
 }

