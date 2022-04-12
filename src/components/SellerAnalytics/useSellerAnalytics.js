import useAnalytics from "../../hooks/useAnalytics";

const useSellerAnalytics = () => {
    // TODO: create another hook which acts like a repository layer. That repo layer will have access to its required API
    const analyticsData = useAnalytics();

    return analyticsData;
};

export default useSellerAnalytics;