import axios from 'axios';

const BASE_URL = 'http://localhost:8080';



export const logoutUser = async (id) => {
    try {
        const headers = {
            id: id
            
          };
      const response = await axios.put(`${BASE_URL}/farmsense/logout`,null,{headers});
  
      return response;
    } catch (error) {
      throw error;
    }
  };