import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProductCard from "../ProductCard/ProductCard";
import "./CardGrid.css";
import PlaidJacket from "./../../assets/images/products/plaid-jacket.jpg";
import PlaidBed from "./../../assets/images/products/plaid-bowtie-bed.jpg";
import OliveTurtleneck from "./../../assets/images/products/olive-turtle-neck.jpg";
import LeatherJacket from "./../../assets/images/products/leather-black-motorcycle-jacket.jpg";
import LavendarHoodie from "./../../assets/images/products/lavender-hoodie.jpg";
import SherpaBed from "./../../assets/images/products/large-white-sherpa-bed.jpg";
import ChromeDish from "./../../assets/images/products/chrome-bone-dish.webp";
import PinkNavyTop from "./../../assets/images/products/pink-navy-style-top.webp";

const products = [
  {
    id: 1,
    title: "Jacket",
    description: "Plaid jacket",
    img: PlaidJacket,
  },
  {
    id: 2,
    title: "Bed",
    description: "Fancy Bed",
    img: PlaidBed,
  },
  {
    id: 3,
    title: "Sunglasses",
    description: "Fancy sungladsses",
    img: OliveTurtleneck,
  },
  {
    id: 4,
    title: "Sunglasses",
    description: "Fancy sungladsses",
    img: LeatherJacket,
  },
  {
    id: 5,
    title: "Sunglasses",
    description: "Fancy sungladsses",
    img: LavendarHoodie,
  },
  {
    id: 6,
    title: "Sunglasses",
    description: "Fancy sungladsses",
    img: SherpaBed,
  },
  {
    id: 7,
    title: "Sunglasses",
    description: "Fancy sungladsses",
    img: ChromeDish,
  },
  {
    id: 8,
    title: "Sunglasses",
    description: "Fancy sungladsses",
    img: PinkNavyTop,
  },

function CardGrid() {
  return (
    <div className="cardgrid-container">
      {products.map((product) => (
        <span key={product.id}>
          <ProductCard CardImage={product.img}></ProductCard>
        </span>
      ))}
    </div>
  );
}

export default CardGrid;
