// PdfBill.jsx
import React from 'react';
import './orderbill.css';

const OrderBill = () => {
  // Sample bill data
  const billData = {
    orgName: 'FarmSense Pvt Limited',
    billId: '123456',
    orgId: '7890',
    orgEmail: 'contact@farmsense.com',
    orgAddress: '123 Farm Road, Farmville',
    orders: [
      {
        orderId: 'A001',
        farmerId: 'F101',
        farmerName: 'John Doe',
        date: '2023-08-25',
        farmerAddress: '456 Farmer Street, Farmington',
        farmerAadhar: '1234-5678-9012',
        farmerMobile: '555-555-5555',
        netWeight: '10 kg',
        price: '$50',
        totalAmount: '$500',
      },
      {
        orderId: 'A002',
        farmerId: 'F102',
        farmerName: 'Jane Smith',
        date: '2023-08-26',
        farmerAddress: '789 Farmer Avenue, Farmborough',
        farmerAadhar: '9876-5432-1098',
        farmerMobile: '555-555-6666',
        netWeight: '8 kg',
        price: '$60',
        totalAmount: '$480',
      },
    ],
  };

  return (
    <div className="pdf-bill">
      <div className="bill-header">
        <h1 className="center">FarmSense Pvt Limited</h1>
      </div>
      <div className="org-info">
        <p>Bill ID: {billData.billId}</p>
        <p>Org ID: {billData.orgId}</p>
        <p>Org Email: {billData.orgEmail}</p>
        <p>Org Address: {billData.orgAddress}</p>
      </div>
      <div className="bill-details">
        <h2>Bill Details</h2>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Farmer ID</th>
              <th>Farmer Name</th>
              <th>Date</th>
              <th>Farmer Address</th>
              <th>Farmer Aadhar</th>
              <th>Farmer Mobile</th>
              <th>Net Weight</th>
              <th>Price</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {billData.orders.map((order, index) => (
              <tr key={index}>
                <td>{order.orderId}</td>
                <td>{order.farmerId}</td>
                <td>{order.farmerName}</td>
                <td>{order.date}</td>
                <td>{order.farmerAddress}</td>
                <td>{order.farmerAadhar}</td>
                <td>{order.farmerMobile}</td>
                <td>{order.netWeight}</td>
                <td>{order.price}</td>
                <td>{order.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="farmer-signature">
        <p>Farmer's Signature: ________________________</p>
      </div>
      <div className="submit-button">
        <button className="green-button">Submit</button>
      </div>
    </div>
    
  );
};

export default OrderBill;
