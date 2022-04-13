import React from "react";
import { Wrapper, Overview } from "./SellerProducts.styles";
// image
import Bear from "../../images/autumn.png";

// TODO: Decouple items here?!? or not?!?
const SellerProducts = ({ name, description, quantity, price, openEditDialog }) => {
    return (
        <Wrapper onClick={openEditDialog}>
            <img src={Bear} alt={name} height={200} width={200} />
            <div>
                <h1>{name}</h1>
                <Overview>{description}</Overview>
                <Overview>Quantity available: {quantity}</Overview>
                <Overview>Quantity sold: 0</Overview>
                <Overview>Profit: ${price}</Overview>
            </div>
        </Wrapper>
    )
};

export default SellerProducts;
