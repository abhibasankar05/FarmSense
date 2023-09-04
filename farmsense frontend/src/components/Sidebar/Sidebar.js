import React from 'react'
import "../../css/Style.css"
import { useDispatch } from 'react-redux';
import { logout } from "../../Reduser/AuthSlice";
import 'boxicons'
import { logoutUser } from "../../Services/OrgService/LogoutSevice"
import { useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { Navigate } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { getOrganisation } from "../../Services/OrgService/GetService";




function Sidebar() {
	const [org, setOrg] = useState(null);

	const dispatch = useDispatch();
	const user = useSelector(state => state.auth.user);

	//const org1 = useOrg(user.id); 

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
	  useEffect(() => {
    
		console.log('Org value changed:', org);
	  }, [org]);




	const handleLogout = async () => {
		console.log("logging out"+user.id);

try {
	const responce = await logoutUser(user.id)
   
	if(responce.status===200){
		console.log("Logging out...");
		dispatch(logout());
		alert("Log Out")
		Navigate("/")
	}else if(responce.status===400){
		alert("Something Went Wrong")
	}else{
		alert("Failed To Logout, Try Again")
	}
  
} catch (error) {
	console.error('Error logging out:', error);
}
	};


  return (

    <div id="parentdiv">

<section id="sidebar">
{org && 

	<div className ="centered-div">
  <a href="#" className="brand">
    
    <span className="text">Farm-Sense</span>
  </a>
  
  </div>

}
   
		<ul className="side-menu top">
			<li >
				<a href="/dashboard">
        <box-icon name='dashboard' type='solid' ></box-icon>
					<span className="text">Dashboard</span>
				</a>
			</li>
			<li>
				<a href="/farmer">
        <box-icon name='leaf' type='solid' ></box-icon>
					<span className="text">Farmers</span>
				</a>
			</li>
			<li>
				<a href="/addbills">
        <box-icon name='calculator' ></box-icon>
					<span className="text">Bills</span>
				</a>
			</li>
			<li>
				<a href="/ppayments">
        <box-icon name='rupee' ></box-icon>
					<span className="text">Payments</span>
				</a>
			</li>
      <li>
				<a href="/porders">
        <box-icon type='solid' name='cart-add'></box-icon>
					<span className="text">Orders</span>
				</a>
			</li>
      <li>
	           
				
        <box-icon name='arrow-back' ></box-icon>
		<Button className="logout" onClick={handleLogout}>
			   <span className="text">Logout</span>
			   </Button>			
				
			</li>
		</ul>
	</section>
    </div>
  )

}

export default Sidebar