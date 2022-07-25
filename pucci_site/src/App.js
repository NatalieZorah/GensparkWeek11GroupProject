import React, { useState, useEffect } from "react";
import "./App.css";

import Modal from 'react-modal';
import LoginModal from './components/LoginModal/LoginModal';
import RegisterModal from './components/RegisterModal/RegisterModal';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Adidogs from './components/Adidogs/Adidogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MailService from './services/mail.service';
import UserService from './services/user.service';
import OrderService from './services/order.service';
import ProductService from './services/product.service';
import NotFound from './components/NotFound/NotFound';
import AuthService from './services/auth.service';
import Bag from './components/Bag/Bag';
Modal.setAppElement('#root');

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [register, setRegister] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined)
  const [users, setUsers] = useState(undefined);
  const [products, setProducts] = useState(undefined);

  const Logout = () => {
    AuthService.logout();
    setCurrentUser(undefined);
    setLoginError("");
    console.log("Logout successfully");
  }

  // const product = {
  //   "name": "Black rattan lounger",
  //   "price":"400"
  // }

  // ProductService.createProduct(product)
  // .then(ProductService.createProduct(product))
  // .then(ProductService.createProduct(product))
  // .then(ProductService.createProduct(product))
  // .then(ProductService.createProduct(product))
  // .then(ProductService.getAllProducts())
  // .then(ProductService.getProductById(2))
  // .thenProductService.deleteProductById(3)


  const toggleLoginModal = () => {
    setIsOpen(!isOpen);
  };

  const toggleRegister = () => {
    setRegister(!register);
  };

  const openRegisterModal = () => {
    setIsOpen(false);
    setRegister(true);
  };


  return (
    <div className="App">

      <BrowserRouter>
        <Header
          onLoginClick={toggleLoginModal}
          onRegisterClick={toggleRegister}
          onLogoutClick={Logout}
          currentUser={currentUser}
        />

        {isOpen &&
          <LoginModal
            onRegisterClick={openRegisterModal}
            modalIsOpen={isOpen}
            handleClose={toggleLoginModal}
            setCurrentUser={setCurrentUser}
          />
        }

        {register &&
          <RegisterModal
            modalIsOpen={register}
            handleClose={toggleRegister}
          />
        }

        <Routes>
          <Route index element={<Home />} />
          <Route path="bag" element={<Bag />} />
          <Route path="/home" element={<Home />} />
          <Route path="/adidogs" element={<Adidogs />} />
          <Route path="/page-not-found" element={<NotFound />} />
          {/* <Route path="/admin" element={<Admin />} />
          <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
