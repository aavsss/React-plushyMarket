import axios from "axios";

export const loginUser = async(email, password) => {
  const { data } = await axios.post(
    'http://localhost:8080/api/v1/login', {
      email, 
      password
    }
  );
  console.log(data);
  return data;
};

export const registerUser = async(email, password) => {
  const { data } = await axios.post(
    'http://localhost:8080/api/v1/register', {
      email, 
      password
    }
  );
  return data;
}