import React from "react";
import AdminChart from "../../components/AdminChart";
// Components
import AdminHeader from "../../components/adminComponents/AdminHeader";
import AdminSummary from "../../components/adminComponents/AdminSummary";
import Spinner from "../../components/Spinner";
// data
import { chartData } from "../../helper/dummyData";
// hook
import useAdminChart from "./useAdminChart";


const AdminHome = () => {

    const { revenuesResponse } = useAdminChart();
    const { data: revenues } = revenuesResponse;

    return (
        <>
            <AdminHeader />
            <AdminSummary />
            <AdminChart 
                title="Revenue"
                data={revenues || chartData}
                dataKey="earned"
                grid
            />
        </>
    )
};

export default AdminHome;
