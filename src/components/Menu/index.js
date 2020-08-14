import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import useModal from '../../hooks/useModal';

// Componentes
import Button from '../Button';
import ModalVerticallyCentered from '../ModalVerticallyCentered';
import CadastroVideo from '../FormCadastroVideo/index';
import Logo from '../../assets/img/Logo.png';
import './styles.css';

function Menu({ showButtonNewVideo }) {
  const { modalShow, handleShow, handleHide } = useModal();

  return (

    <nav className="Menu">
      <Link to="/">
        <img src={Logo} alt="Stack OverFlix" className="Logo" />
      </Link>
      {/* showButtonNewVideo && <Button as={Link} to="/cadastro/video" className="ButtonLink">Novo video</Button> */}

      {showButtonNewVideo && (
      <Button
        as={Link}
        // to="/cadastro/video"
        className="ButtonLink"
        onClick={() => handleShow()}
      >
        Novo video
      </Button>
      )}

      <ModalVerticallyCentered
        show={modalShow}
        title="Cadastro de Video"
        onHide={() => handleHide()}
        showFooter = {false}
      >
        <CadastroVideo />

      </ModalVerticallyCentered>

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
