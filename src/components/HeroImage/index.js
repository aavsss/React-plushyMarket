import React from "react";
import PropTypes from "prop-types";
// Styles
import { Wrapper } from "./HeroImage.styles";

const HeroImage = ({ image }) => (
    <Wrapper image = {image} />
);

HeroImage.propTypes = {
    image: PropTypes.string
};

export default HeroImage;