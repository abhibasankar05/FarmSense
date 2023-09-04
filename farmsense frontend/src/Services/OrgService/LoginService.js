import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/farmsense/login`, {
        email: username,
        password: password,
      });

    return response;
  } catch (error) {
    throw error;
  }
};






