import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import FormField from '../FormField';

import useForm from '../../hooks/useForm';
import useAlert from '../../hooks/useAlert';
import useServerState from '../../hooks/useServerState';
import Sleep from '../../hooks/Sleep';

import categoriasRepository from '../../repositories/categorias';

function FormCadastroCategoria({ handleClose }) {
  const initialvalues = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { handleInputChange, clearForm, values } = useForm(initialvalues);
  const [categories, setCategories] = useState([]);
  const { serverState, setServerState } = useServerState();
  const { setAlertOpen, Alert } = useAlert(serverState);


  const handleServerResponse = (ok, msg) => {
    setAlertOpen(true);
    setServerState({ ok, msg });
  };

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
        .then(async () => {
          handleServerResponse(true, 'Categoria cadastrada com sucesso!');
          await Sleep(1000);
          handleClose(true);
          clearForm();
        })
        .catch((err) => {
          handleServerResponse(false, 'Falha ao Cadastrar a Categoria');
        });
    }
  };

  return (

    <>

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

        <button type="submit" className="ModalButton">
          Cadastrar
        </button>
        <button type="button" className="ModalButton" onClick={() => handleClose(false)}>Cancelar</button>

        {serverState && <Alert msg={serverState.msg} status={serverState.ok} />}

      </form>

    </>

  );
}

FormCadastroCategoria.propTypes = {
  handleClose: PropTypes.func.isRequired,

};

export default FormCadastroCategoria;
