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
    justify-content: space-evenly;
    align-items: center;
    padding: 16px;
`;

export const Text = styled.div`
    overflow: hidden;

    .status {
        display: flex;
        justify-content: flex-start;
    }

    .number {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .space {
        margin: 0 0 0 40px;
    }
`;

export const Type = styled.h3`
    margin-left: 20px;
`;