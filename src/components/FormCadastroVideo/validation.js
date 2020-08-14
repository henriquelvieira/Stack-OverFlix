// Libs p/ Formulário
import * as yup from 'yup';

const validaForm = yup.object().shape({
  titulo: yup.string()
    .required('Informe o titulo do video'),
  url: yup.string()
    .required('Informe a URL do video'),
  categoria: yup.string()
    .required('Informe a URL do video'),
});

export default validaForm;
