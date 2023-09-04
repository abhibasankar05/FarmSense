import axios from 'axios';
const BASE_URL = 'http://localhost:8080';


export const registerUser = async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}/farmsense/register`, data);
  
      return response;
    } catch (error) {
      throw error;
    }
  };