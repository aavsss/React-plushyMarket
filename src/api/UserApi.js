import axiosConfig from "../config/axiosConfig";

export const getUserRole = async() => {
    const { data } = await axiosConfig.get('/user/role');
    return data;
}
