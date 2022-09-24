/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './style02.css';

function Departamentos(props){
    return <li>{props.children}</li>
}

class App02 extends React.Component{
    render(){
    return(
        <div>
        <nav className='dp-menu'>
            <ul>
                <li><a href=""><Departamentos children="Celulares"/></a>
                    <ul>
                        <li><a href=''><Departamentos children="Smartphones"/></a></li>
                    </ul>
                </li>
                <li><a href=""><Departamentos children="Eletrodomesticos"/></a>
                    <ul>
                        <li><a href=""><Departamentos children="Fogão"/></a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
    );
}
}

export default App02;