import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data";
import { ProductConsumer } from "../context";

export default class ProductsList extends Component {
  state = {
    product: storeProducts,
  };
  render() {
    // console.log(this.state.products);
    return (
      <>
        <div className="py-5">
          <div className="container">
            <Title name="Our" title="products" />

            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.product.map((pro) => {
                    return <Product key={pro.id} product={pro} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </>
    );
  }
}
