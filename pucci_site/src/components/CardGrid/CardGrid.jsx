import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./CardGrid.css";

function CardGrid({ products }) {
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
