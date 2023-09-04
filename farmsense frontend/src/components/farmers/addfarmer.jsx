import React from "react";
import { useState } from "react";
import "./addfarmer.css"; // Import your CSS file for styling
import {addFarmerserv} from "../../Services/FarmerService/AddFarmerService"
import { useNavigate } from 'react-router-dom';
import img from "../../img/farmer/home.png"
import { useSelector } from 'react-redux';

const Addfarmer = () => {
  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    area: "",
    city: "",
    dist: "",
    state: "",
    pincode: "",
    whnumber: "",
    altnumber: "",
    adnumber: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Convert form data to JSON format
    const data = {
      
        name: formData.firstName,
        middelname: formData.middleName,
        lastname: formData.lastName,
      
      address: {
        area: formData.area,
        city: formData.city,
        dist: formData.dist,
        state: formData.state,
        pincode: formData.pincode
      },
     
      whatsappnumber: formData.whnumber,
      alternatenumber: formData.altnumber,
        adharnumber: formData.adnumber
      
    };

     console.log(data)

   try {
    console.log(user.id+" ....")
    const responce = await addFarmerserv(data,user.id);

    if(responce.data===1){
      alert("Farmer Added");
      navigate("/farmer");
    }else if(responce.data===3){
      alert("Farmer Alredy Exist With You");
    }else if(responce.data===4){
      alert("Farmer Alredy Exist and Added to your organisation");
    }else{
      alert("something went wrong");
    }


   } catch (error) {
    alert("failed");
   }

  };

  return (
   <div className="parent">

<div className="form-container">
      <img src={img} alt="Header Image" className="header-image" />

      

      <form className="form" onSubmit={handleSubmit}>

      <div className="form-group" style={{fontSize:20}}>
          <label htmlFor="lastName"><b>Name :</b></label>  
        </div>

        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="middleName">Middle Name</label>
          <input type="text" id="middleName" name="middleName" 
            value={formData.middleName}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName"
          value={formData.lastName}
            onChange={handleInputChange} />
        </div>

        <div className="form-group" style={{fontSize:20}}>
          <label htmlFor="address"><b>Address :</b></label>  
        </div>

        <div className="form-group">
          <label htmlFor="area">Area</label>
          <input type="text" id="area" name="area" 
            value={formData.area}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city"
          value={formData.city}
            onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="dist">District</label>
          <input type="text" id="dist" name="dist" 
            value={formData.dist}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">State</label>
          <input type="text" id="state" name="state"
          value={formData.state}
            onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="pincode">Pincode</label>
          <input type="text" id="pincode" name="pincode"
          value={formData.pincode}
            onChange={handleInputChange} />
        </div>

        <div className="form-group" style={{fontSize:20}}>
          <label htmlFor="contact"><b>Contact :</b></label>  
        </div>
        
        <div className="form-group">
          <label htmlFor="whnumber">Whatsapp Number</label>
          <input type="text" id="whnumber" name="whnumber"
          value={formData.whnumber}
            onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="altnumber">Alternate Number</label>
          <input type="text" id="altnumber" name="altnumber" 
            value={formData.altnumber}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="adnumber">Adhar Number</label>
          <input type="text" id="adnumber" name="adnumber"
          value={formData.adnumber}
            onChange={handleInputChange} />
        </div>

        {/* <div className="form-group" style={{fontSize:20}}>
          <label htmlFor="lastName"><b>Veriety :</b></label>  
        </div>
        
        <div className="form-group">
          <label htmlFor="lastName">Name</label>
          <input type="text" id="lastName" name="lastName" />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Area</label>
          <input type="text" id="lastName" name="lastName" />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Year</label>
          <input type="text" id="lastName" name="lastName" />
        </div> */}

        <div className="button-container">
        <button type="submit" className="btn">Create</button>
        </div>
      </form>
    </div>
   </div>
  );
};

export default Addfarmer;
