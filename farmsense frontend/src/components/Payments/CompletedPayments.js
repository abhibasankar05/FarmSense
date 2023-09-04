import React from 'react';
import '../../css/completedorders.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import  { useEffect, useState } from "react";

import{getCompletedpayments} from "../../Services/Payment/GetPayments"


const CompletedPayments = () => {

  const navigate = useNavigate();
  const [cpayment, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = useSelector(state => state.auth.user);
  useEffect(() => {
		const getCompPayments = async () => {
			try {
			  const response = await getCompletedpayments(user.id);
              const data = await response.data;
			  setPayments(data); 
			   
			} catch (error) {
			  console.error('Error fetching organization details:', error);
			}finally {
        setLoading(true); // Set loading to false after data is fetched
      }
		  };
	  
		  getCompPayments();
		  
	  }, []);



  return (
   <div className='parent'>
     <div className="page">
      <div className="title">Completed Payments</div>
      {/* <table className="green-table">
        <tbody>
          <tr>
            <td className="column-1">Farmer ID:</td>
            <td className="column-2">XYZ</td>
          </tr>
          <tr>
            <td className="column-1">Price:</td>
            <td className="column-2">XYZ</td>
          </tr>
          <tr>
            <td className="column-1">Date:</td>
            <td className="column-2">XYZ</td>
          </tr>
        </tbody>
      </table> */}
      <table className="order-table">
        <thead>
          <tr>
          <th>Payment ID</th>
            <th>Order ID</th>
            <th>Farmer ID</th>
            <th>Total Ammount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {cpayment.map((i) => (
            <tr key={i.orderid}>
            <td>{i.id}</td>
            <td>{i.orderid}</td>
              <td>{i.farmerid}</td>
              <td>{i.totalammount}</td>
              <td>{i.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </div>
  );
};

export default CompletedPayments;
