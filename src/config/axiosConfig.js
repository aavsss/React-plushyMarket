import axios from 'axios';
import { BASE_API_URL } from './constants';

const axiosConfig = axios.create({
  withCredentials: true,
  baseURL: BASE_API_URL
});

export default axiosConfig;
