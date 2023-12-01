import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { ProductConsumer, ProductContext } from "../context";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar container">
        <div className="d-flex flex-row align-items-center">
          <Logo className="text-steelblue" style={{ fontSize: "1.2rem" }}>
            <i className="fa-solid fa-a"></i>
            <i className="fa-solid fa-m "></i>
            <i className="fa-solid fa-cart-shopping text-steelblue"></i>
          </Logo>
          {/* <Link to="/" className="m-2 link fs-5"></Link> */}
          <ul className="navbar-nav align-items-center">
            <li className="nav-items ml-5 ">
              <Link to="/" className="link-underline-dark link">
                Products
              </Link>
              <Link to="/" className="link-underline-dark link">
                Home
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/cart" className="ml-auto">
          {/* <ProductConsumer>
                {(value) => {
                  return value.product.map((pro) => {
                    return <Product key={pro.id} product={pro} />;
                  });
                }}
              </ProductConsumer> */}

          <ButtonSM>
            <ProductConsumer>
              {(value) => {
                return <Label>{value.cart.length}</Label>;
              }}
            </ProductConsumer>
            <LogoCart className="fas fa-cart-plus"></LogoCart>
          </ButtonSM>
        </Link>
      </NavWrapper>
    );
  }
}

const Label = styled.div`
  font-weight: 600;
  font-size: 20px;
  position: absolute;
  color: white;
  right: 67%;
  top: 40%;
`;

const LogoCart = styled.i``;

const ButtonSM = styled.button`
  background: var(--blue-steel);
  z-index: 0;
  position: relative;
  border: none;
  font-size: 1.5rem;
  color: var(--gray-light);
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const NavWrapper = styled.nav`
  background: var(--light);
  display: flex;
  align-items: center;
  color: var(--blue-steel);
  justify-content: space-between;
  padding: 11px 24px;
  .link {
    color: var(--blue-steel);
    text-decoration: none;
    margin: 0px 10px;
    font-size: 1.2rem;
    &:hover {
      color: var(--blue-light);
    }
  }
`;
const Logo = styled.span`
  fontsize: 1.2rem;
  cursor: pointer;
  padding-right: 5px;
  &:hover {
    scale: 0.9;
  }
`;
