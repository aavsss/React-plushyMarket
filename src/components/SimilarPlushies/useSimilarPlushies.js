import { useQuery } from "react-query";
// api
import { fetchSimilarPlushies } from "../../api/PlushyApi";

const useSimilarPlushies = (id) => {
    const response = useQuery("similarPlushies", () => fetchSimilarPlushies(id));
    return response;
}

export default useSimilarPlushies