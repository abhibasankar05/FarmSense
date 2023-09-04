import axios from 'axios';

const BASE_URL = 'http://localhost:8080';



export const getOrganisation = async (id) => {
    console.log("getid is "+id)
    try {
        
      const response = await axios.get(`${BASE_URL}/farmsense/getorganisation/${id}`);
       
      return response;
    } catch (error) {
      throw error;
    }
  };