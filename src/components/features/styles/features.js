import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    border-bottom:  8px solid solid #222;
    text-align: center;
    padding: 165px 45px;
`;

export const Title = styled.h1`
    max-width: 640px;
    color: #FFFFFF;
    font-size: 4rem;
    font-weight: 700;
    margin: auto;

    @media (max-width: 600px) {
        font-size: 35px;
    }
`;

export const SubTitle = styled.h2`
    max-width: 640px;
    color: #FFFFFF;
    font-size: 26px;
    font-weight: normal;
    margin: auto;

    @media (max-width: 600px) {
        font-size: 18px;
    }
`;