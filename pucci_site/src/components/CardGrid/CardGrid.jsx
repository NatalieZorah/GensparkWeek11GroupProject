import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductCard from '../ProductCard/ProductCard';
import './CardGrid.css';
import ProductService from '../../services/product.service'

const products = [
    {id: 1, title: "Jacket", description: "Plaid jacket"},
    {id: 2, title: "Sunglasses", description: "Fancy sungladsses"},
    {id: 3, title: "Sunglasses", description: "Fancy sungladsses"},
    {id: 4, title: "Sunglasses", description: "Fancy sungladsses"},
    {id: 5, title: "Sunglasses", description: "Fancy sungladsses"},
    {id: 6, title: "Sunglasses", description: "Fancy sungladsses"},
    {id: 7, title: "Sunglasses", description: "Fancy sungladsses"},
    {id: 8, title: "Sunglasses", description: "Fancy sungladsses"},
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