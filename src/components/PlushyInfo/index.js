import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"
// Components
import Thumb from "../Thumb";
import Button from "../Button";
import { Snackbar } from "@mui/material";
// Image
import NoImage from '../../images/no_image.jpg';
// Styles
import { Wrapper, Content, Text, StyledTextField } from "./PlushyInfo.styles";
// Redux
import { useDispatch } from "react-redux";
// Slice
import { addItemNumToCart } from "../../features/cart/cartSlice";

const PlushyInfo = ({ plushy }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(plushy.price);
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [isAddToCartButtonDisabled, setIsAddToCartButtonDisabled] = useState(false);

    // inital check to see if we have plushies available in the backend 
    useEffect(() => {
        if (plushy.quantity - quantity <= 0) {
            setIsAddToCartButtonDisabled(true);
            setShowSnackbar(true);
            return;
        } 
        setIsAddToCartButtonDisabled(false);
        setShowSnackbar(false);
    }, [plushy.quantity, quantity])

    const handleChangeInQuantity = quantity => {
        if ( plushy.quantity - quantity > 0) {
            setQuantity(quantity);
            setShowSnackbar(false);
            setIsAddToCartButtonDisabled(false);
        } else {
            setShowSnackbar(true);
            setIsAddToCartButtonDisabled(true);
        }     
        setPrice(quantity * plushy.price);
    };

    return (
        <Wrapper>
            <Content>
                <Thumb image={plushy.imageUrl? plushy.imageUrl : NoImage} />
                <Text>
                    <h1>{plushy.name}</h1>
                    <p>{plushy.description}</p>
                    <div className="price-title">
                        <div>
                            <h3>PRICE</h3>
                            <div className="price">${price}</div>
                        </div>
                        <div className="quantity">
                            <h3>QUANTITY</h3>
                            <StyledTextField
                                id="outlined-number"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    inputProps: {
                                        min: 1
                                    }
                                }}
                                defaultValue={1}
                                size="small"
                                onChange={(event) => handleChangeInQuantity(event.target.value)}
                            />
                        </div>
                    </div>
                    <Button text="Add to Cart" disabled={isAddToCartButtonDisabled}
                        callback={() => dispatch(addItemNumToCart(
                            {
                                id: plushy.id,
                                quantity
                            }
                    ))}/>
                    <Snackbar 
                        open={showSnackbar}
                        message="Max quantity reached"
                        autoHideDuration={3000}
                    />
                </Text>
            </Content>
        </Wrapper>
    )
};

PlushyInfo.propTypes = {
    plushy: PropTypes.object
};

export default PlushyInfo;