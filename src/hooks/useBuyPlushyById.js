import { useQuery } from "react-query";
// api
import { buyPlushyById } from "../api/BuyPlushyApi";

const useBuyPlushyById = (
    plushyId, 
    amount, 
    bought, 
    setBought
    ) => {
    const result = useQuery(
        ['boughtPlushy', bought], 
        () => buyPlushyById(plushyId, amount),
        {enabled: bought}
    );
    setBought(false);
    return result;
};

export default useBuyPlushyById;
