import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
// Components
import Spinner from './Spinner';
import PlushyInfo from './PlushyInfo';
// hook 
import { usePlushyFetchById } from '../hooks/usePlushyFetchById';

const PlushyDetail = () => {
    const { plushyId } = useParams()

    const {
        data, 
        error,
        isError,
        isLoading,
        setBought,
        bought
    } = usePlushyFetchById(plushyId);

    if (isLoading) return (
        <Spinner />
    )

    if (isError) return (
        <div> Something went wrong! {error}</div>
    )


    return (
        <PlushyInfo 
            plushy={data}
            setBought={setBought}
            bought={bought}
            />
    );
};

export default PlushyDetail;