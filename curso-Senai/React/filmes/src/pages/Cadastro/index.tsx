import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Input from '../../components/Input';
import '../Cadastro/style.css';
import '../../assets/style/global.css';

function Cadastro (){
    return(
        <div>
            <Header description="Faça o cadastro para o acesso"/>
            <div className="centro">
                <div className="cadastro">
                    <h2 id="title">Cadastro</h2>
                    <div className="div-inputs">
                        <Input type="text" label="Nome" name="nome" />
                        <Input type="email" label="E-mail" name="email" />
                        <label>Permissão</label>
                        <br/>
                        <select id="permissao">
                            <option value="" disabled selected>Selecione</option>
                            <option value="adm">Administrador</option>
                            <option value="usuario">Usuário</option>
                        </select>
                        <Input type="password" label="Senha" name="senha" />
                    </div>
                    <Button value="Cadastrar"/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Cadastro;