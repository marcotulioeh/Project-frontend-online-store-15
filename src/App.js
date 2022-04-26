import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ShopingCart from './pages/ShopingCart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/shopingcart" component={ ShopingCart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
