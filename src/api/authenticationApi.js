import axios from "axios";
import axiosConfig from "../config/axiosConfig";

export const loginUser = async(email, password) => {
  const response = await axiosConfig.post(
    'http://localhost:8080/api/v1/login', {
      email, 
      password
    }
  );
  console.log(response);
  return response.data;
};

export const registerUser = async(email, password) => {
  const { data } = await axios.post(
    'http://localhost:8080/api/v1/register', {
      email, 
      password
    }, {
      withCredentials: true
    }
  );
  return data;
}
