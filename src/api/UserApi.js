import axiosConfig from "../config/axiosConfig";

export const getUserContext = async () => {
    const { data } = await axiosConfig.get('/user/context');
    return data;
}

export const getSellingAnalytics = async () => {
    const { data } = await axiosConfig.get('/user/selling-analytics');
    return data;
}