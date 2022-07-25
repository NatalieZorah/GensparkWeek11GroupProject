import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./Adidogs.css";

const products = [
  { id: 1, title: "Jacket", description: "Plaid jacket" },
  { id: 2, title: "Sunglasses", description: "Fancy sungladsses" },
  { id: 3, title: "Sunglasses", description: "Fancy sungladsses" },
  { id: 4, title: "Sunglasses", description: "Fancy sungladsses" },
  { id: 5, title: "Sunglasses", description: "Fancy sungladsses" },
  { id: 6, title: "Sunglasses", description: "Fancy sungladsses" },
  { id: 7, title: "Sunglasses", description: "Fancy sungladsses" },
  { id: 8, title: "Sunglasses", description: "Fancy sungladsses" },
];

const Adidogs = () => {
  return (
    <div className="adidogs-container">
      <div className="adidogs-card-container">
        {products.map((product) => (
          <span key={product.id} className="grid-col-span-2">
            <ProductCard CardImage="https://dummyimage.com/300" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Adidogs;
