import React, { useState } from 'react';
import {Link} from 'react-router-dom'

function Navbar() {
    const [showLinks, setShowLinks] = useState(false)
        return (
            <>
           <div className ="Navbar">
               <div className ="leftSide">
                   <div className = "links" id = {showLinks ? "hidden" : ""}>
                   <a href="/Home"> Home </a>

                   <Link to="/patron-login">
                   <a href="/Patron-login"> Traveler Login </a>
                   </Link> 

                   <Link to="/resort-login">
                   <a href="Resort-login">  Resort Login </a>
                   </Link>

                   </div>
                   <button onClick={()=>setShowLinks(!showLinks)}>
                   </button>
                </div>        
           </div>
                
            </>
        );
    };

export default Navbar 

