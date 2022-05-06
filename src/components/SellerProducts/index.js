import React from "react";
import { Wrapper, Overview, Image } from "./SellerProducts.styles";
// image
import Bear from "../../images/autumn.png";


const SellerProducts = ({ name, description, quantity, price, openEditDialog, img }) => {
    return (
        <Wrapper>
            <Image
                src={img ? img : Bear}
                alt={name}
                onClick={openEditDialog}
            />
            <div>
                <h1>{name}</h1>
                <Overview>{description}</Overview>
                <Overview>Quantity available: {quantity}</Overview>
                <Overview>Quantity sold: 0</Overview>
                <Overview>Price: ${price}</Overview>
            </div>
        </Wrapper>
    )
};

export default SellerProducts;
