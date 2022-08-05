import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import Button from 'react-bootstrap/esm/Button';
import ProductService from '../../services/product.service';
import UserService from '../../services/user.service';
import OrderService from '../../services/order.service';
import { BiSearch } from "react-icons/bi";
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

    const resetView = () => {
        setShowManageOrders(false);
        setShowManageProducts(false);
        setShowManageUsers(false);
        setShowBackButton(false);
    }

    const searchUser = (e) => {
        e.preventDefault();
        // TODO Add some validation here to make sure it's a valid user id
        // Call user service to make an api call
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

    const searchProduct = (e) => {
        e.preventDefault();
        // TODO Add some validation here to make sure it's a valid product id
        // Call product service to make an api call
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

    const searchOrder = (e) => {
        e.preventDefault();
        // TODO Add some validation here to make sure it's a valid order id
        // Call order service to make an api call
        OrderService.getOrderById(productIDValue).then((response) => {
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

    useEffect(() => {
        console.log(showManageOrders);
        console.log(showManageProducts);
        console.log(showManageUsers);
        if (showManageOrders || showManageProducts || showManageUsers) {
            setShowBackButton(true);
        }

    }, [showManageUsers, showManageProducts, showManageOrders]);

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
                                <form onSubmit={searchOrder} className="order-search-wrapper search-wrapper">
                                    <div className="order-search-input-wrapper admin-search-input-wrapper">
                                        <input type="text" className="order-search-input admin-search-input" name="orderid" placeholder="Search for order by id" onChange={e => setOrderIDValue(e.target.value)} value={orderIDValue} required />
                                    </div>

                                    <div className="manage-orders-btn-wrapper search-btn-wrapper">
                                        <Button className="order-search-btn admin-search-btn" type="submit"><BiSearch className="admin-search-btn-icon" /></Button>
                                    </div>
                                </form>
                                <Button className="manage-orders-btn">View all orders</Button>
                                <Button className="manage-orders-btn">Create a new order</Button>
                                <Button className="manage-orders-btn">Update an existing order</Button>
                                <Button className="manage-orders-btn">Delete an existing order</Button>
                            </div>
                        ) : null}


                        {(showManageProducts) ? (
                            <div className="manage-products-content-container">
                                <form onSubmit={searchProduct} className="product-search-wrapper search-wrapper">
                                    <div className="product-search-input-wrapper admin-search-input-wrapper">
                                        <input type="text" className="product-search-input admin-search-input" name="productid" placeholder="Search for product by id" onChange={e => setProductIDValue(e.target.value)} value={productIDValue} required />
                                    </div>

                                    <div className="manage-products-btn-wrapper search-btn-wrapper">
                                        <Button className="product-search-btn admin-search-btn" type="submit"><BiSearch className="admin-search-btn-icon" /></Button>
                                    </div>
                                </form>
                                <Button className="manage-products-btn">View all products</Button>
                                <Button className="manage-products-btn">Create a new product</Button>
                                <Button className="manage-products-btn">Update an existing product</Button>
                                <Button className="manage-products-btn">Delete an existing product</Button>
                            </div>
                        ) : null}


                        {(showManageUsers) ? (
                            <div className="manage-users-content-container">
                                <form onSubmit={searchUser} className="user-search-wrapper search-wrapper">
                                    <div className="user-search-input-wrapper admin-search-input-wrapper">
                                        <input type="text" className="user-search-input admin-search-input" name="userid" placeholder="Search for user by id" onChange={e => setUserIDValue(e.target.value)} value={userIDValue} required />
                                    </div>

                                    <div className="manage-users-btn-wrapper search-btn-wrapper">
                                        <Button className="user-search-btn admin-search-btn" type="submit"><BiSearch className="admin-search-btn-icon" /></Button>
                                    </div>
                                </form>
                                <Button className="manage-users-btn">View all users</Button>
                                <Button className="manage-users-btn">Create a new user</Button>
                                <Button className="manage-users-btn">Update an existing user</Button>
                                <Button className="manage-users-btn">Delete an existing user</Button>
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