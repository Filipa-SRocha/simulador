import React from 'react';
import { SingleSquare, ResultsSection } from './style';

//A função transforma o titulo recebido pela API num Título apresentável

function prettyTitle(title) {
    //divide o nome das variáveis em palavras
    // exemplo: valorTotalIR => ['valor', 'total', 'IR']
    const titleWordByWord = title.match(/[a-z]+|[A-Z]{2,}|[A-Z][a-z]*/g);

    let newTitle = '';

    for (let i in titleWordByWord) {
        i === 0
            ? (newTitle +=
                  titleWordByWord[i].charAt(0).toUpperCase() +
                  titleWordByWord[i].slice(1))
            : (newTitle += ' ' + titleWordByWord[i]);
    }

    return newTitle;
}

const Squares = ({ data }) => {
    console.log('inside squares');
    console.log(data);

    // filtra o objecto para obtermos as chaves-titulos das categorias que desejamos imprimir na tela
    const titles = Object.keys(data).filter(
        (title) =>
            title !== 'tipoIndexacao' &&
            title !== 'tipoRendimento' &&
            title !== 'graficoValores'
    );

    titles.forEach((title) => {
        prettyTitle(title);
    });

    return (
        <ResultsSection>
            {titles.map((title) => (
                <SingleSquare>
                    <h3>{prettyTitle(title)}</h3>
                    <p>{data[title]}</p>
                </SingleSquare>
            ))}
        </ResultsSection>
    );
};

export default Squares;
