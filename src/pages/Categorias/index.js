import React, { useState, useEffect } from 'react';
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
  const [categories, setCategories] = useState([]);
  const { modalShow, handleShow, handleHide } = useModal();

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategories(categoriasFromServer);
      });
  }, []);

  return (

    <Layout>
      <Container>
        <h3>Categorias:</h3>
        <br />

        <table className="table table-hover table-dark tableDark">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Nome</th>
              <th scope="col">Descrição</th>
              <th scope="col">Editar</th>
              <th scope="col">Remover</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((categorie) => (
              <tr>
                <th key={`id_${categorie.id}`} scope="row">{categorie.id}</th>
                <td>{categorie.titulo}</td>
                <td>{categorie.descricao}</td>
                <td />
                <td />
              </tr>
            ))}
          </tbody>
        </table>

        <Button
          as={Link}
          className="ButtonLink"
          onClick={() => handleShow()}
        >
          Nova Categoria
        </Button>

        <ModalVerticallyCentered
          show={modalShow}
          title="Cadastro de Categoria"
          onHide={() => handleHide()}
          showFooter={false}
        >
          <CadastroCategoria />

        </ModalVerticallyCentered>

      </Container>

    </Layout>

  );
}

export default Categorias;
