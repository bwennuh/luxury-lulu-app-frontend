import React, { useState } from 'react';
import FlightIcon from '@material-ui/icons/Flight';

function Navbar() {
    const [showLinks, setShowLinks] = useState(false)
        return (
            <>
           <div className ="Navbar">
               <div className ="leftSide">
                   <div className = "links" id = {showLinks ? "hidden" : ""}>
                   <a href="/home"> Home </a>
                   <a href="/patron_view"> Traveler Login </a>
                   <a href="resort_view">  Resort Login </a>
                   </div>
                   <button onClick={()=>setShowLinks(!showLinks)}>
                       {""}
                       < FlightIcon/>
                   </button>
                </div>          
           </div>
                
            </>
        );
    };

export default Navbar 
