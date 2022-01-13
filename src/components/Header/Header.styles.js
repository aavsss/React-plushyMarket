import styled from "styled-components";

export const Wrapper = styled.div`
    background: var(--darkGrey);
    padding: 0 20px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;
    flex-wrap: nowrap;
    justify-content: space-around;

    h1 {
        color: var(--white);

        @media screen and (max-width: 768px) {
            font-size: var(--fontBig);
        }
    }

`;

export const LogoImg = styled.img`
    position: absolute;
    left: 0;
    transform: translateY(-50%);
    margin-left: 20px;
    width: 50px;
    height: 50px;
    
    @media screen and (max-width: 500px) {
        width: 30px;
    }
`;