import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import '../Login/style.css';
import '../../assets/style/global.css';
import Input from '../../components/Input';

function Login() {
    return (
      <div>
         <Header description="Faça o login e acesse a Coletanea"/>
         <div className="centro">
           <div className="login">
             <h2 id="title">Login</h2>
             <div className="div-inputs">
                <Input name="email" label="E-mail" id="email" type="email"/>
                <Input name="senha" label="Senha" id="email" type="password"/>
             </div>
             <Button value="Enviar"/>
           </div>
         </div>
         <Footer/>
      </div>
    );
  }
  
  export default Login;