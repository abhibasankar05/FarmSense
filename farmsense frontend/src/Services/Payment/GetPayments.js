import axios from 'axios';
const BASE_URL = 'http://localhost:8080';


export const getPendingPayments = async (id) => {
    
    try {
      const response = await axios.get(`${BASE_URL}/farmsense/getpayments/${id}`);
  
      return response;
    } catch (error) {
      throw error;
    }
  };

  export const getCompletedpayments= async (id) => {
    
    try {
      const response = await axios.get(`${BASE_URL}/farmsense/getcompletdpayments/${id}`);
  
      return response;
    } catch (error) {
      throw error;
    }
  };

  export const updatePaymentStatus= async (id) => {
    
    try {
      const response = await axios.get(`${BASE_URL}/farmsense/updatepayment/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  };


