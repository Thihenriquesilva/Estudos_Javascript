import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.css';

function Perfil (){
    return(
        <div>
            <Header description="Faça o cadastro para o acesso"/>
            <div className="centro">
                <div className="cadastro">
                    <h2 id="title">Cadastro</h2>
                    <div className="div-inputs">
                       
                </div>
            </div>
            <Footer/>
        </div>
        </div>
    )
}

export default Perfil;