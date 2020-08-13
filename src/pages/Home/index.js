import React, { useEffect, useState } from 'react';

// Components
import Layout from '../../components/Layout';

// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';

import ProgressLinear from '../../components/ProgressLinear';


function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  // const IdCategorieMain = Math.floor(Math.random() * (dadosIniciais.length));


  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (

    <Layout showButtonNewVideo showFooter>

      {dadosIniciais.length === 0 && (<ProgressLinear />)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    </Layout>

  );
}

export default Home;
