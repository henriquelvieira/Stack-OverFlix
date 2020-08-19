import React, { useState, useEffect, Component } from 'react';
import { Link } from 'react-router-dom';

import useModal from '../../hooks/useModal';

// Components
import Layout from '../../components/Layout';
import Container from '../../components/Conteiner';

import categoriasRepository from '../../repositories/categorias';
import Button from '../../components/Button';
import ModalVerticallyCentered from '../../components/ModalVerticallyCentered';
import CadastroCategoria from '../../components/FormCadastroCategoria/index';

import './styles.css';

function Categorias() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const { modalShow, handleShow, handleHide } = useModal();
  const handleCRUD = React.createContext(false);

  useEffect(() => {
    handleHide();
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategories(categoriasFromServer);
        setLoading(false);
      });
  }, [loading]);

  const handleCloseModal = (loadingData) => {
    handleHide();
    { loadingData && setLoading(true); }
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
              {categories.map((categorie) => (
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

    </Layout>

  );
}

export default Categorias;
