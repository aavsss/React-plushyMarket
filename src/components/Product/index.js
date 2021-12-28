import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Styles
import { Wrapper, Image } from "./Product.styles";

const Product = ({plushyId, name, price, imageUrl, clickable}) => (
    <Wrapper>
        {clickable && 
            <Link to={`/${plushyId}`}>
                <Image src={imageUrl} alt='alt-thumb' />
            </Link>
        }
        <h3>{name}</h3>
        <h3>{price}</h3>
    </Wrapper>
);

Product.propTypes = {
    plushyId: PropTypes.number,
    name: PropTypes.string, 
    price: PropTypes.number,
    imageUrl: PropTypes.string
}

export default Product;
