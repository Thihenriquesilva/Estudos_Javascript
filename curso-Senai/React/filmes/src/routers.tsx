import React from 'react';
//permite criar rotas 
import {BrowserRouter, Route} from 'react-router-dom';


//importar todas as pages, pois elas serão nossas rotas
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Perfil from './pages/Perfil';
import Genero from './pages/Genero';
import Filme from './pages/Filme';

//criando as rotas
function Routers(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/cadastro" component={Cadastro}/>
            <Route path="/perfil" component={Perfil}/>
            <Route path="/genero" component={Genero}/>
            <Route path="/filme" component={Filme}/>
        </BrowserRouter>
    );
}

export default Routers;