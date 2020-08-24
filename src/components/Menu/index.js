import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import useModal from '../../hooks/useModal';
import useReload from '../../hooks/useReload';

// Componentes
import Button from '../Button';
import ModalVerticallyCentered from '../ModalVerticallyCentered';
import CadastroVideo from '../FormCadastroVideo/index';
import Logo from '../../assets/img/Logo.png';
import './styles.css';

function Menu({ showButtonNewVideo }) {
  const { modalShow, handleShow, handleHide } = useModal();
  const { reload, setReload } = useReload();

  const handleCloseModal = (loadingData) => {
    handleHide();
    setReload(true);
    alert('aqui ' + reload);
    // { loadingData && setReaload(true) }
  };

  return (

    <nav className="Menu">
      <Link to="/">
        <img src={Logo} alt="Stack OverFlix" className="Logo" />
      </Link>

      {showButtonNewVideo && (
      <Button
        as={Link}
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
        showFooter={false}
      >
        <CadastroVideo handleClose={handleCloseModal} />

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
