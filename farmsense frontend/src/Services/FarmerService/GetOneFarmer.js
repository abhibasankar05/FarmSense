import axios from 'axios';
const BASE_URL = 'http://localhost:8080';


export const getFarmer = async (id) => {
    console.log(id)
    try {
      const response = await axios.get(`${BASE_URL}/farmsense/getfarmer/${id}`);
     
      return response;
    } catch (error) {
      throw error;
    }
  };