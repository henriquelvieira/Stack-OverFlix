import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Componentes
// import ButtonLink from './../ButtonLink';
import Button from '../Button';

import Logo from '../../assets/img/Logo.png';
import './styles.css';

function Menu({ showButtonNewVideo }) {
  return (

    <nav className="Menu">
      <Link to="/">
        <img src={Logo} alt="Stack OverFlix" className="Logo" />
      </Link>
      {showButtonNewVideo && <Button as={Link} to="/cadastro/video" className="ButtonLink">Novo video</Button>}

    </nav>

  );
}

export default Menu;

Menu.defaultProps = {
  showButtonNewVideo: false,
};

Menu.propTypes = {
  showButtonNewVideo: PropTypes.bool,

};
