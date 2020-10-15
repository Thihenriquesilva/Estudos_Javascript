import React, {useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import '../Login/style.css';
import '../../assets/style/global.css';
import Input from '../../components/Input';
import { useHistory } from 'react-router-dom';

function Login() {
  let history = useHistory();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const login = ()=>{
    const login = {
      email: email,
      senha: senha
    }

    fetch('http://localhost:5000/api/login',{
      method: 'POST',
      body: JSON.stringify(login),
      headers:{
        'content-type':'application/json'
      }
    })

    .then(response => response.json())
    .then(dados =>{
        if(dados.token !== undefined){
          localStorage.setItem('token-filmes',dados.token);
          alert("Login realizado com sucesso!");
          history.push('/');
        }
        else{
          alert('Senha ou Email incorretos! Tente novamente!');
        }
      })
    .catch(err =>console.error(err));
    }

    return (
      <div>
         <Header description="Faça o login e acesse a Coletanea"/>
         <div className="centro">
           <div className="login">
             <h2 id="title">Login</h2>
             <form onSubmit={event=>{event.preventDefault(); login(); }}>
             <div className="div-inputs">
                <Input name="email" label="E-mail" onChange={e=>setEmail(e.target.value)}/>
                <Input name="senha" label="Senha" onChange={e=>setSenha(e.target.value)}/>
             </div>
             <Button value="Enviar"/>
             </form>
           </div>
         </div>
         <Footer/>
      </div>
    );
  }

  export default Login;