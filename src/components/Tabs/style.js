import styled from 'styled-components';

export const Container = styled.nav`
    display: flex;
    border: 1px solid black;
    border-radius: 10px;
    justify-content: space-around;
    width: 80%;
`;

export const SingleTab = styled.div`
    border: none;
    border-right: 1px solid black;
    text-align: center;
    color: black;
    padding: 8px;
    flex-grow: 1;
    flex-shrink: 1;
    &:last-child {
        border: none;
    }
`;
