import axios from 'axios';

const api = axios.create({
baseURL: process.env.REACT_APP_API_BASE_URL,
headers: {
"x-api-key": process.env.REACT_APP_API_VALUE,
},
});
console.log('API base:', process.env.REACT_APP_API_BASE_URL);
console.log('API key header name:', process.env.REACT_APP_API_KEY);
console.log('API key value:', process.env.REACT_APP_API_VALUE);
export default api;