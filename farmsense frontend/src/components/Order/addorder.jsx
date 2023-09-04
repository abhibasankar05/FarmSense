import React, { useState } from 'react';
import '../../css/addorder.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {addOrder} from "../../Services/OrderService/AddOrder"

function Addorder() {
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);
  const[ formData, setData] = useState({
    farmerId: "",
    price: "",
    date: "" 
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Convert form data to JSON format
    const data = {
      
        farmerid: formData.farmerId,
        price:formData.price,
        date:formData.date,
        orgid:user.id
      
    };

     console.log(data)

   try {
    const responce = await addOrder(data);
    if(responce.data===1){
      alert("Order Added");
      navigate("/porders");
    }else if(responce.data===2){
      alert("No Farmer Available with this id Please add farmer to your organisation")
    }
    else{
      alert("something went wrong")
      navigate("/addorders");
    }
   } catch (error) {
    alert("failed");
   }

  };











  
  return (
    <div className='parent'>
    <div className="order-form-container">
      <h1 className="title">Add Order</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="farmerId">Farmer ID</label>
          <input
            type="text"
            id="farmerId"
            name="farmerId"
            required
            placeholder="Enter Farmer ID"
            value={formData.farmerId}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            required
            placeholder="Enter Price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            required
            placeholder="Select Date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>
        <button type='submit' className="add-order-button">Add Order</button>
      </form>
    </div>
    </div>
  );
}

export default Addorder;
