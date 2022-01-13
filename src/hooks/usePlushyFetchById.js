import { useQuery } from "react-query";
// api 
import { fetchPlushyById } from "../api/PlushyApi";

export const usePlushyFetchById = (plushyId) => {

    const {
        data,
        error,
        isError,
        isLoading,
    } = useQuery(
        'plushy',
        () => fetchPlushyById(plushyId),
    );

    return {
        data,
        error,
        isError,
        isLoading,
    };
};
