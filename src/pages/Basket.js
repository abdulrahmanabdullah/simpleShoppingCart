import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { CartContext } from "../context/cart-context";

function CartItem() {
  return (
    <CartContext.Consumer>
      {(context) => {
        const { carts } = context;
        return context.carts.length > 0 ? (
          carts.map((cart) => (
            <>
              <Row style={{ margin: "5px" }} key={cart.id}>
                <Col xs={4} md={4}>
                  {cart.title}
                </Col>
                <Col xs={4} md={4}>
                  {cart.quan}
                </Col>
                <Col xs={4} md={4}>
                  {/* Buttons */}
                  <Row>
                    <Col xs={3} md={4}>
                      <Button onClick={() => context.increase(cart.id)}>
                        +
                      </Button>
                    </Col>
                    <Col xs={3} md={4}>
                      <Button
                        variant="danger"
                        onClick={() => context.decrease(cart.id)}
                      >
                        -
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Card
                style={{
                  width: "18rem",
                  padding: "10px",
                  margin: "30px auto "
                }}
                className="mb-2"
              >
                <Card.Body>
                  <Card.Title> Total Books: {context.total} </Card.Title>
                  <Card.Text>Total Payment: {context.totalPayment} </Card.Text>
                  <Button style={{ margin: "5px" }}> Checkout</Button>
                  <Button variant="light"> clear</Button>
                </Card.Body>
              </Card>
            </>
          ))
        ) : (
          <h1>Your cart is empty </h1>
        );
      }}
    </CartContext.Consumer>
  );
  // return fakeArray.map((product) => (
  //   <Row style={{ margin: "5px" }}>
  //     <Col xs={4} md={4}>
  //       item Title
  //     </Col>
  //     <Col xs={4} md={4}>
  //       Quotity
  //     </Col>
  //     <Col xs={4} md={4}>
  //       {/* Buttons */}
  //       <Row>
  //         <Col xs={3} md={4}>
  //           <Button>+</Button>
  //         </Col>
  //         <Col xs={3} md={4}>
  //           <Button variant="danger">-</Button>
  //         </Col>
  //       </Row>
  //     </Col>
  //   </Row>
  // ));
}
export default function Basket() {
  return (
    <>
      <Container fluid="md">
        <Row>
          <Col>
            <h1>Basket </h1>
          </Col>
        </Row>
        {/* items */}
        <CartItem />
        {/* Summery order */}
      </Container>
    </>
  );
}
