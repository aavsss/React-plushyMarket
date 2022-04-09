import React from "react";
// Images
import HeroImg from "../../images/bear.jpg";
import NoImage from "../../images/no_image.jpg";
// Components
import HeroImage from "../HeroImage";
import Grid from "../Grid";
import Product from "../Product";
import Spinner from "../Spinner";
import Header from "../Header";

// hooks
import usePlushiesFetch from "../../hooks/usePlushiesFetch";


const Home = () => {
    const {
        data,
        error,
        isError,
        isLoading
    } = usePlushiesFetch();

    if (isLoading) return (
        <Spinner />
    )

    if (isError) return (
        <div> Something went wrong! {error}</div>
    )

    return (
        <>
            <Header />
            <HeroImage image={data ? data[0].imageUrl : HeroImg} />
            <Grid header="Plushies">
                {data.map(plushy => (
                    <Product
                        key={plushy.id}
                        plushyId={plushy.id}
                        name={plushy.name}
                        price={plushy.price}
                        imageUrl={plushy.imageUrl ? plushy.imageUrl : NoImage}
                        clickable={true}
                    />
                ))}
            </Grid>
        </>
    )
}

export default Home;