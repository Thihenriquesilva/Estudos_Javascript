import React from 'react';
import '../../assets/style/global.css';
import '../../assets/style/normalize.css';
import '../Header/style.css';
import logo from '../../assets/images/logo.png';
import {Link, useHistory} from 'react-router-dom';

// {/**contrato */}
interface HeaderProps{
  description: string;
}
// {/* React.FunctionComponent ou FC*/}
const Header: React.FunctionComponent<HeaderProps> =(props) => {

let history = useHistory();

const logout = ()=>{
  localStorage.removeItem('token-filmes');
  alert('Você foi deslogado');
  history.push('/');
}

const menu =()=>{
  const token = localStorage.getItem('token-filmes');
  if(token === undefined || token === null){
    return(
      <ul className="menu">
        <li><Link to="/" className="link">Home</Link></li>
        <li><Link to="/login" className="link">Login</Link></li>
        <li><Link to="/cadastro" className="link">Cadastro</Link></li>
      </ul>
    )
  }else{
    return(
      <ul className="menu">
        <li><Link to="/" className="link">Home</Link></li>
        <li><Link to="/" className="link">Perfil</Link></li>
        <li><Link to="/filme" className="link">Filmes</Link></li>
        <li><Link to="/genero" className="link">Genêro</Link></li>
        <li><Link to="" onClick={event =>{event.preventDefault(); logout()}} className="link">Logout</Link></li>
      </ul>
    )
  }
}

  return (
    <div className="principal">
       <div className="header">
         <div className="align">
          <nav>
            {/* Links trabalham com o roteamento de caminhos  */}
            {/* Toda vez que eu clicar na logo volte para HOME(/) */}
            <Link to="/"><img src={logo} alt="Logo da Coletanea"/></Link>
            {menu()}
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