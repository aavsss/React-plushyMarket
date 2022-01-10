import { useQuery } from "react-query";
// api 
import { fetchPlushies } from "../api/PlushyApi";

const usePlushiesFetch = () => {
    return useQuery("plushies", fetchPlushies);
}

export default usePlushiesFetch;
