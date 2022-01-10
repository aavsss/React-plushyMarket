import { useMutation, useQueryClient } from "react-query";
// api
import { buyPlushyById } from "../api/BuyPlushyApi";

const useBuyPlushyById = (plushyId, amount) => {
    
    const queryClient = useQueryClient();

    return useMutation(() => buyPlushyById(plushyId, amount), 
            {
                onSuccess: (plushy) => {
                    queryClient.setQueryData(['plushy'], plushy)
            }
        }
    )
};

export default useBuyPlushyById;
