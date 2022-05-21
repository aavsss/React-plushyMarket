import { useQuery } from "react-query";
// api
import { getTotalNumberOfUsers } from "../api/UserApi";
import { fetchPlushies } from "../api/PlushyApi";

const useAdminSummary = () => {
    const totalNumUsersResponse = useQuery('totalUsers', () => getTotalNumberOfUsers());
    const fetchPlushiesResponse = useQuery('plushies', () => fetchPlushies());
    return {
        totalNumUsersResponse,
        fetchPlushiesResponse
    }
};

export default useAdminSummary;