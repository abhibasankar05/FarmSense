import axios from 'axios';
const BASE_URL = 'http://localhost:8080';


export const getOrderPdf = async (id) => {
    
    try {
      const response = await axios.get(`${BASE_URL}/farmsense/getpdf/${id}`);
  
      return response;
    } catch (error) {
      throw error;
    }
  };