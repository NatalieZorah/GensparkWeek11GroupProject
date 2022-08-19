import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/esm/Button';
import UserService from '../../services/user.service';
import { BiSearch } from "react-icons/bi";
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import './UserSettings.css';
import OrderSettings from '../OrderSettings/OrderSettings';
import ProductSettings from '../ProductsSettings/ProductSettings';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

const UserSettings = () => {

    const [userIDValue, setUserIDValue] = useState("");
    const [showCreateUser, setShowCreateUser] = useState(false);
    const [createUserValues, setCreateUserValues] = useState({ sign_in_type: "", firstname: "", lastname: "", username: "", password: "", email: "", phone: "" });
    const [updateUserValues, setUpdateUserValues] = useState({ sign_in_type: "", firstname: "", lastname: "", username: "", password: "", email: "", phone: "" });

    const getAllUsers = () => {
        UserService.getAllUsers().then((response) => {
            console.log(response);
            if (response && response.status === 200) {
                console.log("Get all users successful.");
                // TODO Display user information
            } else {
                //Users not found
                // TODO Display an error message
            }
        });
    }

    const searchUser = () => {
        // TODO Add some validation here to make sure it's a valid user id
        UserService.getUserById(userIDValue).then((response) => {
            console.log(response);
            if (response && response.status === 200) {
                console.log("User search successful.");
                // TODO Display user information
            } else {
                //User not found.
                // TODO Display an error message
            }
        });
    }

    const createUser = (e) => {
        // TODO add form validation before making API call

        // grab data from the form
        console.log(createUserValues);

        //make api call
        let name = createUserValues.firstname.trim() + " " + createUserValues.lastname.trim();
        AuthService.register(createUserValues.username, createUserValues.email, createUserValues.password, name, createUserValues.phone)
            .then((response) => {
                console.log(response);
                if (response && response.status === 200) {
                    console.log("Registration success");
                } else {
                    //Registration failed
                }
            });
    }

    const updateUser = (e) => {
        // TODO add form validation before making API call
        let name = updateUserValues.firstname.trim() + " " + updateUserValues.lastname.trim();

        let user = {
            user_id: userIDValue,
            sign_in_type: updateUserValues.sign_in_type,
            name: name,
            username: updateUserValues.username,
            password: updateUserValues.password,
            email: updateUserValues.email,
            phone: updateUserValues.phone
        }
        console.log(user);

        UserService.updateUser(user).then((response) => {
            console.log(response);
            if (response && response.status === 200) {
                console.log("User update successful.");
                // TODO Display user information
            } else {
                //User not found.
                // TODO Display an error message
            }
        });
    }

    const deleteUser = () => {
        // TODO Add some validation here to make sure it's a valid user id
        UserService.deleteUserById(userIDValue).then((response) => {
            console.log(response);
            if (response && response.status === 200) {
                console.log("User deletion successful.");
                // TODO Display deleted user id
            } else {
                //User not found.
                // TODO Display an error message
            }
        });
    }

    return (
        <>
            <ListGroup>
                <ListGroup.Item action href="/ordersettings">
                    Order settings
                </ListGroup.Item>
                <ListGroup.Item action href="/productsettings">
                    Product settings
                </ListGroup.Item>
                <ListGroup.Item action href="/usersettings">
                    User settings
                </ListGroup.Item>
            </ListGroup>

            <div className="manage-users-content-container">
                <form className="user-search-wrapper search-wrapper">
                    <div className="user-search-input-wrapper admin-search-input-wrapper">
                        <input type="text" className="user-search-input admin-search-input" name="userid" placeholder="Search for user by id" onChange={e => setUserIDValue(e.target.value)} value={userIDValue} required />
                    </div>

                    <div className="manage-users-btn-wrapper search-btn-wrapper">
                        <Button className="user-search-btn admin-search-btn" onClick={() => searchUser()}><BiSearch className="admin-search-btn-icon" /></Button>
                    </div>
                </form>
                <Button className="manage-users-btn" onClick={() => getAllUsers()}>View all users</Button>

                {/* May be later changed to role type instead of sign_in_type since we currently have both in the database. */}
                <form className="user-create-wrapper create-wrapper">
                    <Form.Select onChange={e => setCreateUserValues({ ...createUserValues, sign_in_type: e.target.value })} value={createUserValues.sign_in_type} required>
                        <option>Admin</option>
                        <option>User</option>
                    </Form.Select>
                    <div className="user-create-name-field user-create-field">
                        <input type="text" className="user-create-firstname-input" name="firstname" placeholder="First name" onChange={e => setCreateUserValues({ ...createUserValues, firstname: e.target.value })} value={createUserValues.firstname} required />
                        <input type="text" className="user-create-lastname-input" name="lastname" placeholder="Last name" onChange={e => setCreateUserValues({ ...createUserValues, lastname: e.target.value })} value={createUserValues.lastname} required />
                    </div>

                    <div className="user-create-field">
                        <input type="email" className="user-create-email-input" name="email" placeholder="Email" onChange={e => setCreateUserValues({ ...createUserValues, email: e.target.value })} value={createUserValues.email} required />
                    </div>

                    <div className="user-create-field">
                        <input type="text" className="user-create-phone-input" name="phone" placeholder="Phone number" onChange={e => setCreateUserValues({ ...createUserValues, phone: e.target.value })} value={createUserValues.phone} required />
                    </div>

                    <div className="user-create-field">
                        <input type="text" className="user-create-username-input" name="username" placeholder="Username" onChange={e => setCreateUserValues({ ...createUserValues, username: e.target.value })} value={createUserValues.username} required />
                    </div>

                    <div className="user-create-field">
                        <input type="password" className="user-create-password-input" name="password" placeholder="Password" onChange={e => setCreateUserValues({ ...createUserValues, password: e.target.value })} value={createUserValues.password} required />
                    </div>

                    <Button className="manage-users-btn" onClick={() => createUser()}>Create a new user</Button>
                </form>

                <form className="user-create-wrapper create-wrapper">
                    <Form.Select onChange={e => setUpdateUserValues({ ...updateUserValues, sign_in_type: e.target.value })} value={updateUserValues.sign_in_type} required>
                        <option>Admin</option>
                        <option>User</option>
                    </Form.Select>
                    <div className="user-update-name-field user-create-field">
                        <input type="text" className="user-create-firstname-input" name="firstname" placeholder="First name" onChange={e => setUpdateUserValues({ ...updateUserValues, firstname: e.target.value })} value={updateUserValues.firstname} required />
                        <input type="text" className="user-create-lastname-input" name="lastname" placeholder="Last name" onChange={e => setUpdateUserValues({ ...updateUserValues, lastname: e.target.value })} value={updateUserValues.lastname} required />
                    </div>

                    <div className="user-update-field">
                        <input type="email" className="user-update-email-input" name="email" placeholder="Email" onChange={e => setUpdateUserValues({ ...updateUserValues, email: e.target.value })} value={updateUserValues.email} required />
                    </div>

                    <div className="user-update-field">
                        <input type="text" className="user-update-phone-input" name="phone" placeholder="Phone number" onChange={e => setUpdateUserValues({ ...updateUserValues, phone: e.target.value })} value={updateUserValues.phone} required />
                    </div>

                    <div className="user-update-field">
                        <input type="text" className="user-update-username-input" name="username" placeholder="Username" onChange={e => setUpdateUserValues({ ...updateUserValues, username: e.target.value })} value={updateUserValues.username} required />
                    </div>

                    <div className="user-update-field">
                        <input type="password" className="user-update-password-input" name="password" placeholder="Password" onChange={e => setUpdateUserValues({ ...updateUserValues, password: e.target.value })} value={updateUserValues.password} required />
                    </div>
                    <Button className="manage-users-btn" onClick={() => updateUser()}>Update an existing user</Button>
                </form>

                <Button className="manage-users-btn" onClick={() => deleteUser()}>Delete an existing user</Button>
            </div>
        </>
    )
}

export default UserSettings