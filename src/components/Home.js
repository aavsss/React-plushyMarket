import React from "react";
import { useQuery } from "react-query";
// Images
import HeroImg from "../images/bear.jpg";
import NoImage from "../images/no_image.jpg";
// Components
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Product from "./Product";
import Spinner from "./Spinner";
// api calls 
import fetchPlushies from "../api/fetchPlushies";

const Home = () => {
    const { 
        data, 
        error, 
        isError, 
        isLoading
    } = useQuery('plushies', fetchPlushies);

    // Todo: doesn't work well. has no state
    if (isLoading) return (
        <Spinner />
    )

    if (isError) return (
        <div> Something went wrong! {error}</div>
    )

    return (
        <>
            <HeroImage image={HeroImg}/>
            <Grid header="Plushies">
                {data.map(plushy => (
                    <Product
                        key={plushy.id}
                        plushyId={plushy.id}
                        name={plushy.name}
                        price={plushy.price}
                        imageUrl={NoImage}
                    />
                ))}
            </Grid>
        </>
    )
}

export default Home;