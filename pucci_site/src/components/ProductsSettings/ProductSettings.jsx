import React, { useState, useEffect, useRef } from 'react';
import ProductService from '../../services/product.service';
import Button from 'react-bootstrap/esm/Button';
import { BiSearch } from "react-icons/bi";
import Form from 'react-bootstrap/Form';
import './ProductSettings.css'
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

const ProductSettings = () => {

    const [productIDValue, setProductIDValue] = useState("");
    const [showCreateProduct, setShowCreateProduct] = useState(false);
    const [createProductValues, setCreateProductValues] = useState({ name: "", price: "" });
    const [updateProductValues, setUpdateProductValues] = useState({ name: "", price: "" });

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

            <div className="manage-products-content-container">
                <form className="product-search-wrapper search-wrapper">
                    <div className="product-search-input-wrapper admin-search-input-wrapper">
                        <input type="text" className="product-search-input admin-search-input" name="productid" placeholder="Search for product by id" onChange={e => setProductIDValue(e.target.value)} value={productIDValue} required />
                    </div>

                    <div className="manage-products-btn-wrapper search-btn-wrapper">
                        <Button className="product-search-btn admin-search-btn" onClick={() => searchProduct()}><BiSearch className="admin-search-btn-icon" /></Button>
                    </div>
                </form>
                <Button className="manage-products-btn" onClick={() => getAllProducts()}>View all products</Button>

                <form className="product-create-wrapper create-wrapper">
                    <div className="product-create-field">
                        <input type="text" className="product-create-title-input" name="title" placeholder="Product Title" onChange={e => setCreateProductValues({ ...createProductValues, name: e.target.value })} value={createProductValues.name} required />
                    </div>

                    <div className="product-create-field">
                        <input type="number" className="product-create-price-input" name="price" placeholder="Price" onChange={e => setCreateProductValues({ ...createProductValues, price: e.target.value })} value={createProductValues.price} required />
                    </div>
                    <Button className="manage-users-btn" onClick={() => createProduct()}>Create a new product</Button>
                </form>

                <form className="product-update-wrapper update-wrapper">
                    <div className="product-update-field">
                        <input type="text" className="product-update-title-input" name="title" placeholder="Product Title" onChange={e => setUpdateProductValues({ ...updateProductValues, name: e.target.value })} value={updateProductValues.name} required />
                    </div>

                    <div className="product-update-field">
                        <input type="number" className="product-update-price-input" name="price" placeholder="Price" onChange={e => setUpdateProductValues({ ...updateProductValues, price: e.target.value })} value={updateProductValues.price} required />
                    </div>
                    <Button className="manage-products-btn" onClick={() => updateProduct()}>Update an existing product</Button>
                </form>
                <Button className="manage-products-btn" onClick={() => deleteProduct()}>Delete an existing product</Button>
            </div>
        </>
    )
}

export default ProductSettings