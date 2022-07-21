import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { IoMdHeartEmpty } from "react-icons/io";
import './ProductCard.css';
import {useDispatch} from 'react-redux'
import {addToCart} from '../../slices/cartSlice'

function ProductCard(props) {
  const dispatch = useDispatch();
  return (
    <>
      <IoMdHeartEmpty className="empty-heart-icon" />
      <Card>
        <Card.Img variant="top" src="https://dummyimage.com/300" />
        <Card.Body>
          <Card.Title>{props.product.title}</Card.Title>
          <Card.Text>
            {props.product.description}
          </Card.Text>
          <Button variant="outline-dark" onClick={() => dispatch(addToCart(props.product))}>Add to cart</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProductCard;