import axios from 'axios';
const BASE_URL = 'http://localhost:8080';


export const getOrder = async (id) => {
    
    try {
      const response = await axios.get(`${BASE_URL}/farmsense/getorders/${id}`);
  
      return response;
    } catch (error) {
      throw error;
    }
  };

  export const getCompletedOrder = async (id) => {
    
    try {
      const response = await axios.get(`${BASE_URL}/farmsense/completedorders/${id}`);
  
      return response;
    } catch (error) {
      throw error;
    }
  };

  export const getCompletedOrderCount = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/farmsense/countcorders/${id}`);
  
      return response;
    } catch (error) {
      throw error;
    }
  };

  export const getPendingOrderCount = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/farmsense/countorders/${id}`);
  
      return response;
    } catch (error) {
      throw error;
    }
  };


  export const gettotalAmmountSum = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/farmsense/sumofammount/${id}`);
  
      return response;
    } catch (error) {
      throw error;
    }
  };