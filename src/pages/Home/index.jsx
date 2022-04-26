import React from 'react';
import { Component } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';
import Categories from '../../components/Categories';
import Card from '../../components/Card';
import { getProductsFromQuery } from '../../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      valueInput: '',
    };
  }

  search = async () => {
    const { valueInput } = this.state;
    const data = await getProductsFromQuery(valueInput);
    this.setState({ products: data.results });
  };

  onInputChange = ({ target }) => {
    this.setState({ valueInput: target.value });
  };

  render() {
    const { products, valueInput } = this.state;

    return (
      <>
        <Categories />
        <div>
          <label data-testid="home-initial-message" htmlFor="mainSearch">
            Digite algum termo de pesquisa ou escolha uma categoria.
            <input
              id="mainSearch"
              type="text"
              value={ valueInput }
              onChange={ this.onInputChange }
              data-testid="query-input"
            />
          </label>
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.search }
          >
            Buscar
          </button>

          <Link to="/shopingcart" data-testid="shopping-cart-button">
            <input type="button" value="cart" />
          </Link>
        </div>
        {products.map(({ title, price, thumbnail }, key) => (
          <Card key={ key } title={ title } price={ price } image={ thumbnail } />
        ))}
      </>
    );
  }
}

export default Home;
