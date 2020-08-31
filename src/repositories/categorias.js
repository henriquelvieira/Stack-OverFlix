import config from '../config';
import api from '../services/api';

const URL_CATEGORIES = `${config.URL_API}/categorias`;

async function create(objetoDoVideo) {
  await api.post(`${URL_CATEGORIES}`, objetoDoVideo)
    .then(async (response) => {
      const vStatusRetorno = JSON.stringify(response.status, null, 2);

      if (vStatusRetorno === '201') {
        const resposta = await response.data;
        return resposta;
      }
    })
    .catch((error) => {
      return error.response.data.error;
    });
}

function getAll() {
  return api.get(`${URL_CATEGORIES}`).then((response) => {
    const vStatusRetorno = JSON.stringify(response.status, null, 2);
    if (vStatusRetorno === '200') {
      const resposta = response.data;
      return resposta;
    }
  }).catch((error) => {
    return error.response.data.error;
  });
}

async function getAllWithVideos() {
  return api.get(`${URL_CATEGORIES}?_embed=videos`).then(async (response) => {
    const vStatusRetorno = JSON.stringify(response.status, null, 2);
    if (vStatusRetorno === '200') {
      const resposta = await response.data;
      return resposta;
    }
  }).catch((error) => {
    return error.response.data.error;
  });
}

export default {
  create,
  getAllWithVideos,
  getAll,
};
