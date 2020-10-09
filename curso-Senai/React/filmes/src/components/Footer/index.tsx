import React from 'react';
import '../../assets/style/global.css';
import '../../assets/style/normalize.css';
import '../Footer/style.css';
import logoNegativo from '../../assets/images/logonegativo.png';

function Footer(){
    return (
      <div className="principal">
         <div className="footer">
            <div className="image-films">
                <img src={logoNegativo} alt="Logo Filmes Collection Negativo"/>
            </div>
            <hr/>
            <div className="info-contact">
                <p>Company Inc., 8901 Marmora Road, Glasgow, D04 89GR</p>
                <p>Call us now toll free: (800)2345-6789</p>
                <p>Customer support: support@demolink.org</p>
                <p>Skype: sample-username</p>
            </div>
         </div>
      </div>
    );
  }
  
  export default Footer;