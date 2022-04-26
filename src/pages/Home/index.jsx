import React from 'react';

function Home() {
  return (
    <label data-testid="home-initial-message" htmlFor="mainSearch">
      Digite algum termo de pesquisa ou escolha uma categoria.
      <input id="mainSearch" type="text" />
    </label>
  );
}

export default Home;
