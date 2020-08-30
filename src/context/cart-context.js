import React from "react";

// البيانات التي يتم تمريرها الى جميع العناصر
export const CartContext = React.createContext();

export default class CartProvider extends React.Component {
  constructor(props) {
    super(props);
    this.addBookToCart = this.addBookToCart.bind(this);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }
  state = {
    books: [
      { id: 1, title: "React In Action", price: "123", quan: 1 },
      { id: 2, title: "Javascript is everwhere", price: "110", quan: 1 },
      { id: 3, title: "Javascript Desgine Pattern ", price: "101", quan: 1 },
      { id: 4, title: "Full stack of serveless", price: "150", quan: 1 },
      { id: 5, title: "Technloyge of blog", price: "50", quan: 1 },
      { id: 6, title: "Clean Code", price: "100", quan: 1 }
    ],
    carts: [],
    itemsCount: 0,
    total: 0,
    totalPayment: 0
  };

  increase(id) {
    this.state.carts[this.state.carts.findIndex((item) => item.id === id)]
      .quan++;
    let Bookprice = this.state.carts[
      this.state.carts.findIndex((item) => item.id === id)
    ].price;
    let price =
      this.state.carts[this.state.carts.findIndex((item) => item.id === id)]
        .quan * Bookprice;
    let Price = this.state.carts.reduce(
      (total, book) => total + book.price * book.quan,
      0
    );
    this.setState({
      carts: [...this.state.carts],
      total: this.state.carts.length,
      totalPayment: Price
    });
  }

  decrease(id) {
    this.state.carts[this.state.carts.findIndex((item) => item.id === id)]
      .quan--;
    this.setState({ carts: [...this.state.carts] });
  }
  addBookToCart(book) {
    this.state.carts.push(book);
    let Price = this.state.carts.reduce(
      (total, book) => total + book.price * book.quan,
      0
    );
    this.setState({
      carts: [...this.state.carts],
      itemsCount: this.state.carts.length,
      total: this.state.carts.length,
      totalPayment: Price
    });
  }

  removeBookFromCart() {}
  render() {
    return (
      <CartContext.Provider
        value={{
          ...this.state,
          addBookToCart: this.addBookToCart,
          increase: this.increase,
          decrease: this.decrease
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
