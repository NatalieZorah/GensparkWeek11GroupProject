import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-modal';
import AuthService from '../../services/auth.service';
import PulseLoader from "react-spinners/PulseLoader";
import './RegisterModal.css';


const RegisterModal = props => {

    const modalPosition = React.useState('center');
    const modalSize = React.useState('medium');
    const [formValues, setFormValues] = useState({ firstname: "", lastname: "", email: "", phone: "", username: "", password: "", password2: "" });
    const [formErrors, setFormErrors] = useState({ firstname: "", lastname: "", email: "", phone: "", username: "", password: "", password2: "" });
    const [ToSCheckbox, setToSCheckbox] = useState(false);
    const [registrationWait, setRegistrationWait] = useState(false);

    const onTextChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        //reset
        setFormErrors({
            ...formErrors,
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            username: "",
            password: "",
            password2: ""
        });

        // Testing purposes only
        // console.log("formvalues:", formValues);
        // console.log("formerrors:", formErrors);

        
        if (validate(formValues) && ToSCheckbox) {
            //Validation passed
            console.log("Validation passed");
            setRegistrationWait(true);
            let name = formValues.firstname.trim() + " " + formValues.lastname.trim();
            AuthService.register(formValues.username, formValues.email, formValues.password, name, formValues.phone)
            .then((response) => {
                console.log(response);
                if (response && response.status === 200) {
                    console.log("Registration success");
                    setLoginWait(false);
                    props.handleClose();
                } else {
                    //Registration failed
                    setRegistrationWait(false);
                }
            });
        } else {
            //Form validation failed.
            console.log("Form validation failed.");
        }
    };

    const validate = (values) => {
        const nameRegex = /^[a-zA-Z]+$/
        const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        const userRegex = /^[a-zA-Z0-9_.-]+$/;
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

        // name
        if (!nameRegex.test(values.firstName)) {
            setFormErrors({ firstname: "Can only contain upper and lowercase letters." });
            return false;
        }
        if (!nameRegex.test(values.lastName)) {
            setFormErrors({ lastname: "Can only contain upper and lowercase letters." });
            return false;
        }
        // phone
        if (!phoneRegex.test(values.phone)) {
            setFormErrors({ email: "Phone number must be a valid format." });
            return false;
        }
        // username
        if (!userRegex.test(values.username)) {
            setFormErrors({ username: "Username must only contain alphanumeric characters, underscores, periods, and dashes." });
            return false;
        }
        //password - Some commented out for testing purposes. Uncomment for production.
        if (values.password < 8) {
            setFormErrors({ password: "Password must be at least 8 characters long." });
           return false;
        }
        // if (!passwordRegex.test(values.password)) {
        //     setFormErrors({ password: "Password must contain at least one number and at least one special character." });
        //      return false;
        // }
        if (values.password !== values.password2) {
            setFormErrors({ password2: "Passwords do not match." });
            return false;
        }

        // approve valid form if no errors
        return true;
    };

    return (
        <Modal className="reg-modal" position={modalPosition} size={modalSize} isOpen={props.modalIsOpen} onRequestClose={props.handleClose}>
            <div className="reg-box">
                <div className='reg-box-content'>

                    {/* <Button className="btn-close" onClick={props.handleClose} /> */}

                    <div className="register-header-container">
                        <h2 className="register-header">Register an account</h2>
                    </div>

                    <div className="error-container">
                        {(formErrors.username !== "") ? (<div className="error-message">{formErrors.firstname}</div>) : ""}
                        {(formErrors.password !== "") ? (<div className="error-message">{formErrors.lastname}</div>) : ""}
                        {(formErrors.username !== "") ? (<div className="error-message">{formErrors.email}</div>) : ""}
                        {(formErrors.phone !== "") ? (<div className="error-message">{formErrors.phone}</div>) : ""}
                        {(formErrors.username !== "") ? (<div className="error-message">{formErrors.username}</div>) : ""}
                        {(formErrors.password !== "") ? (<div className="error-message">{formErrors.password}</div>) : ""}
                        {(formErrors.password2 !== "") ? (<div className="error-message">{formErrors.password2}</div>) : ""}
                    </div>

                    <form onSubmit={onSubmit} className="register-text-input-wrapper">

                        <div className="register-text-input-wrapper">

                            <div className='personal-info-container'>
                                <p className="personal-info-header">Personal information</p>
                                <div className="field name-field">
                                    <input type="text" className="first-name-input" name="firstname" placeholder="First name" value={formValues.firstName} onChange={onTextChange} required />
                                    <input type="text" className="last-name-input" name="lastname" placeholder="Last name" value={formValues.lastName} onChange={onTextChange} required />
                                </div>

                                <div className="field">
                                    <input type="email" className="email" name="email" placeholder="Email" value={formValues.email} onChange={onTextChange} required />
                                </div>

                                <div className="field">
                                    <input type="text" className="phone" name="phone" placeholder="Phone number" value={formValues.phone} onChange={onTextChange} required />
                                </div>
                            </div>

                            <div className="login-info-container">
                                <p className="login-info-header">Sign in information</p>

                                <div className="field">
                                    <input type="text" className="username" name="username" placeholder="Username" value={formValues.username} onChange={onTextChange} required />
                                </div>

                                <div className="field">
                                    <input type="password" className="password" name="password" placeholder="Password" value={formValues.password} onChange={onTextChange} required />
                                </div>

                                <div className="field">
                                    <input type="password" className="password" name="password2" placeholder="Re-enter password" value={formValues.password2} onChange={onTextChange} required />
                                </div>
                            </div>
                        </div>

                        <div className="register-checkbox-input-wrapper">
                            <input type="checkbox" className="ToSCheckbox" name="TosCheckbox" onChange={() => setToSCheckbox(!ToSCheckbox)} value={ToSCheckbox.value} required />
                            <span>I accept <a href="#"> Terms of Use </a></span>
                        </div>

                        <div className="register-btn-wrapper">
                            <Button className="register-btn" type="submit" disabled={!ToSCheckbox}>{(registrationWait) ? (<span>Registering<PulseLoader color="#e5dfd9" size="4" /></span>) : (<span>Register</span>)}</Button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    )
}

export default RegisterModal