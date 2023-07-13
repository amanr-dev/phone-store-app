import React, { Component } from "react";
import { styled } from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize"
                    >
                      <h5 className="mt-2 mb-0 text-steel-blue">
                        Item added to cart
                      </h5>
                      <img src={img} alt="product-img" className="img-fluid" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">Price: ${price}</h5>
                      <Link to="/">
                        <ButtonContainer onClick={() => closeModal()}>
                          continoue
                        </ButtonContainer>
                      </Link>
                      <br />
                      <Link to="/cart">
                        <ButtonContainer onClick={() => closeModal()}>
                          go to <i className="fas fa-shopping-cart"></i>
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-centent: center;
  #modal {
    background-color: var(--light);
  }
`;
