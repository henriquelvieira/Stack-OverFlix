import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Custom Hooks
import useModal from '../../hooks/useModal';
import useAlert from '../../hooks/useAlert';
import useServerState from '../../hooks/useServerState';

// Components
import Layout from '../../components/Layout';
import Container from '../../components/Conteiner';
import Button from '../../components/Button';
import ModalVerticallyCentered from '../../components/ModalVerticallyCentered';
import CadastroCategoria from '../../components/FormCadastroCategoria/index';

import categoriasRepository from '../../repositories/categorias';

import './styles.css';

function Categorias() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const { modalShow, handleShow, handleHide } = useModal();
  const handleCRUD = React.createContext(false);

  const { serverState, setServerState } = useServerState();
  const { setAlertOpen, Alert } = useAlert(serverState);

  const handleServerResponse = (ok, msg) => {
    setAlertOpen(true);
    setServerState({ ok, msg });
  };

  useEffect(async () => {
    handleHide();
    await categoriasRepository.getAll()
      .then((categoriasFromServer) => {
        setCategories(categoriasFromServer);
        setLoading(false);
      })
      .catch(() => {
        setCategories(null);
        handleServerResponse(false, 'Falha ao carregar as Categorias');
      });
  }, [loading]);

  const handleCloseModal = (loadingData) => {
    handleHide();
    if (loadingData) {
      setLoading(true);
    }
  };

  return (

    <Layout>

      <Container>
        <h3>Categorias:</h3>
        <br />

        <Button
          as={Link}
          className="ButtonLink"
          onClick={() => handleShow()}
        >
          Nova Categoria
        </Button>

        <div className="table-responsive">

          <table className="table table-hover table-dark tableDark">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Nome</th>
                <th scope="col">Descrição</th>
                <th scope="col">Opções</th>
              </tr>
            </thead>
            <tbody>
              {categories && categories.map((categorie) => (
                <tr>
                  <th key={`id_${categorie.id}`} scope="row">{categorie.id}</th>
                  <td>{categorie.titulo}</td>
                  <td>{categorie.descricao}</td>
                  <td />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <handleCRUD.Provider value={modalShow}>

          <ModalVerticallyCentered
            show={modalShow}
            title="Cadastro de Categoria"
            onHide={() => handleHide()}
            showFooter={false}
          >

            <CadastroCategoria handleClose={handleCloseModal} />

          </ModalVerticallyCentered>
        </handleCRUD.Provider>

      </Container>

      {serverState && <Alert msg={serverState.msg} status={serverState.ok} />}

    </Layout>

  );
}

export default Categorias;
