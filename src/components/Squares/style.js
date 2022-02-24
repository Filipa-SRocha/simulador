import styled from 'styled-components';

export const SingleSquare = styled.div`
    background: #f4f4f4;
    padding: 15px;
    height: 60px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h3 {
        font-size: 15px;
    }
`;

export const ResultsSection = styled.section`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
`;
