import axios from 'axios';
const BASE_URL = 'http://localhost:8080';


export const updateOrderStatus = async (id) => {
    
    try {
      const response = await axios.put(`${BASE_URL}/farmsense/updatestatus/${id}`);
  
      return response;
    } catch (error) {
      throw error;
    }
  };