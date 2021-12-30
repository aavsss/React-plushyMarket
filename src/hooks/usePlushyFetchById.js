import { useState } from "react";
import { useQuery } from "react-query";
// api 
import { fetchPlushyById } from "../api/PlushyApi";

export const usePlushyFetchById = (plushyId) => {
    const [bought, setBought] = useState(false);

    const {
        data,
        error,
        isError,
        isLoading
    } = useQuery(
        ['plushy', bought],
        () => fetchPlushyById(plushyId),
    );

    return {
        data,
        error,
        isError,
        isLoading,
        setBought,
        bought
    };
};

