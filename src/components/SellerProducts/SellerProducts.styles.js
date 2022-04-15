import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    max-width: 100%;
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

export const Image = styled.img`
    height: 240px;
    width: 150px;
    object-fit: cover;
    display: block;
    margin-right: 16px;
    cursor: pointer;
`;

export const Overview = styled.h3`
    color: var(--white);
`;