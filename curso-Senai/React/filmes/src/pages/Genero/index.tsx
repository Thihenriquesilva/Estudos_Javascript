import React,{useState, useEffect} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/style/global.css'
import './style.css'

function Genero() {
    const [genero, setGenero] = useState('');
    const [idGenero, setIdGenero] = useState(0);
    const [generos, setGeneros] = useState([]);

    // useEffect(()=>{
    //   listar();  
    // },[])
  return (
    <div className="Genero">
      <Header description="Cadastre os Generos"/>
      <div className="centro">
        <div className="perfil">
          <h1>Generos</h1>
          
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Genero;