import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import Button from 'react-bootstrap/esm/Button';
import "./AdminModal.css";

const AdminModal = (props) => {
    const modalPosition = React.useState('center');
    const modalSize = React.useState('small');
    const [showManageOrders, setShowManageOrders] = useState(false);
    const [showManageProducts, setShowManageProducts] = useState(false);
    const [showManageUsers, setShowManageUsers] = useState(false);
    const [showBackButton, setShowBackButton] = useState(false);

    const resetView = () => {
        setShowManageOrders(false);
        setShowManageProducts(false);
        setShowManageUsers(false);
        setShowBackButton(false);
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

                        {(showManageOrders) ? (
                            <div className="manage-orders-content-container">
                                <Button className="manage-orders-btn">View all orders</Button>
                                <Button className="manage-orders-btn">Search for an order</Button>
                                <Button className="manage-orders-btn">Create a new order</Button>
                                <Button className="manage-orders-btn">Update an existing order</Button>
                                <Button className="manage-orders-btn">Delete an existing order</Button>
                            </div>
                        ) : null}


                        {(showManageProducts) ? (
                            <div className="manage-products-content-container">
                                <Button className="manage-orders-btn">View all products</Button>
                                <Button className="manage-orders-btn">Search for a product</Button>
                                <Button className="manage-orders-btn">Create a new product</Button>
                                <Button className="manage-orders-btn">Update an existing product</Button>
                                <Button className="manage-orders-btn">Delete an existing product</Button>
                            </div>
                        ) : null}


                        {(showManageUsers) ? (
                            <div className="manage-products-content-container">
                                <Button className="manage-orders-btn">View all users</Button>
                                <Button className="manage-orders-btn">Search for a user</Button>
                                <Button className="manage-orders-btn">Create a new user</Button>
                                <Button className="manage-orders-btn">Update an existing user</Button>
                                <Button className="manage-orders-btn">Delete an existing user</Button>
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