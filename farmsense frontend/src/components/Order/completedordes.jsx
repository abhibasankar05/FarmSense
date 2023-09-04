import React from 'react';
import '../../css/completedorders.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import  { useEffect, useState } from "react";
import {getCompletedOrder} from "../../Services/OrderService/GetOrders"
const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};


const Completedorders = () => {

  const navigate = useNavigate();
  const [corder, setOrder] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = useSelector(state => state.auth.user);
  useEffect(() => {
		const getCompletedOrders = async () => {
			try {
			  const response = await getCompletedOrder(user.id);
        const data = await response.data;
			  setOrder(data); 
			   
			} catch (error) {
			  console.error('Error fetching organization details:', error);
			}finally {
        setLoading(true); // Set loading to false after data is fetched
      }
		  };
	  
		  getCompletedOrders();
		  console.log(corder);
	  }, []);



  return (
   <div className='parent'>
     <div className="page">
      <div className="title">Completed Order</div>
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
            <th>Order ID</th>
            <th>Date</th>
            <th>Farmer ID</th>
            <th>Price</th>
            <th>Total Ammount</th>
            <th>Payment Status</th>
            <th>PDF</th>
          </tr>
        </thead>
        <tbody>
          {corder.map((i,index) => (
            <tr key={index}>
              <td>{i.orderid}</td>
              <td>{formatDate(i.date)}</td>
              <td>{i.farmerid}</td>
              <td>{i.price}</td>
              <td>{i.totalammount}</td>
              <td>{i.paymentstatus}</td>
              <td><button onClick={()=>navigate("/orderpdf",{ state: { orderData: i } })} className="green-button">PDF</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </div>
  );
};

export default Completedorders;
