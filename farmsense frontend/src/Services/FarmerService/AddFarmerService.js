import axios from 'axios';
const BASE_URL = 'http://localhost:8080';


export const addFarmerserv = async (data,id) => {
    console.log(id)
    try {
      const response = await axios.post(`${BASE_URL}/farmsense/addfarmer/${id}`, data);
  
      return response;
    } catch (error) {
      throw error;
    }
  };