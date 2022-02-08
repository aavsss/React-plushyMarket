import axiosConfig from "../config/axiosConfig";

export const buyPlushyById = async(plushyIdsToBuy) => {
    const { data } = await axiosConfig.post(
        '/plushy/buy',
        plushyIdsToBuy
    );
    return data;
};
