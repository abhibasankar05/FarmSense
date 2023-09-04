import React, { useEffect, useState } from "react";
import "./singlefarmer";
import Farmer from "./singlefarmer";
import img from "../../img/farmer/home.png"
import "../../components/farmers/Farmer.css";
import { Link } from 'react-router-dom';
import {getFarmers} from "../../Services/FarmerService/GetFarmerService"
import { useSelector } from 'react-redux';





const Farmers =  () => {
  const [farmers, setFarmers] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = useSelector(state => state.auth.user);
  useEffect(() => {
		const fetchfarmer = async () => {
			try {
			  const response = await getFarmers(user.id);
        const data = await response.data;
			  setFarmers(data); 
			   
			} catch (error) {
			  console.error('Error fetching organization details:', error);
			}finally {
        setLoading(false); // Set loading to false after data is fetched
      }
		  };
	  
		  fetchfarmer();
		  console.log(farmers);
	  }, []);

  
  
    return (
      
      
      <div className="parent" >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      

      <div className="button-containerf">
       <Link to="/addfarmer" action>
       <button type="submit" className="btnf" >Add Farmer</button>
       </Link> 
      </div>
      
      <div style={{ marginTop: "20px" }}>
        <input className="search" type="text" placeholder="Search..." />
        <div className="button-containerf">
        <button type="submit" className="btnf">Search</button>
      </div>
      </div>
    

{/* <div style={{ display: "flex", alignItems: "center" }}>
   <h1 style={{ marginLeft: "10px" }}>Farmer list</h1>
   <div className="button-containerf">
        <button type="submit" className="btnf">Add Farmer</button>
        </div> */}
  
</div>
        
        {loading ? (
          <p>Loading farmers list...</p>
        
      ) : (
        
        
        farmers.map((farmer, index) => (
          <Farmer
            key={index} 
            i={{
              title: `${farmer.name}  ${farmer.lastname}`,
              description: farmer.id,
              imgsrc: img
            }}
          />
        ))

      )} 




         {/* {farmers.map((farmer, index) => (
          <Farmer
            key={index} 
            i={{
              title: `${farmer.name}  ${farmer.lastname}`,
              description: farmer.id,
              imgsrc: img
            }}
          />
        ))}  */}



        
        
         {/* <Farmer i={{title:"Abhi Basankar",
          description:"20",
          imgsrc:img}}
        />
        <Farmer i={{title:"Abhi Basankar",
          description:"20",
          imgsrc:img}}
        />
        <Farmer i={{title:"Abhi Basankar",
          description:"20",
          imgsrc:img}}
        />   */}
      </div>
    );
  };
   


export default Farmers;
