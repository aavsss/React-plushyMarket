import { useState } from "react";
import { useQuery } from "react-query";
// api 
import { fetchPlushyById } from "../api/PlushyApi";

export const usePlushyFetchById = (plushyId) => {

    const {
        data,
        error,
        isError,
        isLoading,
        refetch
    } = useQuery(
        'plushy',
        () => fetchPlushyById(plushyId),
    );

    return {
        data,
        error,
        isError,
        isLoading,
        refetch
    };
};

