import { useQuery } from "react-query";
// api
import { fetchPlushiesOfOwner } from "../../api/PlushyApi";

const useSellerHome = () => {
    const response = useQuery('seller_plushies', () => fetchPlushiesOfOwner(1));
    return response;
};

export default useSellerHome;