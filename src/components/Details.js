import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, company, img, info, price, title, inCart } =
            value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-steel-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img src={img} alt="product-img" className="img-fluid" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h4>modal:- {title}</h4>
                  <h3 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by : <span className="text-uppercase">{company}</span>
                  </h3>
                  <h4 className="text-steel-blue">
                    <strong>
                      price : <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    about project
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <div className="d-flex">
                    <Link to="/">
                      <ButtonContainer>
                        back
                        <i className="fas fa-arrow-right fs-5" />
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer
                      className="btn button"
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? (
                        <>
                          <span className="fs-5 ">added to</span>
                          <i className="fa-solid fa-cart-plus fs-4"></i>
                        </>
                      ) : (
                        <>
                          <span className="fs-5">add to</span>
                          <i className="fa-solid fa-cart-plus fs-4"></i>
                        </>
                      )}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
