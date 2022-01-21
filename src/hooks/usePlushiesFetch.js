import { useQuery } from "react-query";
// api 
import { fetchPlushies } from "../api/PlushyApi";

const usePlushiesFetch = () => {
    const response = useQuery("plushies", fetchPlushies);
    return response;
}

export default usePlushiesFetch;
