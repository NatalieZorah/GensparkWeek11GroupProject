import React from "react";
import "./Home.css";
import CardGrid from "../CardGrid/CardGrid";
import CarouselFade from "../Carousel/Carousel";

const Home = () => {
  return (
    <div className="home-container">

      <CarouselFade />

      <div className="card-grid-container">
        <CardGrid />
      </div>
    </div>
  );
};

export default Home;
