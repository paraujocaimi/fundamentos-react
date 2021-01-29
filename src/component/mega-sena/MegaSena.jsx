import React, { Component, useState } from 'react'
import BoxNumero from './BoxNumeros.jsx'
import Botao from './Botao.jsx'

let minimum = 1
let maximum = 60
let numerosSorteados = []

export default class MegaSena extends Component {

    state = {
        textoBtn: "Gerar Numeros",
        listaNumeros: "Clique para sortear as novas dezenas!"
    }

    setListaNumeroSorteados = (numerosSorteados) => {
        return numerosSorteados.map(num => {
            return ` ${num} `
        })
    }

    getListaNumerosSorteados = (numerosSorteados) => {
        this.setState({
            listaNumeros: this.setListaNumeroSorteados(numerosSorteados)
        })
    }

    //gerar o numero aleatorio 
    //https://github.com/vieiratn/gerador-mega-sena/blob/master/js/scripts.js
    randInt = (min, max) => {
        let num = Math.random() * (max - min) + min
        return Math.floor(num)
    }

    //ordenação dos numeros
    sortNumbers = (number1, number2) => {
        return (number1 - number2)
    }

    sortearNumeros = () => {
        numerosSorteados = []
        // Loop para colocar os números dentro da lista.
        let cont = 0
        while (numerosSorteados.length < 6) {
            let ball = this.randInt(minimum, maximum)

            // Condicional que verifica se o número aleatório já existe na lista.
            if (numerosSorteados.indexOf(ball) === -1) {
                numerosSorteados.push(ball)
                cont++
            }
        }

        // Utilizando a função para ordenar os itens da lista.
        numerosSorteados.sort(this.sortNumbers)
        console.log(numerosSorteados)

        this.getListaNumerosSorteados(numerosSorteados)
    }

    render() {
        return (
            <div>
                <h2>Gerador dezenas MegaSena</h2>
                <BoxNumero
                    listaNumeros={this.state.listaNumeros}
                ></BoxNumero>
                <Botao onSorteio={this.sortearNumeros}>{this.state.textoBtn}</Botao>
            </div>
        )
    }
}