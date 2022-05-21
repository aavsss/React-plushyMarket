import useAnalytics from "../../hooks/useAnalytics";

const useSellerAnalytics = () => {
    const analyticsData = useAnalytics();

    return analyticsData;
};

export default useSellerAnalytics;