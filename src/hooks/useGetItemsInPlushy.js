import { useQuery } from "react-query";
// api 
import { getPlushiesInCart } from "../api/CartApi";

const useGetItemsInPlushy = () => {
    return useQuery("itemsInCart", () => getPlushiesInCart(1));
}

export default useGetItemsInPlushy;
