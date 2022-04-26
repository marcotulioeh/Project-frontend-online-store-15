import React from 'react';
import { Component } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';
import Categories from '../../components/Categories';

class Home extends Component {
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
