import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import Button from 'react-bootstrap/esm/Button';
import ProductService from '../../services/product.service';
import UserService from '../../services/user.service';
import OrderService from '../../services/order.service';
import { BiSearch } from "react-icons/bi";
import Form from 'react-bootstrap/Form';
import AuthService from '../../services/auth.service';
import "./AdminModal.css";

const AdminModal = (props) => {
    const modalPosition = React.useState('center');
    const modalSize = React.useState('small');
    const [showManageOrders, setShowManageOrders] = useState(false);
    const [showManageProducts, setShowManageProducts] = useState(false);
    const [showManageUsers, setShowManageUsers] = useState(false);
    const [showBackButton, setShowBackButton] = useState(false);
    const [productIDValue, setProductIDValue] = useState("");
    const [orderIDValue, setOrderIDValue] = useState("");
    const [userIDValue, setUserIDValue] = useState("");
    const [showCreateUser, setShowCreateUser] = useState(false);
    const [showCreateProduct, setShowCreateProduct] = useState(false);
    const [showCreateOrder, setShowCreateOrder] = useState(false);
    const [createUserValues, setCreateUserValues] = useState({ sign_in_type: "", firstname: "", lastname: "", username: "", password: "", email: "", phone: "" });
    const [createProductValues, setCreateProductValues] = useState({ name: "", price: "" });
    const [createOrderList, setCreateOrderList] = useState([]);
    const [updateUserValues, setUpdateUserValues] = useState({ sign_in_type: "", firstname: "", lastname: "", username: "", password: "", email: "", phone: "" });
    const [updateProductValues, setUpdateProductValues] = useState({ name: "", price: "" });
    const [updateOrderList, setUpdateOrderList] = useState([]);


    const resetView = () => {
        setShowManageOrders(false);
        setShowManageProducts(false);
        setShowManageUsers(false);

        setShowCreateUser(false);
        setShowCreateProduct(false);
        setShowCreateOrder(false);

        setShowBackButton(false);
    }

    const getAllOrders = () => {
        OrderService.getAllOrders().then((response) => {
            console.log(response);
            if (response && response.status === 200) {
                console.log("Get all orders successful.");
                // TODO Display user information
            } else {
                //Orders not found
                // TODO Display an error message
            }
        });
    }

    const searchOrder = () => {
        // TODO Add some validation here to make sure it's a valid order id
        OrderService.getOrderById(orderIDValue).then((response) => {
            console.log(response);
            if (response && response.status === 200) {
                console.log("Order search successful.");
                // TODO Display order information
            } else {
                //Order not found.
                // TODO Display an error message
            }
        });
    }

    const createOrder = () => {


    }

    const deleteOrder = () => {
        // TODO Add some validation here to make sure it's a valid order id
        OrderService.deleteOrderById(orderIDValue).then((response) => {
            console.log(response);
            if (response && response.status === 200) {
                console.log("Order deletion successful.");
                // TODO Display deleted order id
            } else {
                //Order not found.
                // TODO Display an error message
            }
        });
    }

    const getAllProducts = () => {
        ProductService.getAllProducts().then((response) => {
            console.log(response);
            if (response && response.status === 200) {
                console.log("Get all products successful.");
                // TODO Display product information
            } else {
                //Products not found
                // TODO Display an error message
            }
        });
    }

    const searchProduct = () => {
        // TODO Add some validation here to make sure it's a valid product id
        ProductService.getProductById(productIDValue).then((response) => {
            console.log(response);
            if (response && response.status === 200) {
                console.log("Product search successful.");
                // TODO Display product information
            } else {
                //Product not found.
                // TODO Display an error message
            }
        });
    }

    const createProduct = () => {
        //TODO add some validation to make sure inputs are valid

        const product = {
            "name": createProductValues.name.trim(),
            "price": createProductValues.price
        }

        ProductService.createProduct(product).then((response) => {
            console.log(response);
            if (response && response.status === 200) {
                console.log("Product creation successful.");
                // TODO Display product information
            } else {
                //Product not found.
                // TODO Display an error message
            }
        });
    }

    const updateProduct = () => {
        //TODO add some validation to make sure inputs are valid

        console.log(productIDValue);

        let product = {
            "id": productIDValue,
            "name": updateProductValues.name,
            "price": updateProductValues.price
        }

        console.log(product);

        ProductService.updateProduct(product).then((response) => {
            console.log(response);
            if (response && response.status === 200) {
                console.log("Product update successful.");
                // TODO Display product information
            } else {
                //Product not found.
                // TODO Display an error message
            }
        });        
    }

    const deleteProduct = () => {
        // TODO Add some validation here to make sure it's a valid product id
        ProductService.deleteProductById(productIDValue).then((response) => {
            console.log(response);
            if (response && response.status === 200) {
                console.log("Product deletion successful.");
                // TODO Display deleted product id
            } else {
                //Order not found.
                // TODO Display an error message
            }
        });
    }

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

    useEffect(() => {
        if (showManageOrders || showManageProducts || showManageUsers) {
            setShowBackButton(true);
        }

        //TODO manage views for createOrder, createUser, and createProduct

    }, [showManageUsers, showManageProducts, showManageOrders, showCreateOrder, showCreateUser, showCreateProduct]);

    return (
        <div style={{ display: 'flex' }}>
            <Modal className="login-modal"
                size={modalSize}
                position={modalPosition}
                isOpen={props.isOpen}
                onRequestClose={props.handleClose}
            >
                <div className="admin-box">

                    <div className="admin-content">

                        <div className="admin-header-container">
                            <h2 className='admin-header'>Admin Settings</h2>
                        </div>

                        {(!showManageOrders && !showManageProducts && !showManageUsers) ?
                            (<div className="admin-btn-container">
                                <Button className="admin-select-btn" onClick={() => setShowManageOrders(!showManageOrders)}>Manage orders</Button>
                                <Button className="admin-select-btn" onClick={() => setShowManageProducts(!showManageProducts)}>Manage products</Button>
                                <Button className="admin-select-btn" onClick={() => setShowManageUsers(!showManageUsers)}>Manage users</Button>
                            </div>)
                            : ""}

                        {/* TODO Make it so that once an entity has been searched for, the option to update and delete is right next to it. */}
                        {/* For now, keep it like this until admin component is more fleshed out. */}
                        {(showManageOrders) ? (
                            <div className="manage-orders-content-container">
                                <form className="order-search-wrapper search-wrapper">
                                    <div className="order-search-input-wrapper admin-search-input-wrapper">
                                        <input type="text" className="order-search-input admin-search-input" name="orderid" placeholder="Search for order by id" onChange={e => setOrderIDValue(e.target.value)} value={orderIDValue} required />
                                    </div>

                                    <div className="manage-orders-btn-wrapper search-btn-wrapper">
                                        <Button className="order-search-btn admin-search-btn" onClick={() => searchOrder()}><BiSearch className="admin-search-btn-icon" /></Button>
                                    </div>
                                </form>
                                <Button className="manage-orders-btn" onClick={() => getAllOrders()}>View all orders</Button>

                                <form onSubmit={createOrder} className="order-create-wrapper create-wrapper">
                                    <div className="order-create-input wrapper admin-create-input-wrapper">
                                        {/* TODO Order creation is a bit more complex than other create methods. Needs dropdown or chip select.*/}
                                        {/* https://www.npmjs.com/package/react-multi-select-component */}
                                    </div>
                                    <div className="create-order-btn-wrapper">
                                        <Button className="manage-orders-btn" type="submit">Create a new order</Button>
                                    </div>
                                </form>

                                <Button className="manage-orders-btn">Update an existing order</Button>
                                <Button className="manage-orders-btn" onClick={() => deleteOrder()}>Delete an existing order</Button>
                            </div>
                        ) : null}


                        {(showManageProducts) ? (
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
                        ) : null}


                        {(showManageUsers) ? (
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
                        ) : null}


                        {(showBackButton) ?
                            (<Button className="back-btn" onClick={resetView}>Back</Button>) : null}

                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default AdminModal