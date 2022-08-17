import React, { useEffect } from "react";
import { fetchProducts } from "../../slices/productSlice";
import { useDispatch, useSelector } from "react-redux/";
import ProductCard from "./ProductCard";
import "../../styles/card grid/CardGrid.css";

function CardGrid({ products }) {
  const dispatch = useDispatch();
  // can replace products passed in as props
  const storeProducts = useSelector((state) => state.products.products);

  const populateProducts = () => {
    dispatch(fetchProducts());
  };

  useEffect(() => {
    populateProducts();
  }, []);

  return (
    <div className="cardgrid-container">
      {products.map((product) => (
        <span key={product.id}>
          <ProductCard CardImage={product.img} product={product}></ProductCard>
        </span>
      ))}
    </div>
  );
}

export default CardGrid;
