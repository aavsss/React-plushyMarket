import styled from "styled-components";

export const Wrapper = styled.button`
    display: block;
    background: var(--darkGrey);
    width: 75px;
    min-width: 75px;
    height: 30px;
    border-radius: 30px;
    color: var(--white);
    border: 0;
    font-size: var(--fontMed);
    transition: all 0.3s;
    outline: none;
    margin-top: 30px;
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;