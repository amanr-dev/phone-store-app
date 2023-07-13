import React, { Component } from "react";
import Title from "../Title";
import CartColumn from "./CartColumn.js";
import EmptyCart from "./EmptyCart.js";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <>
                  <Title name="your" title="cart" />
                  <CartColumn />
                  <CartList value={value} />
                  <CartTotal value={value} />
                </>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
export default Cart;
