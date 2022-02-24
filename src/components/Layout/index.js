import React from 'react';
import { Container, Wrapper, Main } from './style';
import Simulator from '../Simulator';
import Results from '../Results';

const Layout = function () {
    return (
        <Container>
            <Main>
                <h1>Simulador de Investimentos</h1>
                <Wrapper>
                    <Simulator />
                    {/* <Results /> */}
                </Wrapper>
            </Main>
        </Container>
    );
};

export default Layout;
