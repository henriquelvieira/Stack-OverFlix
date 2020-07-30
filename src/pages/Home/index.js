import React from 'react';

//Components
import Layout from '../../components/Layout';


import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';



function Categories (){
  
  let vArrayCategories = dadosIniciais;

  return vArrayCategories.categorias.map(Categorie => {  
    let vCategorie =  <Carousel  category={Categorie} />;

    return vCategorie;

  });

}


function Home() {
  
  let IdCategorieMain = Math.floor(Math.random() * (dadosIniciais.categorias.length ));
  
  
  return (
    
    <Layout>
    
          <BannerMain 
            videoTitle={dadosIniciais.categorias[IdCategorieMain].videos[0].titulo}
            url={dadosIniciais.categorias[IdCategorieMain].videos[0].url}
            videoDescription={"O que é Front-end"}
          />
        
          {Categories ()}


      </Layout>
      
  );
}

export default Home;