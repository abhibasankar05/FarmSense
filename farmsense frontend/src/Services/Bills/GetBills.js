import axios from 'axios';
const BASE_URL = 'http://localhost:8080';


export const getBills = async (id) => {
    
    try {
      const response = await axios.get(`${BASE_URL}/farmsense/getbills/${id}`);
  
      return response;
    } catch (error) {
      throw error;
    }
  };