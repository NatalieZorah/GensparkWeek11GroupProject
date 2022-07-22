import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductCard from '../ProductCard/ProductCard';
import './CardGrid.css';
import ProductService from '../../services/product.service'

const products = [
    {id: 1, title: "Jacket", description: "Plaid jacket", price: "200"},
    {id: 2, title: "Sunglasses", description: "Fancy sungladsses", price: "400"},
    {id: 3, title: "Shoes", description: "Fancy sungladsses", price: "400"},
    {id: 5, title: "Hat", description: "Fancy sungladsses", price: "400"},

];

function CardGrid() {

    return (
        <>
        <Row xs={1} md={2} lg={4}>
            {products.map((product) => 
                <Col key={product.id}>
                    <ProductCard product={product}/>
                </Col>
            )}
        </Row>
        </>
    );
};

export default CardGrid;