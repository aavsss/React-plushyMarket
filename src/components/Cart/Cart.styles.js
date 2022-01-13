import styled from "styled-components";

export const Wrapper = styled.div`

`;

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50px;
    height: 50px;
    padding: 20px 0;
    margin: 0 auto;
    color: var(--white);
`;

export const LogoImg = styled.img`
    transform: translateY(-50%);
    margin-right: 20px;
    width: 50px;
    height: 50px;

    @media screen and (max-width: 500px) {
        width: 30px;
    }
`;