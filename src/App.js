import React from "react";
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import App02 from './pages/atvd-02/App02';
import App03 from './pages/atvd-03/App03';
import App04 from './pages/atvd-04/App04';
import './App.css';

function Departamentos(props){
    return <li>{props.children}</li>
}

function App(){
    return(
        <Router>
        <div className="App">
        <nav class="dp-menu2">
            <ul>
                <li> <Link to="/Home"> <Departamentos children="Home"/></Link></li>
                    <li>
                        <Link to="/App02"><Departamentos children="Atividade 2"/>
                    
                            <ul>
                                <li>2 - Crie uma nova aplicação do REACT WEB.
                                    ➢ Crie dois componentes: Lista, e Item
                                    ➢ O componente Lista deverá renderizar o conteúdo do seu corpo 
                                    (props.children) dentro de uma ul
                                    ➢ O componente Item deverá renderizar o conteúdo do seu corpo 
                                    (props.children) dentro de uma li
                                </li>
                            </ul>

                        </Link>
                    </li>
                <li>
                    <Link to="/App03"><Departamentos children="Atividade 3"/>
                
                        <ul>
                            <li>
                                3 - Criar utilizando o React
                                Evento:
                                Harmonia do Samba (Colocar logo)
                                Data: 12 de Outubro de 2022 (Quarta-Feira)
                                Horário: 18h30 - 00h00
                                Local: Parque do Povo
                                Cidade: Barretos - SP
                                Gênero: Arte em forma de Samba e Forró
                                Ingressos
                                • Camarote (open bar): R$950,00
                                • Camarote: R$500,00
                                • Front-stage: R$360,00
                                • Pista: R$230,00
                            </li>
                        </ul>

                    </Link>
                </li>
                <li>
                    <Link to="/App04"><Departamentos children="Atividade 4"/>

                    <ul>
                        <li>
                            4 - Criar utilizando o React
                            (App para Sortear frases)
                            "O professor é o cara!!!!!",
                            "O professor é o melhor amigo do aluno",
                            "O canal dfilitto têm um ótimo professor",
                            "O professor XYZ é muito legal!!!!!",
                            "Acesse o site www.dfilitto.com.br
                        </li>
                    </ul>

                    </Link>
                </li>
            </ul>
        </nav>
    </div>
        <Routes>
            <Route exact path="/Home" element={<Home/>} />
            <Route path="/App02" element={<App02/>} />
            <Route path="/App03" element={<App03/>} />
            <Route path="/App04" element={<App04/>} />
        </Routes>
    </Router>
    );
}

export default App;
