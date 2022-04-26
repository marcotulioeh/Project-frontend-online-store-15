import React from 'react';
import { Component } from 'react/cjs/react.development';
import Categories from '../../components/Categories';

class Home extends Component {
  render() {
    return (
      <>
        <Categories />
        <label data-testid="home-initial-message" htmlFor="mainSearch">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input id="mainSearch" type="text" />
        </label>
      </>
    );
  }
}

export default Home;
