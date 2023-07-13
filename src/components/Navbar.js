import React, { Component } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar">
        <div className="d-flex flex-row align-items-center">
          <span className="text-light">
            <i className="fa-solid fa-a"></i>
            <i className="fa-solid fa-m"></i>
            <i className="fa-solid fa-cart-shopping text-light"></i>
          </span>
          {/* <Link to="/" className="m-2 link fs-5"></Link> */}
          <ul className="navbar-nav align-items-center">
            <li className="nav-items ml-5 ">
              <Link to="/" className="link-underline-dark link">
                Products
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
  color: var(--light);
  &:hover {
    scale: 1.1;
    color: var(--black);
    transition: all 0.5s ease-in;
  }
`;

const NavWrapper = styled.nav`
  background: var(--blue-steel);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 24px;
  .link {
    color: #eae8e8;
    text-decoration: none;
    margin: 0px 15px;
  }
`;
