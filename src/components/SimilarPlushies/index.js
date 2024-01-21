import React from "react";
import { Header } from "./SimilarPlushies.styles";
import Spinner from "../Spinner";
import Product from "../Product";
import NoImage from "../../images/no_image.jpg";
// hooks
import useSimilarPlushies from "./useSimilarPlushies";

const SimilarPlushies = ({id}) => {
    const {
        data,
        error,
        isError,
        isLoading
    } = useSimilarPlushies(id)
    
    if (isLoading) return (
        <Spinner />
    )

    if (isError) return (
        <div> Something went wrong! ${error}</div>
    )
    return (
        <>
            <Header>Similar Plushies</Header>
            {
                data.map((plushy) => {
                    return (
                        <Product
                            key={plushy.id}
                            plushyId={plushy.id}
                            name={plushy.name}
                            price={plushy.price}
                            imageUrl={plushy.imageUrl ? plushy.imageUrl : NoImage}
                            clickable={false}
                        />
                    )
                })
            }
        </>
    )
}

export default SimilarPlushies