import React from 'react';
import Ilustracao from './img/ilustracao_pessoas.png';
import Titulo from './img/titulo_sobre.png';
// import { ReactComponent as PaintIcon } from "./img/fundo_um.png";
// import Logo from './components/img/logo.png';

function about() {
  return (
      <div className='conatiner container_sobre'>

        <div className='container ilustracao'>
          <img className='fundo_sobre' src={Ilustracao}/>
        </div>
        <div className='container titulo'>
          <img className='fundo_sobre' src={Titulo}/>
        </div>
      
      </div>
  );
}

export default about;