import React, { Component } from "react";

export default class CartColumn extends Component {
  render() {
    return (
      <div className="container-fluid text-center d-none d-lg-block">
        <div className="row">
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">products</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">Name of Product</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">price</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">quantity</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">remove item</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">total price</p>
          </div>
        </div>
      </div>
    );
  }
}
