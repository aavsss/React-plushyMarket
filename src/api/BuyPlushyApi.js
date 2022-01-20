import axios from "axios";

export const buyPlushyById = async(plushyIdsToBuy) => {
    const { data } = await axios.post(
        'http://localhost:8080/api/v1/plushy/buy',
        plushyIdsToBuy
    );
    return data;
};
