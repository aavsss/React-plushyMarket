import React from "react";
// Components
import Grid from "../Grid";
import Spinner from "../Spinner";
import Product from "../Product";
import Navbar from "../Navbar";
import UploadPlushy from "../UploadPlushy";
import SellerAnalytics from "../SellerAnalytics";
import EditPlushy from "../EditPlushy";
import SellerProducts from "../SellerProducts";
// Components
import { Wrapper } from "./SellerHome.styles";
// Custom hook
import useSellerHome from "./useSellerHome";

const SellerHome = () => {
    const {
        response,
        openUploadPlushyDialog,
        openEditPlushyDialog,
        setOpenUploadPlushyDialog,
        setOpenEditPlushyDialog,
        plushyToEdit,
        setPlushyToEdit
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
            <Wrapper>
                <SellerAnalytics uploadPlushyCallback={() => setOpenUploadPlushyDialog(true)} />
                <h2>Your Products</h2>
                {
                    data.map(plushy => (
                        <SellerProducts
                            key={plushy.id}
                            name={plushy.name}
                            description={plushy.description}
                            quantity={plushy.quantity}
                            price={plushy.price}
                            img={plushy.imageUrl}
                            openEditDialog={() => {
                                setOpenEditPlushyDialog(true)
                                setPlushyToEdit(plushy)
                            }}
                        />
                    ))
                }
            </Wrapper>

            <EditPlushy item={plushyToEdit} open={openEditPlushyDialog} handleClose={() => setOpenEditPlushyDialog(false)} />
            <UploadPlushy open={openUploadPlushyDialog} handleClose={() => setOpenUploadPlushyDialog(false)} />
        </>
    )
};

export default SellerHome;
