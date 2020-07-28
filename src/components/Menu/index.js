import React from 'react';
import { Link } from 'react-router-dom';


//Componentes
//import ButtonLink from './../ButtonLink';
import Button from './../Button';


import Logo from '../../assets/img/Logo.png';
import "./styles.css";


function Menu() {
    return (
        
        <nav className="Menu" >
           <Link to="/">
               <img src={Logo} alt="Stack OverFlix" className="Logo" />
           </Link>
            
           <Button as={Link} to="/cadastro/video" className="ButtonLink">Novo video</Button>

        </nav>

    )


};

export default Menu;