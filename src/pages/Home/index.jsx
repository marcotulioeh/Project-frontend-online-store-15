import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../../components/Categories';
import { getProductsFromCategory } from '../../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      productsList: [],
    };
  }

  categorieClickHandler = async ({ target }) => {
    const data = await getProductsFromCategory(target.id);
    this.setState({ productsList: data.results });
  };

  render() {
    return (
      <>
        <Categories />
        <div>
          <label data-testid="home-initial-message" htmlFor="mainSearch">
            Digite algum termo de pesquisa ou escolha uma categoria.
            <input id="mainSearch" type="text" />
          </label>

          <Link to="/shopingcart" data-testid="shopping-cart-button">
            <input type="button" value="cart" />
          </Link>
        </div>
      </>
    );
  }
}

export default Home;
