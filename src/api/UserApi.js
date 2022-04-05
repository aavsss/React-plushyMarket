import axiosConfig from "../config/axiosConfig";

export const getUserContext = async () => {
    const { data } = await axiosConfig.get('/user/context');
    return data;
}
