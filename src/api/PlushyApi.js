import axios from "axios";
import axiosConfig from "../config/axiosConfig";

export const fetchPlushies = async() => {
    const { data } = await axiosConfig.get('http://localhost:8080/api/v1/plushy');   
    return data;
};

export const fetchPlushyById = async(plushyId) => {
    const { data } = await axios.get(`http://localhost:8080/api/v1/plushy/${plushyId}`, {
        withCredentials: true
    });
    return data; 
}
