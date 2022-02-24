import styled from 'styled-components';

export const StyledInput = styled.input`
    background: transparent;
    border: none;
    border-bottom: 1px solid black;
    margin: 15px 0;
    width: 80%;
    height: 20px;
    font-size: 18px;

    &:focus {
        outline: none;
    }
`;
