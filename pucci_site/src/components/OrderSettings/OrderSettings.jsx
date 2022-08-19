import React, { useState, useEffect, useRef } from 'react';
import OrderService from '../../services/order.service';
import { BiSearch } from "react-icons/bi";
import Form from 'react-bootstrap/Form';
import AuthService from '../../services/auth.service';
import Button from 'react-bootstrap/esm/Button';
import './OrderSettings.css'

const OrderSettings = () => {

    const [orderIDValue, setOrderIDValue] = useState("");
    const [showCreateOrder, setShowCreateOrder] = useState(false);
    const [createOrderList, setCreateOrderList] = useState([]);
    const [updateOrderList, setUpdateOrderList] = useState([]);

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

    return (
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
    )
}

export default OrderSettings