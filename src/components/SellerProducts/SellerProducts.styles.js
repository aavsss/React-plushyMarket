import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    max-width: 97%;
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 20px;

    @media screen and (max-width: 768px) {
        display: block;
        max-height: none;
    }

    div {
        flex: 1;
    }

`;

export const Overview = styled.h3`
    color: var(--white);
`;