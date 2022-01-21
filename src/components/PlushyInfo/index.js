import React, { useState } from "react";
import PropTypes from "prop-types"
// Components
import Thumb from "../Thumb";
import Button from "../Button";
import { TextField } from "@mui/material";
// Image
import NoImage from '../../images/no_image.jpg';
// Styles
import { Wrapper, Content, Text } from "./PlushyInfo.styles";
// Redux
import { useDispatch } from "react-redux";
// Slice
import { addItemNumToCart } from "../../features/cart/cartSlice";

const PlushyInfo = ({ plushy }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

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
                            <div className="price">${plushy.price}</div>
                        </div>
                        <div className="quantity">
                            <h3>QUANTITY</h3>
                            <TextField
                                id="outlined-number"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                defaultValue={1}
                                size="small"
                                onChange={(event) => setQuantity(event.target.value)}
                            />
                        </div>
                    </div>
                    <Button text="Add to Cart" 
                        callback={() => dispatch(addItemNumToCart(
                            {
                                id: plushy.id,
                                quantity
                            }
                    ))}/>
                </Text>
            </Content>
        </Wrapper>
    )
};

PlushyInfo.propTypes = {
    plushy: PropTypes.object
};

export default PlushyInfo;