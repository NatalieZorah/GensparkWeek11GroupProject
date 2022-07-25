import React, { useState, useEffect } from "react";
import "./App.css";

import Modal from "react-modal";
import {
  LoginPage,
  RegisterPage,
  Header,
  Footer,
  Home,
  Adidogs,
  NotFound,
} from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MailService from "./services/mail.service";
import UserService from "./services/user.service";
import OrderService from "./services/order.service";
import ProductService from "./services/product.service";
Modal.setAppElement("#root");

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [register, setRegister] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  const product = {
    name: "Black rattan lounger",
    price: "400",
  };

  // ProductService.createProduct(product)
  // .then(ProductService.createProduct(product))
  // .then(ProductService.createProduct(product))
  // .then(ProductService.createProduct(product))
  // .then(ProductService.createProduct(product))
  // .then(ProductService.getAllProducts())
  // .then(ProductService.getProductById(2))
  // .thenProductService.deleteProductById(3)

  const toggleLogin = () => {
    setIsOpen(!isOpen);
  };

  const toggleRegister = () => {
    setRegister(!register);
  };

  const openRegisterPage = () => {
    setIsOpen(false);
    setRegister(true);
  };

  return (
    <div className="App">
      <Router>
        <Header
          onLoginClick={toggleLogin}
          onRegisterClick={toggleRegister}
          currentUser={currentUser}
        />

        {isOpen && (
          <LoginPage
            onRegisterClick={openRegisterPage}
            modalIsOpen={isOpen}
            handleClose={toggleLogin}
            setCurrentUser={setCurrentUser}
          />
        )}

        {register && (
          <RegisterPage modalIsOpen={register} handleClose={toggleRegister} />
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/adidogs" element={<Adidogs />} />
          <Route path="/page-not-found" element={<NotFound />} />
          {/* <Route path="/admin" element={<Admin />} />
          <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
