import React from 'react';
import { Link } from 'react-router-dom';

//Components
import Layout from '../../components/Layout';
import Container from '../../components/Conteiner/';
//import { ContentAreaContainer } from '../../components/ContentAreaContainer';



function CadastroVideo() {
    return (
        
        <Layout>
            <Container>

                <h2>Cadastro de Video</h2>
                
                <Link to="/cadastro/categoria">
                    Cadastar Categoria
                </Link>

            </Container>
        </Layout>

    )


};

export default CadastroVideo;