import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Product from './pages/Product';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <Product />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
