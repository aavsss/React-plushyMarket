import { useMutation, useQueryClient } from "react-query";
// api
import { buyPlushyById } from "../api/BuyPlushyApi";

const useBuyPlushyById = (plushiesIdToBuy) => {
  
  const queryClient = useQueryClient();

  return useMutation(() => buyPlushyById(plushiesIdToBuy), 
      {
        onSuccess: (plushies) => {
          queryClient.setQueryData(['itemsInCart'], plushies)
      }
    }
  )
};

export default useBuyPlushyById;
