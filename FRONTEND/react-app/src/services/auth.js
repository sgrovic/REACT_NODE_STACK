import api from './api';

export const loginUser = async (email, password) => {
  try {
    const res = await api.post('/auth/login', { email, password });
    return res.data;
  } catch (err) {
    throw err.response ? err.response.data : err;
  }
};

export const registerUser = async (name, email, password) => {
  try {
    const res = await api.post('/auth/register', { name, email, password });
    return res.data;
  } catch (err) {
    throw err.response ? err.response.data : err;
  }
};
