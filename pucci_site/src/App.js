import React, { useState, useEffect } from "react";
import "./App.css";

import Modal from "react-modal";
import LoginModal from "./components/LoginModal/LoginModal";
import RegisterModal from "./components/RegisterModal/RegisterModal";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Adidogs from "./components/Adidogs/Adidogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MailService from "./services/mail.service";
import UserService from "./services/user.service";
import OrderService from "./services/order.service";
import ProductService from "./services/product.service";
import NotFound from "./components/NotFound/NotFound";
import AuthService from "./services/auth.service";
import Bag from "./components/Bag/Bag";
import Views from "./Views.jsx";
import AdminModal from "./components/AdminModal/AdminModal";
import { useSelector } from "react-redux/";
Modal.setAppElement("#root");

function App() {
  const [LoginView, setLoginView] = useState(false);
  const [RegisterView, setRegisterView] = useState(false);
  const [AdminView, setAdminView] = useState(false);
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('user'));

  const logout = (e) => {
    e.preventDefault()
    AuthService.logout();
    setCurrentUser('undefined');
    setLoginError("");
    console.log("Logout successful.");
  };


  const toggleLoginModal = () => {
    //make sure all other modals are closed
    setAdminView(false);
    setRegisterView(false);

    setLoginView(!LoginView);

  };

  const toggleRegisterModal = () => {
    //make sure all other modals are closed
    setAdminView(false);
    setLoginView(false);

    setRegisterView(!RegisterView);
  };

  const toggleAdminModal = () => {
    //make sure all other modals are closed
    setLoginView(false);
    setRegisterView(false);

    setAdminView(!AdminView);
  };



  return (
    <div className="App">
      <BrowserRouter>
        <Header
          onLoginClick={toggleLoginModal}
          onRegisterClick={toggleRegisterModal}
          onLogoutClick={logout}
          onAdminClick={toggleAdminModal}
          currentUser={currentUser}
        />

        {LoginView && (
          <LoginModal isOpen={LoginView} handleClose={toggleLoginModal} setCurrentUser={setCurrentUser} />
        )}

        {RegisterView && (
          <RegisterModal isOpen={RegisterView} handleClose={toggleRegisterModal} />
        )}

        {AdminView && (
          <AdminModal isOpen={AdminView} handleClose={toggleAdminModal} />
        )}

        <Views />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
