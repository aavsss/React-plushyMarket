import axiosConfig from "../config/axiosConfig";

export const fetchPlushies = async() => {
    const { data } = await axiosConfig.get('/plushy');   
    return data;
};

export const fetchPlushyById = async(plushyId) => {
    const { data } = await axiosConfig.get(`/plushy/${plushyId}`);
    return data; 
}
