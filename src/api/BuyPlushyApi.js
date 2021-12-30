import axios from "axios";

export const buyPlushyById = async(plushyId, amount) => {
    await axios.post(
        'http://localhost:8080/api/v1/plushy/buy',
        {
            id: plushyId,
            amount
        });
    return "OK";
}
