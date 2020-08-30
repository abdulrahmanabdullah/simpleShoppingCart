import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { CartContext } from "../context/cart-context";

// Books Components .
function Books() {
  const books = [
    { id: 1, title: "React In Action", price: "123" },
    { id: 2, title: "Javascript is everwhere", price: "110" },
    { id: 3, title: "Javascript Desgine Pattern ", price: "101" },
    { id: 4, title: "Full stack of serveless", price: "150" },
    { id: 5, title: "Technloyge of blog", price: "50" },
    { id: 6, title: "Clean Code", price: "100" }
  ];
  return books.map((book) => (
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
        <Button onClick={() => console.log("clicked")}>
          Add to cart{" "}
        </Button>{" "}
      </Col>
    </Row>
  ));
}
// Store page view.
function Store() {
  return (
    <>
      <Container fluid="md">
        <Books />
      </Container>
    </>
  );
}

export default Store;
