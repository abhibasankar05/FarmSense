import axios from 'axios';
const BASE_URL = 'http://localhost:8080';


export const addBills = async (data) => {
    
    try {
      const response = await axios.post(`${BASE_URL}/farmsense/addbill`, data);
  
      return response;
    } catch (error) {
      throw error;
    }
  };