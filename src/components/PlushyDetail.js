import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// Components
import Spinner from './Spinner';
import PlushyInfo from './PlushyInfo';
// hook 
import { usePlushyFetchById } from '../hooks/usePlushyFetchById';
import useBuyPlushyById from '../hooks/useBuyPlushyById';

const PlushyDetail = () => {
    const { plushyId } = useParams();

    const {
        data, 
        error,
        isError,
        isLoading,
    } = usePlushyFetchById(plushyId);

    const boughtPlushy = useBuyPlushyById(plushyId, 1);

    if (isLoading) return (
        <Spinner />
    )

    if (isError) return (
        <div> Something went wrong! {error}</div>
    )


    return (
        <PlushyInfo 
            plushy={data}
            buyPlushy={boughtPlushy}
            />
    );
};

export default PlushyDetail;