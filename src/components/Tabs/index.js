import React from 'react';
import { Container, SingleTab } from './style';

const Tabs = ({ names }) => {
    return (
        <Container>
            {names.map((element) => {
                return (
                    <SingleTab>
                        <p>{element}</p>
                    </SingleTab>
                );
            })}
        </Container>
    );
};

export default Tabs;
