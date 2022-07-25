import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { IoMdHeartEmpty } from "react-icons/io";
import './ProductCard.css';
import { useDispatch } from 'react-redux'
import { addToCart } from '../../slices/cartSlice'
import Toast from 'react-bootstrap/Toast';

const ProductCard = (props) => {
  const [show, setShow] = useState(false)
  const dispatch = useDispatch();
  const handleAddToCart = (e) => {
    e.preventDefault()
    dispatch(addToCart(props.product))
    setShow(true)
  }
  return (
    <>
      <div className="product-card-container">
        <IoMdHeartEmpty className="empty-heart-icon" />
        <Card>
          <Card.Img
            className="card-image-container"
            variant="top"
            src={props.CardImage}
          />
          <Card.Body>
            <Card.Title>{props.product.title}</Card.Title>
            <Card.Text>
              {props.product.description}
            </Card.Text>
            <Button variant="outline-dark" onClick={handleAddToCart}>Add to cart</Button>
          </Card.Body>
        </Card>
        <Toast className="toast" onClose={() => setShow(false)} show={show} delay={2000} autohide>
          <Toast.Body>Added {props.product.title} to cart!</Toast.Body>
        </Toast>
      </div>
    </>
  );
};

export default ProductCard;
