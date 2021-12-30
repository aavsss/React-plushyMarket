import { useQuery } from "react-query";
// api
import { buyPlushyById } from "../api/BuyPlushyApi";

const useBuyPlushyById = (
    plushyId, 
    amount, 
    bought
    ) => {
    const result = useQuery(
        ['boughtPlushy', bought], 
        () => buyPlushyById(plushyId, amount),
        {enabled: false}
    );
    return result;
};

export default useBuyPlushyById;
