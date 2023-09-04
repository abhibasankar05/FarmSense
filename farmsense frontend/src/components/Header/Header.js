import React from 'react'
import "../../css/Header.css"
import 'bootstrap/dist/css/bootstrap.css';
//import useOrg from "../../Services/OrgService/OrgProvider"
import { getOrganisation } from "../../Services/OrgService/GetService";
import { useState, useEffect } from 'react';
import img from "../../img/farmer/home.png"

import { useSelector } from 'react-redux';


function Header(props) {
  const [org, setOrg] = useState(null);
  
	const user = useSelector(state => state.auth.user);

	useEffect(() => {
		const fetchOrg = async () => {
			try {
			  const response = await getOrganisation(user.id);
			  setOrg(response.data); 
			   
			} catch (error) {
			  console.error('Error fetching organization details:', error);
			}
		  };
	  
		  fetchOrg();
		  console.log(org);
	  }, []);






	//const org1 = useOrg(user.id); 
  console.log(props.name);

  
  return (
    <div>
        <div className='parentdiv'>

   <div className='tabname'>
   <h1 className='tabtext'>Hii! Welcome</h1>
   </div>



  <div className="profile-container">
    <img src={img} alt="Profile" class="profile-image" />
    {org && <span className="profile-name">{org.orgname}</span>}
  
  
</div>
 
</div>
    </div>
  )
}

export default Header