import React from "react";
import PropTypes from "prop-types";
// Styles
import { Image } from './Thumb.styles';

const Thumb = ({image}) => (
    <div>
        <Image src={image} alt='plushy-thumb' />
    </div>
);

Thumb.propTypes = {
    image: PropTypes.string
}

export default Thumb;