import React from 'react';
import { Container, Wrapper } from './style';
import Simulator from '../Simulator';

const Layout = function () {
    return (
        <Container>
            <Wrapper>
                <Simulator />
                {/* <Results/> */}
            </Wrapper>
        </Container>
    );
};

export default Layout;
