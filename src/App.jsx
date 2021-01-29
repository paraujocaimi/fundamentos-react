import React from 'react'
import './App.css'
import ComFilhos from './component/basicos/ComFilhos.jsx'
import ComParametro from './component/basicos/ComParametro.jsx'
import Cards from './component/layout/Cards.jsx'
import Primeiro from './component/basicos/Primeiro'
import Repeticao from './component/basicos/Repeticao.jsx'
import Condicional from './component/basicos/Condicional.jsx'
import CondicionalIf from './component/basicos/CondicionalComIf.jsx'
import Pai from './component/comunicacao/direta/Pai.jsx'
import Super from './component/comunicacao/indireta/Super.jsx'
import Input from './component/form/Input.jsx'
import Contador from './component/contador/Contador.jsx'
import Contador2 from './component/contador2/Contador2.jsx'
import MegaSena from './component/mega-sena/MegaSena.jsx'

export default (props) =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="GroupCards">
            <Cards titulo="#11 - Mega Sena" color="#0000FF" border="#6A5ACD" background="#DCDCDC">
                <MegaSena></MegaSena>
            </Cards>
            <Cards titulo="#10 - Contador (Dificil)" color="#00CED1" border="#00FFFF" background="#DCDCDC">
                <Contador2></Contador2>
            </Cards>
            <Cards titulo="#10 - Contador (Fácil)" color="#3CB371" border="#2E8B57" background="#DCDCDC">
                <Contador></Contador>
            </Cards>
            <Cards titulo="#09 - Form" color="#DB7093" border="#DC143C" background="#DCDCDC">
                <Input></Input>
            </Cards>
            <Cards titulo="#08 - Comunicação Indireta" color="#F4A460" border="#D2691E" background="#DCDCDC">
                <Super></Super>
            </Cards>
            <Cards titulo="#07 - Comunicação Direta" color="#BC8F8F" border="#A0522D" background="#DCDCDC">
                <Pai></Pai>
            </Cards>
            <Cards titulo="#06 - Condicional com If" color="#9400D3" border="#4B0082" background="#DCDCDC">
                <CondicionalIf numero={10}></CondicionalIf>
            </Cards>
            <Cards titulo="#05 - Condicional" color="#9370DB" border="#7B68EE" background="#DCDCDC">
                <Condicional numero={15}></Condicional>
            </Cards>
            <Cards titulo="#04 - Repetição" color="#FF69B4" border="#C71585" background="#DCDCDC">
                <Repeticao></Repeticao>
            </Cards>
            <Cards titulo="#03 - Componente com Filhos" color="#FFD700" border="#FFFF00" background="#DCDCDC">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                    </ul>
                </ComFilhos>
            </Cards>
            <Cards titulo='#02 - Cards com Parametros' color="#FF8C00" border="#FF4500" background="#DCDCDC">
                <ComParametro titulo="Este é o título" subtitulo="Esse é o subtitulo"></ComParametro>
            </Cards>
            <Cards titulo='#01 - Primeiro Componente' color="#B22222" border="#800000" background="#DCDCDC">
                <Primeiro></Primeiro>
            </Cards>
        </div>
    </div>
