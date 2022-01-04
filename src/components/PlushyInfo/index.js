import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"
// Components
import Thumb from "../Thumb";
import Button from "../Button";
// Hooks
import useBuyPlushyById from "../../hooks/useBuyPlushyById";
// Image
import NoImage from '../../images/no_image.jpg';
// Styles
import { Wrapper, Content, Text } from "./PlushyInfo.styles";

const PlushyInfo = ({ plushy }) => {
    const [quantity, setQuantity] = useState(plushy.quantity);

    const boughtPlushy = useBuyPlushyById(plushy.id, 1);

    // initial 
    useEffect(() => {
        setQuantity(plushy.quantity);
    }, [plushy.quantity]);

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
                            {quantity}
                        </div>
                    </div>
                    <Button text="Buy" callback={() => boughtPlushy.mutate()}/>
                </Text>
            </Content>
        </Wrapper>
    )
};

PlushyInfo.propTypes = {
    plushy: PropTypes.object
};

export default PlushyInfo;