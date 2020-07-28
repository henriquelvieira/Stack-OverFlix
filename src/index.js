import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CadastroVideo from './pages/CadastroVideo/index';
import CadastroCategoria from './pages/CadastroCategoria/index';


import Page404 from './pages/404/404';

import './index.css';



ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact></Route>  
      <Route path="/cadastro/video" component={CadastroVideo} exact></Route>  
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact></Route> 
      <Route component={Page404} ></Route>  
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


