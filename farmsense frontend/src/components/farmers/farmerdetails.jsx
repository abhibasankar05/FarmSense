import React from 'react';
import '../farmers/farmerdetails.css';
import img from "../../img/farmer/home.png"
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {getFarmer} from "../../Services/FarmerService/GetOneFarmer"

const Farmerdetails = () => {
  const [Farmer, setFarmer] = useState(null);
  const location = useLocation();
  const farmerData = location.state.farmerData;
  

  useEffect(() => {
		const fetchFarmer = async () => {
			try {
			  const response = await getFarmer(farmerData.description);
			  setFarmer(response.data); 
       
			} catch (error) {
			  console.error('Error fetching organization details:', error);
			}
		  };
	  
		  fetchFarmer();
		  console.log(Farmer);
	  }, []);
	  useEffect(() => {
    
      console.log('Org value changed:', Farmer);
      }, [Farmer])

  return (
    <div className='parent'>
    <h2> Farmer Details:</h2>
    <img src={img} alt="Header Image" className="header-image" />
    <div className="table-container">
      <table className="data-table">
        <tbody>
          <tr>
            <td className="attribute">Name:</td>
            <td className="value">{Farmer !=null? `${Farmer.name} ${Farmer.middelname} ${Farmer.lastname}`:"Loading"}</td>
          </tr>
          
          <tr>
          
          <td className="attribute">Address:</td>
  <td className="value">
    {Farmer != null
      ? `Area : ${Farmer.address.area}, City : ${Farmer.address.city}, District : ${Farmer.address.dist}, State : ${Farmer.address.state}` // Assuming "address" is an array of address parts
      : "Loading"}
  </td>
          </tr>
          <tr>
            <td className="attribute">Adhar Number:</td>
            <td className="value">{Farmer !=null? Farmer.adharnumber:"Loading"}</td>
          </tr>
          <tr>
            <td className="attribute">WhatsApp Number:</td>
            <td className="value">{Farmer !=null? Farmer.whatsappnumber:"Loading"}</td>
          </tr>
          <tr>
            <td className="attribute">Alternate Number:</td>
            <td className="value">{Farmer !=null? Farmer.alternatenumber:"Loading"}</td>
          </tr>
          
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Farmerdetails;
