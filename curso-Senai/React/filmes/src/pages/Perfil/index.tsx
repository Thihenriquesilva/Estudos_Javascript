import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Input from '../../components/Input';
import './style.css';

function Perfil() {
    return (
        <div>
            <Header description="Edite seu perfil, caso necessário" />
            <div className="centro">
                <div className="cadastro">
                    <h2 id="title">Perfil</h2>
                    <div className="div-inputs">
                        <Input type="text" label="Nome" name="nome" />
                        <Input type="email" label="E-mail" name="email" />
                        <label>Permissão</label>
                        <br />
                        <select id="permissao">
                            <option value="" disabled selected>Selecione</option>
                            <option value="adm">Administrador</option>
                            <option value="usuario">Usuário</option>
                        </select>
                        <Input type="password" label="Senha" name="senha" />
                    </div>
                    <div className="container">
                        <Button value="Editar" />
                        <Button value="Salvar" />
                    </div>  
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Perfil;