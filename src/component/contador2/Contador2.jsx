import React, { Component, useState } from 'react'
import '../contador/Contador.css'
import Display from './Display.jsx'
import PassoForm from './PassoForm.jsx'
import Botoes from './Botoes.jsx'

export default class Contador extends Component {

    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })

    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })

    }

    mudarPasso = (novaPasso) => {
        this.setState({
            passo: novaPasso
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador 2</h2>
                <PassoForm
                    passo={this.state.passo}
                    OnPassoChange={this.mudarPasso}></PassoForm>
                <Display valor={this.state.valor}></Display>
                <Botoes onInc={this.inc} onDec={this.dec}></Botoes>
            </div>
        )
    }
}