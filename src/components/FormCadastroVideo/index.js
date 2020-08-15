import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import useModal from '../../hooks/useModal';
import useForm from '../../hooks/useForm';

import FormField from '../FormField';
import Button from '../Button';

import videosRepository from '../../repositories/videos';
import categoriasRepository from '../../repositories/categorias';

// Libs p/ Formulário
import validaForm from './validation';

function FormCadastroVideo() {
  const initialvalues = {
    titulo: '',
    url: '',
    categoria: '',
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

    <>
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

        <button type="submit" className="ModalButton">
          Cadastrar
        </button>

      </form>

      <br />
      <br />

      <Link to="/categorias">
        Cadastrar Categoria
      </Link>

    </>

  );
}

export default FormCadastroVideo;
