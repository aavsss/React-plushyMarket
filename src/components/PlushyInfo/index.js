import React, { useEffect } from "react";
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

const PlushyInfo = ({ plushy, setBought, bought }) => {

    useEffect(() => {
        console.log("bought", bought);
        if ( bought ) {

        }
    }, [bought]);

    const {
        data,
        error,
        isError,
        isLoading
    } = useBuyPlushyById(
        plushy.id,
        1, 
        bought, 
        setBought);

    return (
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
                    <Button text="Buy" callback={() => setBought(true)}/>
                </Text>
            </Content>
        </Wrapper>
    )
};

PlushyInfo.propTypes = {
    plushy: PropTypes.object
};

export default PlushyInfo;