import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

// Components
import Layout from '../../components/Layout';
import Container from '../../components/Conteiner';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

import useForm from '../../hooks/useForm';

import categoriasRepository from '../../repositories/categorias';

function CadastroCategoria() {
  const initialvalues = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const history = useHistory();
  const { handleInputChange, clearForm, values } = useForm(initialvalues);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategories(categoriasFromServer);
      });
  }, []);

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    if (values.titulo) {
      await setCategories([
        ...categories,
        values,
      ]);

      categoriasRepository.create({
        titulo: values.titulo,
        descricao: values.descricao,
        cor: values.cor,
      })
        .then(() => {
          console.log('Cadastrou com sucesso!');
          history.push('/');
        });

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

      </Container>

    </Layout>

  );
}

export default CadastroCategoria;
