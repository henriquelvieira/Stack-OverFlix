import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import useForm from '../../hooks/useForm';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import videosRepository from '../../repositories/videos';
import categoriasRepository from '../../repositories/categorias';

// Components
import Layout from '../../components/Layout';
import Container from '../../components/Conteiner';
// import { ContentAreaContainer } from '../../components/ContentAreaContainer';

function CadastroVideo() {
  const initialvalues = {
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
    categoria: 'Front End',
  };

  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleInputChange, clearForm, values } = useForm(initialvalues);

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

    if (values.titulo) {
      videosRepository.create({
        titulo: values.titulo,
        url: values.url,
        categoriaId: categoriaEscolhida.id,
      })
        .then(() => {
          console.log('Cadastrou com sucesso!');
          history.push('/');
        });

      clearForm();
    }
  };

  return (

    <Layout showButtonNewVideo={false}>
      <Container>

        <h2>Cadastro de Video</h2>

        <form onSubmit={handleOnSubmit}>

          <FormField
            label="Título do Vídeo"
            name="titulo"
            value={values.titulo}
            onChange={handleInputChange}
          />

          <FormField
            label="URL"
            name="url"
            value={values.url}
            onChange={handleInputChange}
          />

          <FormField
            label="Categoria"
            name="categoria"
            value={values.categoria}
            onChange={handleInputChange}
            suggestions={categoryTitles}
          />

          <Button type="submit">
            Cadastrar
          </Button>
        </form>

        <br />
        <br />

        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>

      </Container>
    </Layout>

  );
}

export default CadastroVideo;
