import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';


export default class Main extends Component {
  // Estado sempre é um objeto
  state = {
    products: [],
    productsInfo: {},
    page: 1,
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const { docs, ...productsInfo } = response.data;
    // Passar um objeto com as propriedades do objeto 
    this.setState({ products: docs, productsInfo, page });
  };
  prevPage = () => {
    const { page, productsInfo } = this.state;
    if (page === 1) return;
    const pageNumber = page - 1;
  };
  nextPage = () => {
    const { page, productsInfo } = this.state;
    if (page === productsInfo.pages) return;
    const pageNumber = page + 1;
    this.loadProducts(pageNumber);
  };

  // Listar os produtos da aplicação
  render() {
    // ele busca o products do this
    const { products, page, productsInfo } = this.state;
    return (
      <div className="produto-lista">
        {products.map(product => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>

            <a href="#">Acessar</a>
          </article>
        ))}
        <div className="actions">
          <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
          <button disabled={page === productsInfo.pages} onClick={this.nextPage}>Próximo</button>
        </div>
      </div>
    );
  }
}
