import React from 'react';
import '../../assets/style/global.css';
import '../../assets/style/normalize.css';
import '../Header/style.css';
import logo from '../../assets/images/logo.png';

function Header(){
  return (
    <div className="principal">
       <div className="header">
        <nav>
          <img src={logo} alt="Logo"/>
          <ul>
                <li ><a>Perfil</a></li>
                <li ><a>Filmes</a></li>
                <li ><a>Gêneros</a></li>
            </ul>
        </nav>
       </div>
    </div>
  );
}

export default Header;



//criar componente footer e estiliza-lo 
//colocar ele na home e na login