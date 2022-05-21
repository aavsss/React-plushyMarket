import React from "react";
import AdminChart from "../../components/AdminChart";
// Components
import AdminHeader from "../../components/adminComponents/AdminHeader";
import AdminSummary from "../../components/adminComponents/AdminSummary";
import Spinner from "../../components/Spinner";
// data
import { chartData } from "../../helper/dummyData";
// hook


const AdminHome = () => {

    return (
        <>
            <AdminHeader />
            <AdminSummary />
            <AdminChart 
                title="Revenue"
                data={chartData}
                dataKey="revenue"
                grid
            />
        </>
    )
};

export default AdminHome;
