import { useQuery } from "react-query";
// api
import { getSellingAnalytics } from "../api/UserApi";


const useAnalytics = () => {
    const sellingAnalyticsResponse = useQuery('selling-analytics', () => getSellingAnalytics());

    return sellingAnalyticsResponse;
};

export default useAnalytics;