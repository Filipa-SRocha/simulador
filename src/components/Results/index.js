import React, { useEffect, useState } from 'react';
import Squares from '../Squares';
import { Wrapper, Container } from './style';
import api from '../../api';

const Results = () => {
    const [data, setData] = useState('null');

    useEffect(() => {
        console.log('heres something');
        //?tipoIndexacao=:busca&tipoRendimento=:busca

        api.get('/simulacoes?tipoIndexacao=pre&tipoRendimento=bruto')
            .then((response) => {
                let dataObject = response.data.shift();
                setData(dataObject);
                // console.log(data);
            })
            .catch((error) => {
                console.log(error);
                alert('Ocorreu um erro ao buscar os items');
            });
    }, []);

    return (
        <Container>
            <h2>Resultado da Simulação</h2>
            <Wrapper>
                <Squares data={data} />
                {/* <Graph /> */}
            </Wrapper>
        </Container>
    );
};

export default Results;
