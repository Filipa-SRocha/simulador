import React from 'react';
import { Container, SingleTab } from './style';

const Tabs = ({ names }) => {
    let selected = false;
    function handleClick(e) {
        console.log('click');
        console.log(e);
    }

    return (
        <Container>
            {names.map((element) => {
                return (
                    <SingleTab selected onClick={handleClick}>
                        <p>{element}</p>
                    </SingleTab>
                );
            })}
        </Container>
    );
};

export default Tabs;
