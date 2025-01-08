import React from 'react';
import './Hero.css'; 
import {assets} from '../assets-urban-gallery/assets'
export default function Hero() {
  return (
    <div className="hero-container">
      {/* Hero left side */}

      <div className="hero-left-side">
        <div className="hero-one-side">
          <div className="hero-second-side">
            <p className="para-side-bar">OUR BESTSELLERS</p>
            <h1 className="heading-side-bar">Latest Arrivals</h1>
            <p className="shop-now">Shop now</p>
          </div>
        </div>
      </div>

      {/* Hero right side */}
      <div className="hero-right-side">
        <img 
          src={assets.ch_1}
          alt="Fashion Model" 
          className="hero-image"
        />
      </div>
    </div>
  );
}

