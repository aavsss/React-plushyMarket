import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
// Components
import Spinner from './Spinner';
import PlushyInfo from './PlushyInfo';
// api Calls
import { fetchPlushyById } from '../api/PlushyApi';

const PlushyDetail = () => {
    const { plushyId } = useParams()
    const {
        data, 
        error,
        isError,
        isLoading
    } = useQuery(['plushy', plushyId], () => fetchPlushyById(plushyId));

    if (isLoading) return (
        <Spinner />
    )

    if (isError) return (
        <div> Something went wrong! {error}</div>
    )


    return (
        <PlushyInfo plushy={data} />
    );
};

export default PlushyDetail;