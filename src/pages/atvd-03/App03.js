/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import './style03.css';
class App03 extends React.Component{
    render(){
    return(
        <div className='body'>
                
            <div className='fundo'>
            </div>
           
            <header className='header'>
                <ul className='ul'>
                    <li className='logo'>+ SAMBA</li>
                    <li className='li'><a href="#">Home</a></li>
                    <li className='li'><a href="#">Eventos</a></li>
                    <li className='li'><a href="#">Sobre</a></li>
                </ul>
            </header>
            <div className='secao-01'>
                <h2 className='evento'>EVENTO</h2>
                <div className='titulo-pandeiro'>
                <h1 className='h1'>Harmonia do samba</h1>
                </div>

                <h3 className='h3'>Data: 12 de Outubro 2022 (Quarta feira )</h3>
                <h3 className='h3'>Horario: 18h30 - 00h00</h3>
                <h3 className='h3'>Cidade: Barretos - SP</h3>
                <h3 className='h3'>Gênero: Arte em forma de Samba e Forró</h3>
                <h2 className='ingressos'>Ingressos:</h2>
                <ul>
                    <li className='li'>Camarote (open bar): R$950,00</li>
                    <li className='li'>Camarote: R$500,00</li>
                    <li className='li'>Front-stage: R$360,00</li>
                    <li className='li'>Pista: R$230,00</li>
                </ul>
                <h3 className='contato'>Contato / WhatsApp:  (011) - 98842-2349</h3>
            </div>
           
        </div>
    );
}
}
export default App03;