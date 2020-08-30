import React from "react";
import Header from "../components/Header";
import Cart from "../components/Cart";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Basket from "./Basket";
import CartProvider from "../context/cart-context";
export default class Home extends React.Component {
  render() {
    return (
      <>
        <CartProvider>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route path="/" exact component={Cart} />
              <Route path="/basket" exact component={Basket} />
            </Switch>
          </BrowserRouter>
        </CartProvider>
      </>
    );
  }
}
