import React, { useState } from 'react';
import FlightIcon from '@material-ui/icons/Flight';
import {Link} from 'react-router-dom'

function Navbar() {
    const [showLinks, setShowLinks] = useState(false)
        return (
            <>
           <div className ="Navbar">
               <div className ="leftSide">
                   <div className = "links" id = {showLinks ? "hidden" : ""}>
                   <a href="/Home"> Home </a>

                   <Link to="/patron_view">
                   <a href="/Patron_view"> Traveler Login </a>
                   </Link> 

                   <Link to="/resort_view">
                   <a href="Resort_view">  Resort Login </a>
                   </Link>

                   </div>
                   <button onClick={()=>setShowLinks(!showLinks)}>
                   </button>
                </div>   
                <div className="rightSide">
                < FlightIcon/>
                Lulu Luxury Resorts 
            </div>       
           </div>
                
            </>
        );
    };

export default Navbar 

