import axiosConfig from "../config/axiosConfig";

export const loginUser = async(email, password) => {
  const response = await axiosConfig.post(
    '/login', {
      email, 
      password
    }
  );
  return response.data;
};

export const registerUser = async(email, password) => {
  const { data } = await axiosConfig.post(
    '/registration', {
      email, 
      password
    }
  );
  return data;
}
