import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    margin-top: 20px;
    flex-wrap: wrap;

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Input = styled.input`
    max-width: 450px;
    width: 100%;
    padding: 10px;
    height: 70px;
    box-sizing: border-box;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    height: 70px;
    background: #e50914;
    color: #FFFFFF;
    padding: 0 32px;
    border: 0;
    font-size: 1.875rem;
    cursor: pointer;

    img{
        margin-left: 10px;
        filter: brightness(0) invert(1);
        width:24px;

        @media(max-width) {
            width: 16px;
        }
    }
`;

export const Text = styled.h3`
    color: #FFFFFF;
    max-width: none;
    padding-bottom: 20px;
    font-size: 1.2rem;
`;

export const Breack = styled.div`
    flex-basis: 100%;
    height: 0;
`;