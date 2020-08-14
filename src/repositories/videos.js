import config from '../config';
import api from '../services/api';

const URL_VIDEOS = `${config.URL_API}/videos`;

async function create(objetoDoVideo) {
  await api.post(`${URL_VIDEOS}`, objetoDoVideo)
    .then(async (response) => {
      const vStatusRetorno = JSON.stringify(response.status, null, 2);

      if (vStatusRetorno === '200') {
        const resposta = await response.data;
        return resposta;
      }
    })
    .catch((error) => {
      console.log(error);
    });

}

export default {
  create,
};
