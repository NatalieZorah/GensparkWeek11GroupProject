import React, { useState, useEffect, formValues, isSubmit } from "react";
import Modal from "react-modal";
import Button from "react-bootstrap/esm/Button";
import "./LoginPage.css";
import AuthService from "../../services/auth.service";

const LoginPage = (props) => {
  const modalPosition = React.useState("center");
  const modalSize = React.useState("small");
  const initValues = { username: "", password: "" };
  const initPlaceholders = {
    username: "Username",
    password: "Password",
  };
  const [formPlaceholders, setFormPlaceholders] = useState(initPlaceholders);
  const [formValues, setFormValues] = useState(initValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setFormPlaceholders(validate(formValues));
    setIsSubmit(true);
    AuthService.login(formValues.username, formValues.password)
      .then((res) => props.setCurrentUser(res))
      .finally(props.handleClose());
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const userRegex = /^[a-zA-Z0-9_.-]+$/;

    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!userRegex.test(values.username)) {
      errors.username =
        "Username can only contain alphanumeric characters, dashes, periods, and underscores.";
    }
    if (values.password < 8) {
      errors.password = "Password must be at least 8 characters long.";
    }
    // if () {
    //   errors.password = "Account not found, either the username or password is incorrect.";
    // }
    return errors;
  };

  return (
    <div style={{ display: "flex" }}>
      <Modal
        className="login-modal"
        size={modalSize}
        position={modalPosition}
        isOpen={props.modalIsOpen}
        onRequestClose={props.handleClose}
      >
        <div className="login-box">
          <div className="login-content">
            {/* <Button className="btn-close" onClick={props.handleClose} /> */}

            <div className="login-header-container">
              <h2 className="login-header"> Sign In</h2>
            </div>
            <form onSubmit={handleSubmit} className="login-text-input-wrapper">
              <div className="login-text-input-wrapper">
                <div className="usernameField">
                  <input
                    type="text"
                    className="username"
                    name="username"
                    placeholder="Username"
                    defaultValue={formValues.username}
                    onChange={handleChange}
                    required
                  />
                  <p className="errors">{formErrors.username}</p>
                </div>

                <div className="passwordField">
                  <input
                    type="password"
                    className="password"
                    name="password"
                    placeholder="Password"
                    defaultValue={formValues.password}
                    onChange={handleChange}
                    required
                  />
                  <p className="errors">{formErrors.password}</p>
                </div>
              </div>

              <div className="login-checkbox-input-wrapper">
                <input type="checkbox" />
                <span>Remember me</span>
              </div>

              <div className="login-btn-wrapper">
                <Button
                  className="login-btn"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Sign in
                </Button>
              </div>
            </form>

            <p className="no-account-message">
              No existing account?{" "}
              <a href="#" onClick={props.onRegisterClick}>
                Register here
              </a>
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LoginPage;
