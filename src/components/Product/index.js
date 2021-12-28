import React from "react";
import PropTypes from "prop-types";
// Styles
import { Wrapper, Image } from "./Product.styles";

const Product = ({name, price, imageUrl}) => (
    <Wrapper>
        <Image src={imageUrl} alt='alt-thumb' />
        <h3>{name}</h3>
        <h3>{price}</h3>
    </Wrapper>
);

Product.propTypes = {
    name: PropTypes.string, 
    price: PropTypes.number,
    imageUrl: PropTypes.string
}

export default Product;
