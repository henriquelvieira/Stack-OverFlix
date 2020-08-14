import { useState } from 'react';

function useModal() {
  const [modalShow, setModalShow] = useState(false);

  const handleShow = () => {
    setModalShow(true);
  };

  const handleHide = () => {
    setModalShow(false);
  };

  return {
    modalShow,
    handleShow,
    handleHide,
  };
}

export default useModal;
