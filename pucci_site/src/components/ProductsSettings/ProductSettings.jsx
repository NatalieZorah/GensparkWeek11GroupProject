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