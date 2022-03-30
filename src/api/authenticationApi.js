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
      password,
    }
  );
  return data;
};

export const registerSeller = async(
  firstName,
  lastName,
  email,
  password
) => {
  const { data } = await axiosConfig.post(
    '/registration/seller', {
      firstName,
      lastName,
      email,
      password
    }
  );
  return data;
};

