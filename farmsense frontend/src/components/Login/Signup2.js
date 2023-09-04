
// import React from 'react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../Services/OrgService/RegistrationService';


const Signup2 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    orgname: '',
    email: '',
    contact: '',
    area:'',
    state:'',
    city:'',
    dist:'',
    pincode:'',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const requestData = {
      orgname: formData.orgname,
      email: formData.email,
      contact: formData.contact,
      address: {
        area: formData.area,
        city: formData.city,
        dist: formData.dist,
        state: formData.state,
        pincode: formData.pincode,
      },
      password: formData.password,
    };
  
   try {
    const response = await registerUser(requestData);
     if(response.data===1){
      alert("Registration Successful, You can LogIn now.");
      navigate("/login");
     }else if(response.data===0){
      alert("Something went wrong");
      navigate("/registr");
     }
   } catch (error) {
    console.log(error);
   }


  };

  return (
    <div className="reg">
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2 style={{color:'green',fontSize:'20px'}}>REGISTRATION FORM</h2>
        <br/>
        <div className="input-group">
          <label>Enter the name of orgnization</label>
          <input
            type="text"
            name="orgname"
            value={formData.orgname}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>Enter Email address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>Enter Contact details</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
        </div>
         <div className="input-group">
          <label>Enter Area</label>
          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>Enter State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>Enter City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>Enter district</label>
          <input
            type="text"
            name="dist"
            value={formData.dist}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>Enter pincode</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>Enter Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
    </div>
  );
};
export default Signup2;
