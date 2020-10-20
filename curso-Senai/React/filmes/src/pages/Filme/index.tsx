import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Input from '../../components/Input';

import carretel from '../../assets/images/cinema.png';
import atualizar from '../../assets/images/refresh.png';
import lixeira from '../../assets/images/trash.png';
import '../../assets/style/global.css'
import './style.css'
import { report } from 'process';
import { isTemplateExpression } from 'typescript';

function Filme() {
  const [filme, setFilme] = useState('');
  const [idFilme, setIdFilme] = useState(0);
  const [filmes, setFilmes] = useState([]);

  const [genero, setGenero] = useState('');
  const [idGenero, setIdGenero] = useState(0);
  const [generos, setGeneros] = useState([]);

//   const [genero, setGenero] = useState('');
//   const [idGenero, setIdGenero] = useState(0);
//   const [generos, setGeneros] = useState([]);

  useEffect(() => {
    listar();
  }, []);

  const listar = () => {
    fetch('http://localhost:5000/api/filmes', {
      method: 'GET',
      headers: {
        authorization: 'Bearer' + localStorage.getItem('token-filmes')
      }
    })
      .then(response => response.json())
      .then(dados => {
        setFilmes(dados);
      })
      .catch(err => console.error(err));
  }

  const listarGenero = ()=>{
      fetch('http://localhost:5000/api/generos',{
          method :'GET',
          headers:{
              authorization: 'Bearer' + localStorage.getItem('token-filmes')
          }
      })
      .then(response => response.json())
      .then(dados => {
        setGeneros(dados);
      })
      .catch(err => console.error(err));
  }
  const trash = (id: number) => {
    if (window.confirm('Deseja excluir o Gênero?')) {
      fetch('http://localhost:5000/api/filmes/' + id, {
        method: 'DELETE',
        headers: {
          authorization: 'Bearer' + localStorage.getItem('token-filmes')
        }
      })
        .then(() => {
          listar();
        })
        .catch(err => console.error(err));
    }
  }

  const refresh = (id: number) => {

    fetch('http://localhost:5000/api/filmes/' + id,{
      method: 'GET',
      headers: {
        authorization: 'Bearer' + localStorage.getItem('token-filmes')
      }
    })
      .then(response => response.json())
      .then(dados => {
        
        setIdFilme(dados.idFilme);
        setFilme(dados.titulo);
      })
      .catch(err => console.error(err))
  }

  const salvar = () => {
    const form = {
      nome: filme
    };

    const method = (idFilme === 0 ? 'POST' : 'PUT');
    const urlRequest = (idFilme === 0 ? 'http://localhost:5000/api/filmes' : 'http://localhost:5000/api/filmes/' + idFilme);
    fetch(urlRequest, {
      method: method,
      body: JSON.stringify(form),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(() => {
        alert('Filme cadastrado');
        setIdFilme(0);
        setFilme('');
        listar();
      })
      .catch(err => console.error(err));
  }


  return (
    <div className="Genero">
      <Header description="Cadastre os Filmes de sua preferência" />
      <div className="centro">
        <div className="genero">

          <h1>Filmes</h1>
          <div className="div-image">
            <img src={carretel} alt="máscaras" />
          </div>
          <section>
            <h2>Lista de Filmes</h2>
            <table>
              <tbody id="tbody">
                
                {filmes.map((item:any) =>
                  <tr key={item.idFilme}>
                    <td>{item.titulo}</td>
                    <td>{item.idGeneroNavigation.nome}</td>
                    <td>
                      <img src={atualizar} onClick={() => refresh(item.idFilme)} alt="atualizar"/>
                      <img src={lixeira} onClick={() => trash(item.idFilme)} alt="deletar"/>
                      </td>
                  </tr>
                  
                )}
                
                {/* {
                  generos.map((item: any) => {
                    return (
                      <tr key={item.idGenero}>
                        <td>{item.idGenero}</td>
                        <td>{item.nome}</td>
                        <td>
                          <img src={atualizar} onClick={() => refresh(item.idGenero)} alt="" />
                          <img src={lixeira} onClick={() => trash(item.idGenero)} alt="" />
                        </td>
                      </tr>
                    )
                  })
                } */}

              </tbody>
            </table>
          </section>
          <div className="div-container">
            <form onSubmit={event => {
              event.preventDefault();
              salvar();
            }}>
              <div className="div-input">
                <Input name="filme" label="Cadastrar filme" value={filme} onChange={e => setFilme(e.target.value)} />
              </div>
              <select className="selectGenero" onClick={() => listarGenero()} name="genero" onChange={e => setGenero(e.target.value)} value={filme}>
                            <option value="0">Gênero</option>
                            {
                                generos.map((item: any) => {
                                    return <option value={item.idGenero}>{item.nome}</option>
                                })
                            }
                </select>
              <div id="div-btn">
                  {/* <Input name="genero" label="Cadastrar genero" value={genero} onChange={e => setGenero(e.target.value)} /> */}
                  <div className="btn">
                    <Button value="Salvar" />
                  </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Filme;