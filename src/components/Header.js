import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartProvider, { CartContext } from "../context/cart-context";
export default class Header extends React.Component {
  render() {
    return (
      <CartContext.Consumer>
        {(context) => {
          const { itemsCount } = context;
          return (
            <header>
              <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link>
                    <Link to="/"> Store</Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link to="/basket"> basket {itemsCount} </Link>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </header>
          );
        }}
      </CartContext.Consumer>
    );
  }
}
