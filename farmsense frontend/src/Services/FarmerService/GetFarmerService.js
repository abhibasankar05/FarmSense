import axios from 'axios';
const BASE_URL = 'http://localhost:8080';


export const getFarmers = async (id) => {
    console.log(id)
    try {
      const response = await axios.get(`${BASE_URL}/farmsense/getfarmers/${id}`);
     
      return response;
    } catch (error) {
      throw error;
    }
  };

  export const getFarmerscount = async (id) => {
    console.log(id)
    try {
      const response = await axios.get(`${BASE_URL}/farmsense/countfarmers/${id}`);
     
      return response;
    } catch (error) {
      throw error;
    }
  };