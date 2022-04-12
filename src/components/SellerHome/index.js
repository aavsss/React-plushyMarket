import React from "react";
// Components
import Grid from "../Grid";
import Spinner from "../Spinner";
import Product from "../Product";
import Navbar from "../Navbar";
import UploadPlushy from "../UploadPlushy";
import SellerAnalytics from "../SellerAnalytics";
// Images
import NoImage from "../../images/no_image.jpg";
// Custom hook
import useSellerHome from "./useSellerHome";

const SellerHome = () => {
    const {
        response,
        openUploadPlushyDialog,
        setOpenUploadPlushyDialog
    } = useSellerHome();

    const {
        data,
        error,
        isError,
        isLoading
    } = response;

    if (isLoading) return (
        <Spinner />
    )

    if (isError) return (
        <div> Something went wrong! {error}</div>
    )
    return (
        <>
            <Navbar />
            <SellerAnalytics uploadPlushyCallback={() => setOpenUploadPlushyDialog(true)} />
            <Grid header="Your Products">
                {data.map(plushy => (
                    <Product
                        key={plushy.id}
                        plushyId={plushy.id}
                        name={plushy.name}
                        price={plushy.price}
                        imageUrl={plushy.imageUrl ? plushy.imageUrl : NoImage}
                        clickable={false}
                    />
                ))}
            </Grid>
            <UploadPlushy open={openUploadPlushyDialog} handleClose={() => setOpenUploadPlushyDialog(false)} />
        </>
    )
};

export default SellerHome;
