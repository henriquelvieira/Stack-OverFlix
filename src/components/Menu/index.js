import React from 'react';

//Componentes
//import ButtonLink from './../ButtonLink';
import Button from './../Button';

 
import Logo from '../../assets/img/Logo.png';
import "./styles.css";


function Menu() {
    return (
        
        <nav className="Menu" >
           <a href="/">
               <img src={Logo} alt="Stack OverFlix" className="Logo" />
           </a>
            
           <Button as="a" href="/" className="ButtonLink">Novo video</Button>

        </nav>

    )


};

export default Menu;