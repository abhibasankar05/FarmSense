import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../css/AddBills.css';
import {addBills} from "../../Services/Bills/AddBills"

function Addbill() {
    const user = useSelector(state => state.auth.user);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        orderId: "",
        date: "",
        netWeight: "",
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
            orderid: formData.orderId,
            date: formData.date,
            netweight: formData.netWeight,
          orgid: user.id,
        };
    
         console.log(data)
    
       try {
        const responce = await addBills(data);
        
      if(responce.data===1){
        alert("Bill Created")
        navigate("/allbills")
      }else if(responce.data===-1){
        alert("No Order or Farmer Found For This bill. Please Check Your Order id.")
      }else if(responce.data===-2){
        alert("Order is already Completed You Cant add more bills to it. Please Create new Order")
      }
      else if(responce.data===-3){
        alert("Weight Cant Be empty or zero")
      }
      else{
        alert("Something Went Wrong")
      }
       } catch (error) {
        alert("failed");
       }
    
      };
  return (
    
    <div className="container">
      <div className="left-side">
        <h1 className="title">Add Bill</h1>
        <button onClick={()=>navigate("/allbills")} className="billing-history-button">Billing History</button>
      </div>
      <div className="right-side">
        <form className="bill-form" onSubmit={handleSubmit}>

          <label htmlFor="orderId">Order ID:</label>
          <input type="text" id="orderId" name="orderId"
          value={formData.orderId}
            onChange={handleInputChange} />

          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" 
            value={formData.date}
            onChange={handleInputChange}
          />
          <label htmlFor="netWeight">Net Weight (KG):</label>
          <input type="text" id="netWeight" name="netWeight"
          value={formData.netWeight}
            onChange={handleInputChange} />
          <button className="create-bill-button">Create Bill</button>
        </form>
      </div>
    </div>
    
  );
}

export default Addbill;
