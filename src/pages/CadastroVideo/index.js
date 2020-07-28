import React from 'react';
import { Link } from 'react-router-dom';

//Components
import Layout from '../../components/Layout';
//import { ContentAreaContainer } from '../../components/ContentAreaContainer';



function CadastroVideo() {
    return (
        
        <Layout>
            <h2>Cadastro de Video</h2>
            
            <Link to="/cadastro/categoria">
                Cadastar Categoria
            </Link>


        </Layout>

    )


};

export default CadastroVideo;