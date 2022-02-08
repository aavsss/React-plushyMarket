import axiosConfig from '../config/axiosConfig';

export const fetchInitialNumber = async() => {
    const { data } = await axiosConfig.get(
        '/plushy/cart/1'
    );
    return data;
};

export const addItemToCart = async(productId, quantity) => {
    const { data } = await axiosConfig.post(
        '/plushy/cart/set', 
        {
            userId: 1,
            productId,
            quantity: quantity
        } 
    );
    return data;
}

export const getPlushiesInCart = async(userId) => {
    const { data } = await axiosConfig.get(
        '/plushy/cart/items'
    );
    return data;
}
