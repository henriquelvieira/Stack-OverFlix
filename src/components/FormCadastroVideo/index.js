import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import useForm from '../../hooks/useForm';
import useAlert from '../../hooks/useAlert';
import useServerState from '../../hooks/useServerState';

import FormField from '../FormField';

import videosRepository from '../../repositories/videos';
import categoriasRepository from '../../repositories/categorias';

// Libs p/ Formulário
import validaForm from './validation';

function FormCadastroVideo({ handleClose }) {
  const initialvalues = {
    titulo: '',
    url: '',
    categoria: '',
  };

  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleInputChange, clearForm, values } = useForm(initialvalues);
  const { serverState, setServerState } = useServerState();
  const { setAlertOpen, Alert } = useAlert(serverState);

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
          handleClose(true);
          console.log('Cadastrou com sucesso!');
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
        <button type="button" className="ModalButton" onClick={() => handleClose(true)}>Cancelar</button>
        {serverState && <Alert />}

      </form>

      <br />
      <br />

      <Link to="/categorias">
        Cadastrar Categoria
      </Link>

    </>

  );
}

FormCadastroVideo.propTypes = {
  handleClose: PropTypes.func.isRequired,

};

export default FormCadastroVideo;
