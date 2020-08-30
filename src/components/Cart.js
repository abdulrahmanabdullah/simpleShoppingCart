import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { CartContext } from "../context/cart-context";

function Books() {
  return (
    <CartContext.Consumer>
      {(context) => {
        console.log(context);
        return context.books.map((book, index) => (
          <Row style={{ margin: "5px" }} key={book.id}>
            <Col>{book.title} </Col>
            <Col>
              <Row direction="column">
                <Col xs={12} md={12}>
                  Price
                </Col>
                <Col xs={12} md={12}>
                  {book.price}
                </Col>
              </Row>
            </Col>
            <Col>
              {" "}
              <Button onClick={() => context.addBookToCart(book)}>
                {" "}
                Add to cart{" "}
              </Button>{" "}
            </Col>
          </Row>
        ));
      }}
    </CartContext.Consumer>
  );
}
function Cart() {
  return (
    <>
      <Container fluid="md">
        <Books />
      </Container>
    </>
  );
}

export default Cart;
