import axios from 'axios';
const BASE_URL = 'http://localhost:8080';


export const addOrder = async (data) => {
    
    try {
      const response = await axios.post(`${BASE_URL}/farmsense/addorder`, data);
  
      return response;
    } catch (error) {
      throw error;
    }
  };