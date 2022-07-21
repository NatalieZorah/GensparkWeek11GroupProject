import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { IoMdHeartEmpty } from "react-icons/io";
import './ProductCard.css';
import {useDispatch} from 'react-redux'
import {addToCart} from '../../slices/cartSlice'
<<<<<<< refs/remotes/awsaylot/main
import Toast from 'react-bootstrap/Toast';

function ProductCard(props) {
  const [show, setShow] = useState(false)
  const dispatch = useDispatch();
  const handleAddToCart = (e) => {
    e.preventDefault()
    dispatch(addToCart(props.product))
    setShow(true)
  }
=======

function ProductCard(props) {
  const dispatch = useDispatch();
>>>>>>> adding cart and redux
  return (
    <>
      <IoMdHeartEmpty className="empty-heart-icon" />
      <Toast className="toast" onClose={() => setShow(false)} show={show} delay={2000} autohide>
        <Toast.Body>Added {props.product.title} to cart!</Toast.Body>
      </Toast>
      <Card>
        <Card.Img variant="top" src="https://dummyimage.com/300" />
        <Card.Body>
          <Card.Title>{props.product.title}</Card.Title>
          <Card.Text>
            {props.product.description}
          </Card.Text>
<<<<<<< refs/remotes/awsaylot/main
          <Button variant="outline-dark" onClick={handleAddToCart}>Add to cart</Button>
=======
          <Button variant="outline-dark" onClick={() => dispatch(addToCart(props.product))}>Add to cart</Button>
>>>>>>> adding cart and redux
        </Card.Body>
      </Card>
    </>
  );
}

export default ProductCard;