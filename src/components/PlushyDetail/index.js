import React from 'react';
import { useParams } from 'react-router-dom';
// Components
import Spinner from '../Spinner';
import PlushyInfo from '../PlushyInfo';
// hook 
import { usePlushyFetchById } from '../../hooks/usePlushyFetchById';

const PlushyDetail = () => {
    const { plushyId } = useParams();

    const {
        data,
        error,
        isError,
        isLoading,
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
        />
    );
};

export default PlushyDetail;
