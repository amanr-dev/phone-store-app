import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Modal from "./components/Modal";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/*" element={<Default />} />

            <Route exact path="/" element={<ProductsList />} />

            <Route exact path="/details" element={<Details />} />

            <Route exact path="/cart" element={<Cart />} />
          </Routes>

          <Modal />
        </Router>
      </React.Fragment>
    );
  }
}
