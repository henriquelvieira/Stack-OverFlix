import React from 'react';

import Modal from 'react-bootstrap/Modal';

// import Button from 'react-bootstrap/Button';

import './styles.css';

function ModalVerticallyCentered(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="Modal"
    >
      <Modal.Header
        closeButton
        className="Modal"
      >
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="Modal"
        >
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="Modal">
        {props.children}
      </Modal.Body>
      {props.showFooter
      && (
      <Modal.Footer className="Modal">
        <button
          type="button"
          onClick={props.onHide}
          className="ModalButton"
        >
          Fechar
        </button>
      </Modal.Footer>
      )}
    </Modal>
  );
}


ModalVerticallyCentered.defaultProps = {
  showFooter: true,
};

export default ModalVerticallyCentered;
