import React, { useState } from 'react';
//import { Link } from 'react-router-dom';


//Components
import Layout from '../../components/Layout';
import Container from '../../components/Conteiner/';



function CadastroCategoria() {
    
    const initialvalues = {
        name: ''
    }

    const [categories, setCategories] = useState(); 
    const [values, setValues] = useState(initialvalues); 
    
    
    
    return (
        
        <Layout>
            <Container>
                <h3>Cadastro da Categoria: {values.name}</h3>
            </Container>

        </Layout>

    )


};

export default CadastroCategoria;