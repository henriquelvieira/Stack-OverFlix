import React, { useState } from 'react';
//import { Link } from 'react-router-dom';


//Components
import Layout from '../../components/Layout';
import Container from '../../components/Conteiner/';



function CadastroCategoria() {
    
    const [nomeCategoria, setNomeCategoria] = useState(); 
    
    
    
    return (
        
        <Layout>
            <Container>
                <h3>Cadastro da Categoria: {nomeCategoria}</h3>
            </Container>

        </Layout>

    )


};

export default CadastroCategoria;