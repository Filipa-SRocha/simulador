import React from 'react';
import { SingleSquare } from './style';

const Squares = ({ aux }) => {
    return (
        <>
            <SingleSquare>
                <h3>Valor Final Bruto</h3>
                <p>R$ 1.500,00</p>
            </SingleSquare>
        </>
    );
};

export default Squares;
