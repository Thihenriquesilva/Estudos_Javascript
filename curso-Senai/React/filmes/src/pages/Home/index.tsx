import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import filmes from '../../assets/images/cinema.png';
import mascaras from '../../assets/images/theater.png';
import '../../assets/style/global.css';
import '../Home/style.css';

function Home() {
  return (
    <div>
      {/* description= props criada dentro de HEADER*/}
        <Header description="Conheça nossa Coletanea"/>
       <div className="centro">
        <div className="home">
          <h2 id="title">Monte sua coletânea de filmes...</h2>

          <div className="div-principal">
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</h4>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="descricoes">
            <div className="div-container">
              <div className="div-image">
                <img src={filmes} alt="Imagem de Carretel" />
              </div>
              <h3>Filmes</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="div-container">
              <div className="div-image">
                <img src={mascaras} alt="Imagem de Máscaras" />
              </div>
              <h3>Gênero</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
       </div>
        <Footer/>
    </div>
  );
}

export default Home;