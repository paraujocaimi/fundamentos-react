//Pai
import React, { useState } from 'react'
import Sub from './Sub.jsx'


export default (props) => {

    const [num, setNum] = useState(0)
    const [ texto, setTexto ] = useState('Valor')

    function quandoClicar(valorRecebido, texto){
        setNum(valorRecebido)
        setTexto(texto)
    }

    return (
        <div>
            <h4>{texto}: {num} </h4>
            <Sub onClicar={quandoClicar}></Sub>
        </div>
    );
};