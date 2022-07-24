import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-modal";
import "./RegisterPage.css";

const RegisterPage = (props) => {
  const modalPosition = React.useState("center");
  const modalSize = React.useState("medium");
  const initValues = {
    username: "",
    password: "",
    password2: "",
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    tosCheckbox: false,
  };
  const initPlaceholders = {
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    phone: "Phone number",
    username: "Username",
    password: "Password",
    password2: "Re-enter your password",
  };
  const [formValues, setFormValues] = useState(initValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [formPlaceholders, setFormPlaceholders] = useState(initPlaceholders);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setFormPlaceholders(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const nameRegex = /^[a-zA-Z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phoneRegex =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    const userRegex = /^[a-zA-Z0-9_.-]+$/;
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    // name fields - First Name
    if (!values.firstName) {
      errors.firstName = "First name is required";
    }
    if (!nameRegex.test(values.firstName)) {
      errors.firstName = "Can only contain upper and lowercase letters.";
    }
    // name fields - Last Name
    if (!values.lastName) {
      errors.lastName = "Last name is required";
    }
    if (!nameRegex.test(values.lastName)) {
      errors.lastName = "Can only contain upper and lowercase letters.";
    }
    // email
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!emailRegex.test(values.email)) {
      errors.email = "Email must be a valid email address.";
    }
    // phone
    if (!values.phone) {
      errors.phone = "Phone is required";
    }
    if (!phoneRegex.test(values.phone)) {
      errors.phone = "Phone number must be a valid format.";
    }
    // username
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!userRegex.test(values.username)) {
      errors.username =
        "Username must only contain Uppercase, Lowercase, underscores, periods, and dashes.";
    }
    //password
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (values.password < 8) {
      errors.password = "Password must be at least 8 characters long.";
    }
    if (!passwordRegex.test(values.password)) {
      errors.password =
        "Password must contain at least one number, and at least one special character.";
    }
    if (values.password !== values.password2) {
      errors.password2 = "Passwords do not match.";
    }
    // terms of service checkbox
    if (!values.tosCheckbox) {
      errors.tosCheckbox = "You must accept the terms of service to continue.";
    }
    return errors;
  };

  return (
    <Modal
      className="reg-modal"
      position={modalPosition}
      size={modalSize}
      isOpen={props.modalIsOpen}
      onRequestClose={props.handleClose}
    >
      <div className="reg-box">
        <div className="reg-box-content">
          {/* <Button className="btn-close" onClick={props.handleClose} /> */}

          <div className="register-header-container">
            <h2 className="register-header">Register an account</h2>
          </div>

          <div className="register-text-input-wrapper">
            <div className="personal-info-container">
              <p className="personal-info-header">Personal information</p>
              <div className="field name-field">
                <input
                  type="text"
                  className="first-name-input"
                  placeholder={formPlaceholders.firstName}
                  defaultValue={formValues.firstName}
                  onChange={handleChange}
                  required
                />
                <p className="errors">{formErrors.firstName}</p>
                <input
                  type="text"
                  className="last-name-input"
                  placeholder={formPlaceholders.lastName}
                  defaultValue={formValues.lastName}
                  onChange={handleChange}
                  required
                />
                <p className="errors">{formErrors.lastName}</p>
              </div>

              <div className="field">
                <input
                  type="text"
                  className="email"
                  placeholder={formPlaceholders.email}
                  defaultValue={formValues.email}
                  onChange={handleChange}
                  required
                />
                <p className="errors">{formErrors.email}</p>
              </div>

              <div className="field">
                <input
                  type="text"
                  className="phone"
                  placeholder={formPlaceholders.phone}
                  defaultValue={formValues.phone}
                  onChange={handleChange}
                  required
                />
                <p className="errors">{formErrors.phone}</p>
              </div>
            </div>

            <div className="login-info-container">
              <p className="login-info-header">Sign in information</p>

              <div className="field">
                <input
                  type="text"
                  className="username"
                  placeholder={formPlaceholders.username}
                  defaultValue={formValues.username}
                  onChange={handleChange}
                  required
                />
                <p className="errors">{formErrors.username}</p>
              </div>

              <div className="field">
                <input
                  type="text"
                  className="password"
                  placeholder={formPlaceholders.password}
                  defaultValue={formValues.password}
                  onChange={handleChange}
                  required
                />
                <p className="errors">{formErrors.password}</p>
              </div>

              <div className="field">
                <input
                  type="text"
                  className="password"
                  placeholder={formPlaceholders.password2}
                  defaultValue={formValues.password2}
                  onChange={handleChange}
                  required
                />
                <p className="errors">{formErrors.password2}</p>
              </div>
            </div>
          </div>

          <div className="register-checkbox-input-wrapper">
            <input
              type="checkbox"
              className="tosCheckbox"
              onChange={handleChange}
              required
            />
            <span>
              I accept <a href="#"> Terms of Use </a>
            </span>
            {/* Instead of an error here, disable the submit button. */}
            <p className="errors"> {formErrors.tosCheckbox}</p>
          </div>

          <div className="register-btn-wrapper">
            <Button className="register-btn" onClick={handleSubmit}>
              Register
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RegisterPage;
