import React from 'react';

export default props => {
    return (
        <div>
            <label for="passoInput">Passo:</label>
            <input
                id="passoInput"
                type="number"
                valor={
                    props.passo
                } onChange={
                    e => props.OnPassoChange(+e.target.value)
                }></input>
        </div>
    )
}