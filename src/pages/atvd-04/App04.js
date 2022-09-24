/* eslint-disable no-redeclare */
import './style04.css';
import React from 'react';
class App04 extends React.Component{
  render(){
    function fraseAletoria(){
        let resultado = getRandomIntInclusive(0,6);
        let fraseRandom = recebeFrase[resultado];
        document.getElementById("frase_aleatoria").innerHTML = fraseRandom;
      }
      
      function getRandomIntInclusive(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    
      let recebeFrase = [
                "O Moreira é um ótimo professor!!",
                
                "O professor é o cara!!!!!",

                "Acesse o site www.dfilitto.com.br",

                "O canal dfilitto têm um ótimo professor",

                "Nunca desista dos seus sonhos!",

                "O professor é o melhor amigo do aluno",

                "O professor Danilo é muito legal!!!!!",
                
                "Lucas Lima Técnico D.S Tarde"
              ];
  
            return (
                <div className='alinhar'>
                      <h2 className='titulo'>React</h2>
                        <h1 className='num-atvd'>Atividade Nº4</h1>
                          <h3 className='enunciado'>Exibir frase aleatoria ao clicar no botão</h3>
                            <button onClick={fraseAletoria} className='btn'>EXIBIR FRASE</button>
                    
                      <div className='frase'>
                          <div id="frase_aleatoria">( A frase aparecerá aqui )</div>
                      </div>
                
                </div>
          
              );
  }
}

export default App04;