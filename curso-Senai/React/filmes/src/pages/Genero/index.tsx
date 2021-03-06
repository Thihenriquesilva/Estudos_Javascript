import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Input from '../../components/Input';

import mascaras from '../../assets/images/theater.png';
import atualizar from '../../assets/images/refresh.png';
import lixeira from '../../assets/images/trash.png';
import '../../assets/style/global.css'
import './style.css'
import { report } from 'process';
import { isTemplateExpression } from 'typescript';

function Genero() {
  const [genero, setGenero] = useState('');
  const [idGenero, setIdGenero] = useState(0);
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    listar();
  }, []);

  const listar = () => {
    fetch('http://localhost:5000/api/generos', {
      method: 'GET',
      headers: {
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
      fetch('http://localhost:5000/api/generos/' + id, {
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

    fetch('http://localhost:5000/api/generos/' + id,{
      method: 'GET',
      headers: {
        authorization: 'Bearer' + localStorage.getItem('token-filmes')
      }
    })
      .then(response => response.json())
      .then(dados => {
        
        setIdGenero(dados.idGenero);
        setGenero(dados.nome);
      })
      .catch(err => console.error(err))
  }

  const salvar = () => {
    const form = {
      nome: genero
    };

    const method = (idGenero === 0 ? 'POST' : 'PUT');
    const urlRequest = (idGenero === 0 ? 'http://localhost:5000/api/generos' : 'http://localhost:5000/api/generos/' + idGenero);
    fetch(urlRequest, {
      method: method,
      body: JSON.stringify(form),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(() => {
        alert('Gênero cadastrado');
        setIdGenero(0);
        setGenero('');
        listar();
      })
      .catch(err => console.error(err));
  }


  return (
    <div className="Genero">
      <Header description="Cadastre os Generos dos filmes" />
      <div className="centro">
        <div className="genero">

          <h1>Gêneros</h1>
          <div className="div-image">
            <img src={mascaras} alt="máscaras" />
          </div>
          <section>
            <h2>Lista de Gêneros</h2>
            <table>
              <tbody id="tbody">
                
                {generos.map((item:any) =>
                  <tr key={item.idGenero}>
                    <td>{item.nome}</td>
                    <td>
                      <img src={atualizar} onClick={() => refresh(item.idGenero)} alt="atualizar"/>
                      <img src={lixeira} onClick={() => trash(item.idGenero)} alt="deletar"/>
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
                <Input id="gen"name="genero" label="Cadastrar gênero" value={genero} onChange={e => setGenero(e.target.value)} />
              </div>
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

export default Genero;