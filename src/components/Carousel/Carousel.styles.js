import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 600px;
    background-color: var(--lightGrey);
    margin: auto;
`;

export const Inner = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${({ image }) => image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;

    .left {
        flex: 3%;
        height: 100%;
        background-color: rgb(0, 0, 0, 0.6);
        display: grid;
        place-items: center;
        color: var(--white);
        cursor: pointer;
    }

    .center {
        flex: 90%;
        height: 100%;
    }

    .right {
        flex: 3%;
        height: 100%;
        background-color: rgb(0, 0, 0, 0.6);
        display: grid;
        place-items: center;
        color: var(--white);
        cursor: pointer;
    }
`;