import React from 'react';
import '../../assets/style/global.css';
import '../../assets/style/normalize.css';
import '../Header/style.css';
import logo from '../../assets/images/logo.png';
import {Link} from 'react-router-dom';

// {/**contrato */}
interface HeaderProps{
  description: string;
}
// {/* React.FunctionComponent ou FCC*/}
const Header: React.FunctionComponent<HeaderProps> =(props) => {
  return (
    <div className="principal">
       <div className="header">
         <div className="align">
          <nav>
            {/* Links trabalham com o roteamento de caminhos  */}
            {/* Toda vez que eu clicar na logo volte para HOME(/) */}
            <Link to="/"><img src={logo} alt="Logo da Coletanea"/></Link>
            <ul className="menu">
                <li><Link to="/" className="link">Home</Link></li>
                <li><Link to="/login" className="link">Login</Link></li>
                <li><Link to="/cadastro" className="link">Cadastro</Link></li>
            </ul>
          </nav>
          <h3>{props.description}</h3>
         </div>
       </div>
    </div>
  );
}

export default Header;



//criar componente footer e estiliza-lo 
//colocar ele na home e na login