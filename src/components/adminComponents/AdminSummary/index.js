import React from 'react'
import "./adminSummary.styles.css"
import useAdminSummary from '../../../hooks/useAdminSummary';
import Spinner from '../../Spinner';

const AdminSummary = () => {
    const { totalNumUsersResponse, fetchPlushiesResponse } = useAdminSummary();
    const { data: numUsers } = totalNumUsersResponse;
    const { data: plushies } = fetchPlushiesResponse;

    return (
        <div className='adminSummary'>
            <div className='adminItems'>
                <span className='adminTitle'>Active Users</span>
                <div className='container'>
                    <span className='amount'>{numUsers || "N/A"}</span>
                </div>
            </div>
            <div className='adminItems'>
                <span className='adminTitle'>Num of Plushies</span>
                <div className='container'>
                    <span className='amount'>{plushies.length || "N/A"}</span>
                </div>
            </div>
        </div>
    )
};

export default AdminSummary
