import axiosConfig from "../config/axiosConfig";

export const fetchPlushies = async () => {
    const { data } = await axiosConfig.get('/plushy');
    return data;
};

export const fetchPlushyById = async (plushyId) => {
    const { data } = await axiosConfig.get(`/plushy/${plushyId}`);
    return data;
}

export const uploadPlushy = async (plushyInfo) => {
    const { data } = await axiosConfig.post(`/plushy/upload`, plushyInfo);
    return data;
}

export const fetchPlushiesOfOwner = async (ownerEmail) => {
    const { data } = await axiosConfig.get(`/plushy/owner/${ownerEmail}`)
    return data;
} 