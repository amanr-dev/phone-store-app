import React, { Component } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

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
          <ButtonSM>
            <i className="fas fa-cart-plus"></i>
          </ButtonSM>
        </Link>
      </NavWrapper>
    );
  }
}

const ButtonSM = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: var(--blue-steel);
  &:hover {
    scale: 1.1;
    color: var(--blue-light);
    transition: all 0.5s ease-in;
  }
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
