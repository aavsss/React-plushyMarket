import axios from 'axios';

export const fetchInitialNumber = async() => {
    const { data } = await axios.get(
        'http://localhost:8080/api/v1/plushy/cart/1'
    );
    return data;
};

export const addItemToCart = async(productId) => {
    const { data } = await axios.post(
        'http://localhost:8080/api/v1/plushy/cart', 
        {
            userId: 4,
            productId
        } 
    );
    console.log("data", data);
    return data;
}
