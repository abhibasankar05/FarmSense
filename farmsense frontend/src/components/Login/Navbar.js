
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){

   return(
    <div>
        <nav>
          
            <Link to="/"></Link>
            <Link to="/forgot"></Link>
            <Link to="/signup"></Link>
            <Link to="/mylogin"></Link>
            
          
        </nav>
    </div>
   )

}
export default Navbar;
