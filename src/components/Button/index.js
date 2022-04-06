import React from "react";
import PropTypes from 'prop-types';
// Styles
import { Wrapper } from "./Button.styles";

const Button = ({ text, callback, disabled, handleKeyPress }) => (
    <Wrapper type="button" disabled={disabled} onClick={callback} onKeyPress={handleKeyPress} >
        {text}
    </Wrapper>
)

Button.propTypes = {
    text: PropTypes.string,
    callback: PropTypes.func
}

export default Button;