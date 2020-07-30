import React, { useState } from 'react';
import { Link } from 'react-router-dom';


//Components
import Layout from '../../components/Layout';
import Container from '../../components/Conteiner/';
import FormField from '../../components/FormField/';



function CadastroCategoria() {
    
    const initialvalues = {
                            nome: '',
                            descricao: '',
                            cor: '',
    }

    const [categories, setCategories] = useState([]); 
    const [values, setValues]         = useState(initialvalues); 
    

    const handleInputChange = ( event )  => {
        const fieldKey = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        setValues({
                    ...values,
                    [fieldKey]: fieldValue
                 });

    }


    const handleOnSubmit = async ( event ) =>  {
        
        event.preventDefault();

        if (values.nome) {

            await setCategories([
                                    ...categories,
                                    values
                                ]);

            setValues(initialvalues);
        }

    }


    
    return (
        
        <Layout>
            <Container>
                <h3>Cadastro da Categoria: {values.nome}</h3>
                
                <form onSubmit= {handleOnSubmit}>

    
                    <FormField
                        label    = "Nome da Categoria"
                        type     = "text"
                        name     = "nome"
                        value    = {values.nome}
                        onChange = {handleInputChange}
                    />

                    <FormField
                        label    = "Descrição"
                        fieldType = "textarea"
                        type     = "text"
                        name     = "descricao"
                        value    = {values.descricao}
                        onChange = {handleInputChange}
                    />

                    <FormField
                        label    = "Cor"
                        type     = "color"
                        name     = "cor"
                        value    = {values.cor}
                        onChange = {handleInputChange}
                    />

                    <button>Cadastrar</button>



                </form>

                <ul>
                    {categories.map((categorie, index) => {
                    return (
                        <li key={`${categorie}${index}`}>{categorie.nome}</li>
                    )
                    })}
                </ul>

                <Link to="/">
                    Ir para home
                </Link>


            </Container>

        </Layout>

    )


};

export default CadastroCategoria;