import styled from "styled-components";

export const Wrapper = styled.button`
    display: block;
    background: var(--darkGrey);
    width: 75px;
    min-width: 125px;
    height: 30px;
    border-radius: 30px;
    color: var(--white);
    border: 0;
    font-size: var(--fontMed);
    transition: all 0.3s;
    outline: none;
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }

    :disabled {
        opacity: 0.5;
    }
`;
