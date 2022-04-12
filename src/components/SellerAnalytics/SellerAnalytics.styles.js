import styled from "@emotion/styled";

export const Wrapper = styled.div`
    background: var(--lightGrey);
    background-size: 100% cover;
    height: 100px;
    position: relative;
    margin: 0px 24px;
    border-radius: 30px;
`;

export const Content = styled.div`
    display: flex;
    padding: 16px;
    justify-content: space-evenly;
    align-items: center;
`;

export const Text = styled.div`
    overflow: hidden;

    .status {
        display: flex;
        justify-content: space-evenly;
    }

    .number {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .space {
        margin: 0 0 0 0px;
    }
`;

export const Item = styled.div`
    flex: 1;

    .center {
        margin: auto;
        width: 0%;
    }

    .centerButton {
        margin: auto;
        width: 30%;
    }
`;