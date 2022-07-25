import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Button from 'react-bootstrap/esm/Button';
import "./LoginModal.css";
import AuthService from '../../services/auth.service';
import PulseLoader from "react-spinners/PulseLoader";

const LoginModal = props => {

  const modalPosition = React.useState('center');
  const modalSize = React.useState('small');
  const [formValues, setFormValues] = useState({ username: localStorage.getItem("username") || "", password: "" });
  const [formErrors, setFormErrors] = useState({ username: "", password: "" });
  const [loginWait, setLoginWait] = useState(false);
  const [rememberUser, setRememberUser] = useState(false);

  const onTextChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value })
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //Reset any axisting errors
    setFormErrors({ ...formErrors, username: "", password: "" });

    //Save username in local storage if user checks "Remember me"
    if (rememberUser) {
      localStorage.setItem("username", formValues.username);
    }

    //Validate form 
    validate(formValues);

    // Testing purposes only
    // console.log("formValues", formValues);
    // console.log("rememberUser:", rememberUser);
    // console.log("formErrors:", formErrors)

    if (validForm) {
      //Validation passed
      console.log("Validation passed.");

      setLoginWait(true);
      AuthService.login(formValues.username, formValues.password)
        .then((response) => {
          console.log(response);
          if (response && response.status === 200) {
            console.log("Sign in success");
            props.setCurrentUser({
              username: formValues.username,
              password: formValues.password
            });
            setLoginWait(false);
            props.handleClose();
          } else {
            //Credentials not found.
            setLoginWait(false);
          }
        });
    } else {
      //Form validation failed.
      console.log(formErrors);
    }
  };

  const validate = (values) => {
    const userRegex = /^[a-zA-Z0-9_.-]+$/;

    if (values.username && !userRegex.test(values.username)) {
      setFormErrors({ username: "Username can only contain alphanumeric characters, dashes, periods, and underscores." });
    }

    //Commented out for testing purposes. Uncomment for production.
    // if (values.password && values.password.length < 8) {
    //   setFormErrors({ password: "Password must be at least 8 characters long." });
    // }

  };

  return (
    <div style={{ display: 'flex' }}>
      <Modal className="login-modal"
        size={modalSize}
        position={modalPosition}
        isOpen={props.modalIsOpen}
        onRequestClose={props.handleClose}
      >
        <div className="login-box">

          <div className="login-content">
            {/* <Button className="btn-close" onClick={props.handleClose} /> */}

            <div className='login-header-container'>
              <h2 className='login-header'> Sign In</h2>
            </div>

            <div className="error-container">
              {(formErrors.username !== "") ? (<div className="error-message">{formErrors.username}</div>) : ""}
              {(formErrors.password !== "") ? (<div className="error-message">{formErrors.password}</div>) : ""}
            </div>

            <form onSubmit={onSubmit} className="login-text-input-wrapper">

              <div className="login-text-input-wrapper">

                <div className="usernameField">
                  <input type="text" className="username" name="username" placeholder="Username" onChange={onTextChange} value={formValues.username} required />
                </div>

                <div className="passwordField">
                  <input type="password" className="password" name="password" placeholder="Password" onChange={onTextChange} value={formValues.password} required />
                </div>

              </div>

              <div className="login-checkbox-input-wrapper">
                <input type="checkbox" onChange={() => setRememberUser(!rememberUser)} value={rememberUser.value} name="rememberUser" /><span>Remember me</span>
              </div>

              <div className="login-btn-wrapper">
                <Button className="login-btn" type="submit">{(loginWait) ? (<span>Signing in<PulseLoader color="#e5dfd9" size="4" /></span>) : (<span>Sign in</span>)}</Button>
              </div>
            </form>

            <p className="no-account-message">No existing account? <a href="#" onClick={props.onRegisterClick}>Register here</a></p>

          </div>
        </div>
      </Modal>
    </div>
  )
}

export default LoginModal