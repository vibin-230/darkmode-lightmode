import React from "react";
import HomeImage from "../assets/homeImage.jpg";
import FloatingImage1 from "../assets/homefloatingimage1.png";
import "./Home.css";

export const Home = () => {
  return (
    <div className="title-group">
      <h1>Custom title here</h1>
      <div className="homeImage-container">
        <img src={HomeImage} className="homeImage" />
        <img src={FloatingImage1} className="floatingImage1" />
      </div>
      <h2>Welcome to the website</h2>
    </div>
  );
};
