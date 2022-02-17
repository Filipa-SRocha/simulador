import styled from 'styled-components';

export const Container = styled.section`
    width: 50%;
    text-align: left;
    padding: 2%;
`;

export const FormContainer = styled.div`
    background: pink;
    /* height: 90vh; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Wrapper = styled.div`
    width: 100%;
    padding: 3%;
    display: flex;
    gap: 10px;
    justify-content: space-around;
    & > div {
        flex-grow: 1;
    }
`;

export const FormLabel = styled.label`
    color: grey;
`;

export const FormElement = styled.div`
    margin: 20px 0;
`;
