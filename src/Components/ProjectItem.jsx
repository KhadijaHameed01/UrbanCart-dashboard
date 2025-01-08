import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";

const ProjectItem = ({ id, image, name, price, sizes }) => {
  const { currency, addToWishlist } = useContext(ShopContext);

  const handleAddToWishlist = (e) => {
    e.preventDefault(); // Prevent navigation when button is clicked
    addToWishlist({ id, image, name, price, currency,sizes });
    
  };

  return (
    <div className="w-60 bg-white shadow-md rounded-lg p-4 border border-gray-200 gap-2 mr-8">
      <Link
        className="text-gray-800 hover:text-gray-900 transition duration-300 ease-in-out"
        to={`/products/${id}`}
      >
        <div className="w-full h-56 overflow-hidden rounded-md border mb-3">
          <img
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
            src={image[0]}
            alt="product"
          />
        </div>
        <p className="text-sm text-gray-600 mb-2">{name}</p>
        <p className="text-md font-semibold text-black mb-3">
          {price}
          {currency}
        </p>
      </Link>
      <button
        className="text-red-500 text-2xl hover:text-red-600 transition-colors duration-300"
        onClick={handleAddToWishlist}
      >
        <FaHeart />
      </button>
    </div>
  );
};

export default ProjectItem;
