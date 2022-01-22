import React from "react";
import PropTypes from 'prop-types';
// Styles
import { Wrapper } from "./Button.styles";

const Button = ({ text, callback, disabled }) => (
    <Wrapper type="button" disabled={disabled} onClick={callback}>
        {text}
    </Wrapper>
)

Button.propTypes = {
    text: PropTypes.string,
    callback: PropTypes.func
}

export default Button;