import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import '../Login/style.css';
import '../../assets/style/global.css';
import Input from '../../components/Input';

function Login() {
    return (
      <div>
         <Header description="Faça o login e acesse a Coletanea"/>
         <div className="centro">
           <div className="login">
              <Input name="email" label="E-mail" id="email" type="email"/>
              <Input name="senha" label="Senha" id="email" type="password"/>
           </div>
         </div>
         <Footer/>
      </div>
    );
  }
  
  export default Login;