import React from "react";
import "./Home.css";
import CardGrid from "../CardGrid/CardGrid";
import CarouselFade from "../Carousel/Carousel";
import PlaidJacket from "./../../assets/images/products/plaid-jacket.jpg";
import PlaidBed from "./../../assets/images/products/plaid-bowtie-bed.jpg";
import OliveTurtleneck from "./../../assets/images/products/olive-turtle-neck.jpg";
import LeatherJacket from "./../../assets/images/products/leather-black-motorcycle-jacket.jpg";
import LavenderHoodie from "./../../assets/images/products/lavender-hoodie.jpg";
import SherpaBed from "./../../assets/images/products/large-white-sherpa-bed.jpg";
import ChromeDish from "./../../assets/images/products/chrome-bone-dish.webp";
import PinkNavyTop from "./../../assets/images/products/pink-navy-style-top.webp";

const products = [
  {
    id: 1,
    title: "Jacket",
    description: "Plaid jacket",
    price: 400,
    img: PlaidJacket,
  },
  {
    id: 2,
    title: "Bed",
    description: "Fancy Bed",
    price: 400,
    img: PlaidBed,
  },
  {
    id: 3,
    title: "Olive Turtle Neck",
    description: "For only the most paw-etic",
    price: 400,
    img: OliveTurtleneck,
  },
  {
    id: 4,
    title: "Leather jacket",
    description: "Vegan leather",
    price: 400,
    img: LeatherJacket,
  },
  {
    id: 5,
    title: "Lavender Hoodie",
    description: "The best tint of purple",
    price: 400,
    img: LavenderHoodie,
  },
  {
    id: 6,
    title: "Sherpa Bed",
    description: "Made of the finest sherpa",
    price: 400,
    img: SherpaBed,
  },
  {
    id: 7,
    title: "Chrome dish",
    description: "Dish with chrome finish",
    price: 400,
    img: ChromeDish,
  },
  {
    id: 8,
    title: "Pink Navy Top",
    description: "Pink navy top",
    price: 400,
    img: PinkNavyTop,
  },
];

const Home = () => {
  return (
    <div className="home-container">
      <CarouselFade />

      <div className="card-grid-container pucci-background-color-light">
        <CardGrid products={products} />
      </div>
    </div>
  );
};

export default Home;
