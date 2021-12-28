import React from "react";
import PropTypes from "prop-types"
// Components
import Thumb from "../Thumb";
// Image
import NoImage from '../../images/no_image.jpg';
// Styles
import { Wrapper, Content, Text } from "./PlushyInfo.styles";

const PlushyInfo = ({ plushy }) => (
    <Wrapper>
        <Content>
            <Thumb image={NoImage}/>
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
            </Text>
        </Content>
    </Wrapper>
);

export default PlushyInfo;