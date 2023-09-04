// PdfBill.jsx
import React from 'react';
import "../../css/OrderPdf.css"
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import  { useEffect, useState } from "react";
import{getOrderPdf} from "../../Services/OrderService/OrderPdfService"
import PdfDocument from './DownloadOrderPdf';
import { pdf } from '@react-pdf/renderer'; 
import { saveAs } from 'file-saver';

const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

const OrderPdf = () => {
  const location = useLocation();
  const orderDetails = location.state.orderData;
  const navigate = useNavigate();
  const [orderpdf, setOrderpdf] = useState(null);
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
		const fetchorderpdf = async () => {
			try {
			  const response = await getOrderPdf(orderDetails.orderid);
        console.log(orderDetails.orderid)
        const data =  response.data;
        if(data===0){
          alert("Something Went Wrong")
          navigate("/corders")
        }else{
          setOrderpdf(data);
          setBills(data.bills);
        }
			} catch (error) {
			  console.error('Error fetching organization details:', error);
			}finally {
        setLoading(false); // Set loading to false after data is fetched
      }
		  };
	  
		  fetchorderpdf();
		  
	  }, []);


    const handleDownloadPdf = async () => {
      try {
        const blob = await pdf(<PdfDocument orderpdf={orderpdf} />).toBlob();
        saveAs(blob, `${orderpdf.farmerid}_${orderpdf.farmername}_${orderpdf.farmermiddelname}_${orderpdf.farmerlastname}`);
      } catch (error) {
        console.error('Error generating PDF:', error);
      }
    };


  
  return (

<div className="parent1">
      {loading ? (
        <p>Loading...</p>
      ) : orderpdf ? ( 
        <>
        <div className="parent1">
      <div className="bill-header">
        <h2 className="center">{orderpdf.orgname} Pvt Limited</h2>
      </div>
      <div className="org-info">
        <p><strong>Org ID:</strong>{orderpdf.orgid}</p>
        <p><strong>Org Name:</strong>{orderpdf.orgname}</p>
        <p><strong>Org Email:</strong>{orderpdf.orgemail}</p>
        <p><strong>Org Email:</strong>{orderpdf.orgnumber}</p>
        <p><strong>Org Address:</strong>{orderpdf.orgaddress.area}</p>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <div>
      <h2>Farmer Details</h2>
      <p><strong>Farmer ID:</strong>{orderpdf.farmerid}</p>
        <p><strong>Farmer Name:</strong>{`${orderpdf.farmername} ${orderpdf.farmermiddelname} ${orderpdf.farmerlastname}`}</p>
        <p><strong>Farmer Address:</strong>{orderpdf.farmeraddress.area}</p>
        <p><strong>Adhar Number:</strong> {orderpdf.farmeradharnumber}</p>
        <p><strong>Whats App Number:</strong>{orderpdf.farmerwhatssappnumber}</p>
        <p><strong>Alternate Number:</strong> {orderpdf.farmeralternatenumber}</p>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <div>
      <h2>Order Details</h2>
      <p><strong>Order ID:</strong>{orderpdf.orderid}</p>
        <p><strong>Order Date:</strong>{formatDate(orderpdf.orderdate)}</p>
        <p><strong>Price (Rs):</strong>{orderpdf.price}</p>
        <p><strong>Total Ammount(Rs)</strong>{orderpdf.totalammount}</p>
        <p><strong>Order Status:</strong>{orderpdf.orderstatus}</p>
        <p><strong>Payment Status:</strong>{orderpdf.paymentstatus}</p>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <div className="bill-details">
        <h2>Bill Details</h2>
       <div className='billtable'>
       <table>
          <thead>
            <tr>
              <th>Bill ID</th>
              <th>Date</th>
              <th>Net Weight</th>
            </tr>
          </thead>
           <tbody>
             {orderpdf.bills.map((bill, index) => (
              <tr key={index}>
                <td>{bill.billid}</td>
                <td>{formatDate(bill.date)}</td>
                <td>{bill.netweight}</td>
              </tr>
            ))} 
          </tbody> 
        </table>
       </div>
      </div>
      <div className="farmer-signature">
        <p>Farmer's Signature: ________________________</p>
        <br></br>
        <br></br>
      </div>
    <div className="submit-button">
      <button className="green-button" onClick={handleDownloadPdf}>Download</button>
        <button onClick={()=>navigate("/corders")} className="green-button">Back</button>
      </div>
    </div>
        </>
      ) : (
        <p>No order PDF data available.</p>
      )}
    </div>
    
  );
};

export default OrderPdf;
