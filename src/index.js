import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Categorias from './pages/Categorias/index';
import CadastroVideo from './pages/CadastroVideo/index';
import CadastroCategoria from './pages/CadastroCategoria/index';

import 'bootstrap/dist/css/bootstrap.min.css';

import Page404 from './pages/404/404';

import './index.css';

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/categorias" component={Categorias} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
