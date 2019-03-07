import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import Product from './pages/product';
export default class Routes extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* Criando rotas para a navegação */}
          <Route
            exact={true}
            path="/"
            component={Main}
          />
          <Route
            path="/products/:id"
            component={Product}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}