import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Components
import Layout from '../../components/Layout';
import Container from '../../components/Conteiner';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

import useForm from '../../hooks/useForm';

function CadastroCategoria() {
  const initialvalues = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { values, handleInputChange, clearForm } = useForm(initialvalues);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'https://api-fake-json-server.herokuapp.com/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            await setCategories(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    if (values.nome) {
      await setCategories([
        ...categories,
        values,
      ]);

      clearForm();
    }
  };

  return (

    <Layout>
      <Container>
        <h3>
          Cadastro da Categoria:
          {values.nome}
        </h3>

        <form onSubmit={handleOnSubmit}>

          <FormField
            label="Nome da Categoria"
            type="text"
            name="titulo"
            value={values.titulo}
            onChange={handleInputChange}
          />

          <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleInputChange}
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleInputChange}
          />

          <Button>Cadastrar</Button>

        </form>

        <ul>
          {categories.map((categorie) => (
            <li key={`id_${categorie.id}`}>{categorie.titulo}</li>
          ))}
        </ul>

        <Link to="/">
          Ir para home
        </Link>

      </Container>

    </Layout>

  );
}

export default CadastroCategoria;
