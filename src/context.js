import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
class ProductProvider extends Component {
  state = {
    product: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  componentDidMount() {
    this.setProduct();
  }

  setProduct = () => {
    let producuts = [];
    storeProducts.forEach((item) => {
      const singleItems = { ...item };
      producuts = [...producuts, singleItems];
    });
    this.setState(() => {
      return { product: producuts };
    });
  };

  getItem = (id) => {
    const getProduct = this.state.product.find((item) => item.id === id);

    return getProduct;
  };

  handleDetail = (id) => {
    const gotProduct = this.getItem(id);
    this.setState(() => {
      return {
        detailProduct: gotProduct,
      };
    });
  };

  addToCart = (id) => {
    let tempProduct = [...this.state.product];

    const index = tempProduct.indexOf(this.getItem(id));

    const inCartProduct = tempProduct[index];
    inCartProduct.inCart = true;
    inCartProduct.count = 1;
    const price = inCartProduct.price;
    inCartProduct.total = price;

    this.setState(
      () => {
        return {
          product: tempProduct,
          cart: [...this.state.cart, inCartProduct],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  openModal = (id) => {
    const modalItem = this.getItem(id);
    this.setState(() => {
      return { modalProduct: modalItem, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  increment = (id) => {
    let tempCart = [...this.state.cart];
    const incProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(incProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const incProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(incProduct);
    const product = tempCart[index];

    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;

      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  removeItem = (id) => {
    let tempProduct = [...this.state.product];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter((item) => item.id !== id);

    const index = tempProduct.indexOf(this.getItem(id));
    let removeProduct = tempProduct[index];
    removeProduct.inCart = false;
    removeProduct.count = 0;
    removeProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          product: [...tempProduct],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProduct();
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.18;
    const tax = parseFloat(tempTax.toFixed(2));
    let total = subTotal + tax;
    total = total.toFixed(2);

    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          cart: this.state.cart,
          addToCart: this.addToCart,
          handleDetail: this.handleDetail,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
