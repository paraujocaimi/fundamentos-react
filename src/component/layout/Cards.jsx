import React from 'react'
import './Cards.css'

export default props =>
    <div className="Cards" style={
            {borderColor: props.border || '#000'}
        }>
        <div className="Conteudo" style={
            {backgroundColor: props.background}
        }>{props.children}</div>
        <div className="Footer" style={
            {backgroundColor: props.color || '#000'}
        }>{props.titulo}</div>
    </div>