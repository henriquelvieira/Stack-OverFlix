import React, { useEffect, useState } from 'react';

// Components
import Layout from '../../components/Layout';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import ProgressLinear from '../../components/ProgressLinear';

import useReload from '../../hooks/useReload';
import useAlert from '../../hooks/useAlert';
import useServerState from '../../hooks/useServerState';

import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  const [loading, setLoading] = useState(true);
  const { reload, setReaload } = useReload();

  const { serverState, setServerState } = useServerState();
  const { setAlertOpen, Alert } = useAlert(serverState);

  const handleServerResponse = (ok, msg) => {
    setAlertOpen(true);
    setServerState({ ok, msg });
  };

  function BannerRandom(vArray) {
    const IdCategorieMain = Math.floor(Math.random() * (vArray.length));

    const bannerMain = vArray.map((categoria, indice) => {
      if (indice === IdCategorieMain) {
        return (
          <div key={categoria.id}>
            <BannerMain
              videoTitle={dadosIniciais[IdCategorieMain].videos[0].titulo}
              url={dadosIniciais[IdCategorieMain].videos[0].url}
              videoDescription={dadosIniciais[IdCategorieMain].videos[0].description}
            />
          </div>
        );
      }
    });

    return bannerMain;
  }

  useEffect(async () => {
    await categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch(() => {
        setDadosIniciais(null);
        handleServerResponse(false, 'Falha ao carregar os vídeos');
      });
    setLoading(false);
  }, [reload]);

  return (

    <Layout showButtonNewVideo showFooter>

      {serverState && <Alert msg={serverState.msg} status={serverState.ok} />}

      {loading && (<ProgressLinear />)}

      {dadosIniciais && BannerRandom(dadosIniciais)}

      {dadosIniciais && dadosIniciais.map((categoria, indice) => {
        if (dadosIniciais[indice].videos.length > 0) {
          return (

            <Carousel
              key={categoria.id}
              category={categoria}
            />

          );
        }
      })}

    </Layout>

  );
}

export default Home;
