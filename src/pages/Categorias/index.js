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

        <table>
          <thead>
            <tr>
              <td>Nome</td>
              <td>Descrição</td>
              <td>Editar</td>
              <td>Remover</td>
            </tr>
          </thead>
          <tbody>
            {categories.map((categorie) => (
              <tr>
                <td key={`id_${categorie.id}`}>{categorie.titulo}</td>
                <td>{categorie.descricao}</td>
                <td />
                <td />
                <td />
              </tr>
            ))}
          </tbody>
        </table>

        <Link to="/">
          Ir para home
        </Link>

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
