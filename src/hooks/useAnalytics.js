const useAnalytics = () => {
    // TODO: This repo layer will have access to its required API
    const mockData = {
        data: {
            activeProduct: 1,
            soldProduct: 0,
            unsoldProduct: 0,
            totalMoneyEarned: 0
        },
        isLoading: false
    };
    return mockData;
};

export default useAnalytics;