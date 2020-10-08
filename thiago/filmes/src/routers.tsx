import React from 'react';
//permite criar rotas 
import {BrowserRouter, Route} from 'react-router-dom';

//importar todas as pages, pois elas serão nossas rotas
import Home from './pages/Home';
import Login from './pages/Login';


//criando as rotas
function Routers(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
        </BrowserRouter>
    );
}

export default Routers;