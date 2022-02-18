import React from 'react';
import Squares from '../Squares';
import { Wrapper, Container } from './style';

const Results = () => {
    let aux = [{ title: '' }];

    return (
        <Container>
            <h2>Resultado da Simulação</h2>
            <Wrapper>
                <Squares />
                {/* <Graph /> */}
            </Wrapper>
        </Container>
    );
};

export default Results;
