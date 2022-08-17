import React, { useState, useEffect } from "react";
import "./App.css";

import Modal from "react-modal";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import Header from "./components/static elements/Header";
import Footer from "./components/static elements/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MailService from "./services/mail.service";
import UserService from "./services/user.service";
import OrderService from "./services/order.service";
import ProductService from "./services/product.service";
import NotFound from "./components/pages/NotFound";
import AuthService from "./services/auth.service";
import Views from "./Views.jsx";
import AdminModal from "./components/modals/AdminModal";
import { useDispatch } from "react-redux/";
import { getCartFromStorage } from "./slices/cartSlice";
Modal.setAppElement("#root");

function App() {
  const [LoginView, setLoginView] = useState(false);
  const [RegisterView, setRegisterView] = useState(false);
  const [AdminView, setAdminView] = useState(false);
  const [currentUser, setCurrentUser] = useState(localStorage.getItem("user"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartFromStorage());
  });

  const logout = (e) => {
    e.preventDefault();
    AuthService.logout();
    setCurrentUser("undefined");
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
          <LoginModal
            isOpen={LoginView}
            handleClose={toggleLoginModal}
            setCurrentUser={setCurrentUser}
          />
        )}

        {RegisterView && (
          <RegisterModal
            isOpen={RegisterView}
            handleClose={toggleRegisterModal}
          />
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
