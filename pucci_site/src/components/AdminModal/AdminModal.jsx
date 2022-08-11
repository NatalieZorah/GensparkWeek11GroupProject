import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import Button from "react-bootstrap/esm/Button";
import ProductService from "../../services/product.service";
import UserService from "../../services/user.service";
import OrderService from "../../services/order.service";
import { BiSearch } from "react-icons/bi";
import Form from "react-bootstrap/Form";
import "./AdminModal.css";

const AdminModal = (props) => {
  const modalPosition = React.useState("center");
  const modalSize = React.useState("small");
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
  const [createUserValues, setCreateUserValues] = useState({
    sign_in_type: "",
    name: "",
    username: "",
    password: "",
    email: "",
    phone: "",
  });
  const [createProductValues, setCreateProductValues] = useState({
    name: "",
    price: "",
  });
  const [createOrderList, setCreateOrderList] = useState([]);

  const resetView = () => {
    setShowManageOrders(false);
    setShowManageProducts(false);
    setShowManageUsers(false);

    setShowCreateUser(false);
    setShowCreateProduct(false);
    setShowCreateOrder(false);

    setShowBackButton(false);
  };

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
  };

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
  };

  const createOrder = () => {};

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
  };

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
  };

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
  };

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
  };

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
  };

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
  };

  const createUser = (e) => {
    // TODO add form validation before making API call
    // grab data from the form
    //make api call
  };

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
  };

  useEffect(() => {
    if (showManageOrders || showManageProducts || showManageUsers) {
      setShowBackButton(true);
    }

    //TODO manage views for createOrder, createUser, and createProduct
  }, [
    showManageUsers,
    showManageProducts,
    showManageOrders,
    showCreateOrder,
    showCreateUser,
    showCreateProduct,
  ]);

  return (
    <div style={{ display: "flex" }}>
      <Modal
        className="login-modal"
        size={modalSize}
        position={modalPosition}
        isOpen={props.isOpen}
        onRequestClose={props.handleClose}
      >
        <div className="admin-box">
          <div className="admin-content">
            <div className="admin-header-container">
              <h2 className="admin-header">Admin Settings</h2>
            </div>

            {!showManageOrders && !showManageProducts && !showManageUsers ? (
              <div className="admin-btn-container">
                <Button
                  className="admin-select-btn"
                  onClick={() => setShowManageOrders(!showManageOrders)}
                >
                  Manage orders
                </Button>
                <Button
                  className="admin-select-btn"
                  onClick={() => setShowManageProducts(!showManageProducts)}
                >
                  Manage products
                </Button>
                <Button
                  className="admin-select-btn"
                  onClick={() => setShowManageUsers(!showManageUsers)}
                >
                  Manage users
                </Button>
              </div>
            ) : (
              ""
            )}

            {/* TODO Make it so that once an entity has been searched for, the option to update and delete is right next to it. */}
            {/* For now, keep it like this until admin component is more fleshed out. */}
            {showManageOrders ? (
              <div className="manage-orders-content-container">
                <form
                  onSubmit={searchOrder}
                  className="order-search-wrapper search-wrapper"
                >
                  <div className="order-search-input-wrapper admin-search-input-wrapper">
                    <input
                      type="text"
                      className="order-search-input admin-search-input"
                      name="orderid"
                      placeholder="Search for order by id"
                      onChange={(e) => setOrderIDValue(e.target.value)}
                      value={orderIDValue}
                      required
                    />
                  </div>

                  <div className="manage-orders-btn-wrapper search-btn-wrapper">
                    <Button
                      className="order-search-btn admin-search-btn"
                      type="submit"
                    >
                      <BiSearch className="admin-search-btn-icon" />
                    </Button>
                  </div>
                </form>
                <Button
                  className="manage-orders-btn"
                  onClick={() => getAllOrders()}
                >
                  View all orders
                </Button>

                <form
                  onSubmit={createOrder}
                  className="order-create-wrapper create-wrapper"
                >
                  <div className="order-create-input wrapper admin-create-input-wrapper">
                    {/* TODO Order creation is a bit more complex than other create methods. Needs dropdown or chip select.*/}
                  </div>
                  <div className="create-order-btn-wrapper">
                    <Button className="manage-orders-btn" type="submit">
                      Create a new order
                    </Button>
                  </div>
                </form>

                <Button className="manage-orders-btn">
                  Update an existing order
                </Button>
                <Button
                  className="manage-orders-btn"
                  onClick={() => deleteOrder()}
                >
                  Delete an existing order
                </Button>
              </div>
            ) : null}

            {showManageProducts ? (
              <div className="manage-products-content-container">
                <form
                  onSubmit={searchProduct}
                  className="product-search-wrapper search-wrapper"
                >
                  <div className="product-search-input-wrapper admin-search-input-wrapper">
                    <input
                      type="text"
                      className="product-search-input admin-search-input"
                      name="productid"
                      placeholder="Search for product by id"
                      onChange={(e) => setProductIDValue(e.target.value)}
                      value={productIDValue}
                      required
                    />
                  </div>

                  <div className="manage-products-btn-wrapper search-btn-wrapper">
                    <Button
                      className="product-search-btn admin-search-btn"
                      type="submit"
                    >
                      <BiSearch className="admin-search-btn-icon" />
                    </Button>
                  </div>
                </form>
                <Button
                  className="manage-products-btn"
                  onClick={() => getAllProducts()}
                >
                  View all products
                </Button>
                <Button className="manage-products-btn">
                  Create a new product
                </Button>
                <Button className="manage-products-btn">
                  Update an existing product
                </Button>
                <Button
                  className="manage-products-btn"
                  onClick={() => deleteProduct()}
                >
                  Delete an existing product
                </Button>
              </div>
            ) : null}

            {showManageUsers ? (
              <div className="manage-users-content-container">
                <form
                  onSubmit={searchUser}
                  className="user-search-wrapper search-wrapper"
                >
                  <div className="user-search-input-wrapper admin-search-input-wrapper">
                    <input
                      type="text"
                      className="user-search-input admin-search-input"
                      name="userid"
                      placeholder="Search for user by id"
                      onChange={(e) => setUserIDValue(e.target.value)}
                      value={userIDValue}
                      required
                    />
                  </div>

                  <div className="manage-users-btn-wrapper search-btn-wrapper">
                    <Button
                      className="user-search-btn admin-search-btn"
                      type="submit"
                    >
                      <BiSearch className="admin-search-btn-icon" />
                    </Button>
                  </div>
                </form>
                <Button
                  className="manage-users-btn"
                  onClick={() => getAllUsers()}
                >
                  View all users
                </Button>

                <form
                  onSubmit={createUser}
                  className="user-create-wrapper create-wrapper"
                >
                  <Form.Select>
                    <option>Admin</option>
                    <option>User</option>
                  </Form.Select>

                  {/* <div className="field name-field">
                                        <input type="text" className="first-name-input" name="firstname" placeholder="First name" onChange={e => setCreateUserValues(e.target.value)} value={userIDValue} required  />
                                        <input type="text" className="last-name-input" name="lastname" placeholder="Last name" value={formValues.lastName} onChange={onTextChange} required />
                                    </div>

                                    <div className="field">
                                        <input type="email" className="email" name="email" placeholder="Email" value={formValues.email} onChange={onTextChange} required />
                                    </div>

                                    <div className="field">
                                        <input type="text" className="phone" name="phone" placeholder="Phone number" value={formValues.phone} onChange={onTextChange} required />
                                    </div> */}
                  <Button className="manage-users-btn">
                    Create a new user
                  </Button>
                </form>
                <Button className="manage-users-btn">
                  Update an existing user
                </Button>
                <Button
                  className="manage-users-btn"
                  onClick={() => deleteUser()}
                >
                  Delete an existing user
                </Button>
              </div>
            ) : null}

            {showBackButton ? (
              <Button className="back-btn" onClick={resetView}>
                Back
              </Button>
            ) : null}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AdminModal;
