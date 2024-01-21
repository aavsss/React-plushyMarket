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

export const editPlushy = async (id, plushyInfo, plushyImage) => {
    const formData = new FormData();
    formData.append("plushy", plushyInfo);
    formData.append("file", plushyImage);

    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }

    const { data } = await axiosConfig.put(`/plushy/update/${id}`, formData, config);
    return data;
}

export const fetchPlushiesOfOwner = async () => {
    const { data } = await axiosConfig.get(`/plushy/owner`)
    return data;
} 

export const fetchSimilarPlushies = async (plushyId) => {
    const { data } = await axiosConfig.get(`/plushy/${plushyId}/similar_plushies`);
    return data;
}