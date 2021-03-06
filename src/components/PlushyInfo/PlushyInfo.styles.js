import styled from "styled-components";
import { TextField } from "@mui/material";

export const Wrapper = styled.div`
    background-size: cover;
    background-position: center;
    padding: 40px 20px;
`;

export const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 20px;

    @media screen and (max-width: 768px) {
        display: block;
        max-height: none;
    }
`;

export const Text = styled.div`
    width: 100%;
    padding: 20px 40px;
    color: var(--white);
    overflow: hidden;

    .price-title {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 30px;
    }

    .price {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 25px;
    }

    .quantity {
        margin: 0 0 0 40px;

        p {
            margin: 0;
        }
    }

    h1 {
        @media screen and (max-width: 768px) {
            font-size: var(--fontBig);
        }
    }
`;

export const StyledTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
    },
    '& input': {
        color: 'white'
    },
});