import React from 'react'
import "../../css/Dashboard.css"
import{getFarmerscount} from "../../Services/FarmerService/GetFarmerService"
import{gettotalAmmountSum,getPendingOrderCount,getCompletedOrderCount} from "../../Services/OrderService/GetOrders"
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";

function Dashboard() {
	const user = useSelector(state => state.auth.user);
	const [count, setCount] = useState(0);
	const [pordercount, setPOrderCount] = useState(0);
	const [cordercount, setOrderCount] = useState(0);
	const [sum, setSum] = useState(0);
	useEffect(() => {
		const fetchfarmercount = async () => {
			try {
			  const response = await getFarmerscount(user.id);
        const data =  response.data;
        if(data===-1){
          alert("Something Went Wrong")
        }else{
			setCount(data);
          
        }
			} catch (error) {
			  console.error('Error fetching organization details:', error);
			
      }
		  };

		  const fetchTotalAmmount = async () => {
			try {
			  const response = await gettotalAmmountSum(user.id);
        const data =  response.data;
        if(data===-1){
          alert("Something Went Wrong")
        }else{
			setSum(data);
          
        }
			} catch (error) {
			  console.error('Error fetching organization details:', error);
			
      }
		  };

		  const fetchTotalpOrders = async () => {
			try {
			  const response = await getPendingOrderCount(user.id);
        const data =  response.data;
        if(data===-1){
          alert("Something Went Wrong")
        }else{
			setPOrderCount(data);
          
        }
			} catch (error) {
			  console.error('Error fetching organization details:', error);
			
      }
		  };
		  const fetchTotalcOrders = async () => {
			try {
			  const response = await getCompletedOrderCount(user.id);
        const data =  response.data;
        if(data===-1){
          alert("Something Went Wrong")
        }else{
			setOrderCount(data);
          
        }
			} catch (error) {
			  console.error('Error fetching organization details:', error);
			
      }
		  };


	  
		  fetchfarmercount();
		  fetchTotalAmmount();
		  fetchTotalpOrders();
		  fetchTotalcOrders();

	  }, []);

  return (
    <div className='parent'>
       <ul className='box-info'>
				<li>
					<i className='bx'></i>
					<span className="text">
						<h3>{pordercount}</h3>
						<p>Pending Orders</p>
					</span>
				</li>
				<li>
					<i className='bx'></i>
					<span className="text">
						<h3>{cordercount}</h3>
						<p>Completed Orders</p>
					</span>
				</li>
				<li>
					<i className='bx'></i>
					<span className="text">
						<h3>{count}</h3>
						<p>Farmers</p>
					</span>
				</li>
				<li>
					<i className='bx'></i>
					<span className="text">
						<h3>{sum}</h3>
						<p>Total Payments(Rs.)</p>
					</span>
				</li>
			</ul>
    </div>



  )

}

export default Dashboard