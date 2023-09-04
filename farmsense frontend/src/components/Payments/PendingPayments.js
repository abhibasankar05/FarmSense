import React from 'react';
import '../../css/pendingorder.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import  { useEffect, useState } from "react";
import {getPendingPayments} from "../../Services/Payment/GetPayments"
import{updatePaymentStatus} from "../../Services/Payment/GetPayments"


  
  

const PendingPayments = () => {
  const navigate = useNavigate();
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = useSelector(state => state.auth.user);
  useEffect(() => {
		const fetchPayments = async () => {
			try {
			  const response = await getPendingPayments(user.id);
              const data = await response.data;
              setPayments(data); 
			   
			} catch (error) {
			  console.error('Error fetching organization details:', error);
			}finally {
        setLoading(true); // Set loading to false after data is fetched
      }
		  };
	  
		  fetchPayments();
		  
	  }, []);

   const updatePayment = async(id)=>{

    try {
      const responce = await updatePaymentStatus(id);
      if(responce.data===1){
       alert("Payment Completed");
       navigate("/cpayments");
      }else if(responce.data===0){
       alert("Payment Or Order Not present")
    }
      else{
       alert("Something went wrong!")
      }
    } catch (error) {
      console.error('Error fetching organization details:', error);
    }
   }



  
  return (
    <div className='parent'>
    <div className="page">
      <div className="title">Pending Orders</div>
      <div className="buttons">
        <button onClick={() => navigate('/cpayments')} className="green-button">Completed Payments</button>
      </div>
      <table className="order-table">
        <thead>
          <tr>
          <th>Payment ID</th>
            <th>Order ID</th>
            <th>Farmer ID</th>
            <th>Total Ammount</th>
            <th>Status</th>
            <th>Change Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((i) => (
            <tr key={i.id}>
            <td>{i.id}</td>
              <td>{i.orderid}</td>
              <td>{i.farmerid}</td>
              <td>{i.totalammount}</td>
              <td>{i.status}</td>
              <td>
                <button onClick={()=>updatePayment(i.id)} className="green-button">Completed</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default PendingPayments;
