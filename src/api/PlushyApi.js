import axiosConfig from "../config/axiosConfig";

export const fetchPlushies = async () => {
    const { data } = await axiosConfig.get('/plushy');
    return data;
};

export const fetchPlushyById = async (plushyId) => {
    const { data } = await axiosConfig.get(`/plushy/${plushyId}`);
    return data;
}

export const uploadPlushy = async (plushyInfo, plushyImage) => {
    const formData = new FormData();
    formData.append("plushy", plushyInfo);
    formData.append("file", plushyImage);

    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };

    const { data } = await axiosConfig.post(`/plushy/upload`, formData, config);
    return data;
}

export const fetchPlushiesOfOwner = async (ownerEmail) => {
    const { data } = await axiosConfig.get(`/plushy/owner/${ownerEmail}`)
    return data;
} 