import React from 'react';
import '../../css/pendingorder.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import  { useEffect, useState } from "react";
import {getOrder} from "../../Services/OrderService/GetOrders"
import{updateOrderStatus} from "../../Services/OrderService/UpdateOrder"

const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};
  
  

const PendingOrders = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = useSelector(state => state.auth.user);
  useEffect(() => {
		const fetchfarmer = async () => {
			try {
			  const response = await getOrder(user.id);
        const data = await response.data;
			  setOrder(data); 
			   
			} catch (error) {
			  console.error('Error fetching organization details:', error);
			}finally {
        setLoading(true); // Set loading to false after data is fetched
      }
		  };
	  
		  fetchfarmer();
		  console.log(order);
	  }, []);

   const updateStatus = async(id)=>{

    try {
      const responce = await updateOrderStatus(id);
      if(responce.data===1){
       alert("Order Completed");
       navigate("/corders");
      }else if(responce.data===0){
       alert("order not found")
    }else if(responce.data===3){
      alert("No Bills are Available for this Order")
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
        <button onClick={() => navigate('/addorders')} className="green-button">Add Order</button>
        <button onClick={() => navigate('/corders')} className="green-button">Complete Orders</button>
      </div>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Farmer ID</th>
            <th>Price</th>
            <th>Status</th>
            <th>Change Status</th>
          </tr>
        </thead>
        <tbody>
          {order.map((i) => (
            <tr key={i.orderid}>
              <td>{i.orderid}</td>
              <td>{formatDate(i.date)}</td>
              <td>{i.farmerid}</td>
              <td>{i.price}</td>
              <td>{i.status}</td>
              <td>
                <button onClick={()=>updateStatus(i.orderid)} className="green-button">Completed</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default PendingOrders;
