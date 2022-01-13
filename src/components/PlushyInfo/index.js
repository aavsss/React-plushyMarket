import React from "react";
import PropTypes from "prop-types"
// Components
import Thumb from "../Thumb";
import Button from "../Button";
// Image
import NoImage from '../../images/no_image.jpg';
// Styles
import { Wrapper, Content, Text } from "./PlushyInfo.styles";
// Redux
import { useDispatch } from "react-redux";
// Slice
import { increment } from "../../features/cart/cartSlice";

const PlushyInfo = ({ plushy, buyPlushy }) => {
    const dispatch = useDispatch();

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
                            {plushy.quantity}
                        </div>
                    </div>
                    <Button text="Buy" callback={() => buyPlushy.mutate()}/>
                </Text>
            </Content>
        </Wrapper>
    )
};

PlushyInfo.propTypes = {
    plushy: PropTypes.object
};

export default PlushyInfo;