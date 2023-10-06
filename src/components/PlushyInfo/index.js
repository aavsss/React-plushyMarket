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
// Hook
import usePlushyInfo from "./usePlushyInfo";


const PlushyInfo = ({ plushy }) => {

    const {
        price,
        showSnackbar,
        isAddToCartButtonDisabled,
        handleChangeInQuantity,
        dispatchAddItemNumToCart
    } = usePlushyInfo(plushy);

    return (
        <Wrapper>
            <Content>
                <Thumb image={plushy.imageUrl ? plushy.imageUrl : NoImage} />
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
                        callback={dispatchAddItemNumToCart} />
                    <Snackbar
                        open={showSnackbar}
                        message="Max quantity reached"
                        autoHideDuration={3000}
                    />
                    Show similar
                </Text>
            </Content>
        </Wrapper>
    )
};

PlushyInfo.propTypes = {
    plushy: PropTypes.object
};

export default PlushyInfo;