import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer'

function Home() {
  return (
    <div>
        <Header/>
        <br/><br/>
        <h1>Ola sou a página <em>Home</em>, tudo bem com você?</h1>
        <br/><br/>
        <Footer/>
    </div>
  );
}

export default Home;