import styled from 'styled-components';

export const Container = styled.section`
    width: 50%;
    text-align: left;
    padding: 2%;
`;

export const FormContainer = styled.div`
    /* background: pink; */
    /* height: 90vh; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    & > div {
        flex-grow: 1;
    }
`;

export const FormLabel = styled.label`
    color: black;
    font-size: 0.75em;
`;

export const FormElement = styled.div`
    margin: 20px 0;
`;

export const Buttons = styled.div`
    width: 100%;
    display: flex;
    padding-right: 10%;
    justify-content: space-between;
`;

export const Button = styled.button`
    width: 45%;
    padding: 15px 0;
    border-radius: 10px;
    border: ${(props) =>
        props.type == 'submit' ? '1px solid #eb8c55' : '1px solid black'};
    background-color: ${(props) =>
        props.type == 'submit' ? '#eb8c55' : 'white'};
`;
