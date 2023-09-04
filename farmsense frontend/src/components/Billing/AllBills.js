import React from 'react';
import '../../css/completedorders.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import  { useEffect, useState } from "react";
import {getBills} from "../../Services/Bills/GetBills"

const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};


const GetAllBills= () => {

  const navigate = useNavigate();
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = useSelector(state => state.auth.user);
  useEffect(() => {
		const getAllBills = async () => {
			try {
			  const response = await getBills(user.id);
        const data = await response.data;
        setBills(data); 
			   
			} catch (error) {
			  console.error('Error fetching organization details:', error);
			}finally {
        setLoading(true); // Set loading to false after data is fetched
      }
		  };
		  getAllBills();
		  
	  }, []);



  return (
   <div className='parent'>
     <div className="page">
      <div className="title">All Bills</div>
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
            <th>Bill ID</th>
            <th>Date</th>
            <th>Farmer ID</th>
            <th>Order ID</th>
            <th>Net Weight(KG)</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((i) => (
            <tr key={i.billid}>
              <td>{i.billid}</td>
              <td>{formatDate(i.date)}</td>
              <td>{i.farmerid}</td>
              <td>{i.orderid}</td>
              <td>{i.netweight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </div>
  );
};

export default GetAllBills;
