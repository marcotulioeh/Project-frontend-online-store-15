import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/shopingcart" component={ ShoppingCart } />
        <Route path="/product/:id" component={ ProductPage } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
