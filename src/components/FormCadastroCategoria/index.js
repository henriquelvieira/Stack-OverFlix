import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Components
import FormField from '../FormField';

import useForm from '../../hooks/useForm';

import categoriasRepository from '../../repositories/categorias';

function FormCadastroCategoria() {
  const initialvalues = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const history = useHistory();
  const { handleInputChange, clearForm, values } = useForm(initialvalues);

  const [categories, setCategories] = useState([]);

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

      </form>

    </>

  );
}

export default FormCadastroCategoria;
