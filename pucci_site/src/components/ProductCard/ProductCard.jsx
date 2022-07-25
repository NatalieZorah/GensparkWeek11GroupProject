import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { IoMdHeartEmpty } from "react-icons/io";
import "./ProductCard.css";

const ProductCard = (props) => {
  return (
    <div className="product-card-container">
      <IoMdHeartEmpty className="empty-heart-icon" />
      <Card>
        <Card.Img
          className="card-image-container"
          variant="top"
          src={props.CardImage}
        />
        <Card.Body>
          <Card.Title>Product</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Text>
          <Button variant="outline-dark">Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
