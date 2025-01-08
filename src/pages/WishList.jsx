import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlist, addToCart, removeFromWishlist } = useContext(ShopContext);
  const [size, setSize] = useState('');

 

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-6">Your Wishlist</h1>
        {wishlist.length === 0 ? (
          <p className="text-gray-600">Your wishlist is currently empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
              >
                <div className="w-full h-56 overflow-hidden rounded-md border mb-3">
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                    src={item.image[0]}
                    alt="product"
                  />
                </div>
                <p className="text-sm text-gray-600 mb-2">{item.name}</p>
                <p className="text-md font-semibold text-black mb-3">
                  {item.price} {item.currency}
                </p>

                {/* Ensure sizes is an array before mapping */}
                <div className="flex gap-2">
                  {Array.isArray(item.sizes) && item.sizes.length > 0 ? (
                    item.sizes.map((sizeOption, index) => (
                      <button
                        key={index}
                        onClick={() => setSize(sizeOption)}
                        className={`border rounded-sm py-2 px-4 bg-gray-100 border-solid border-black ${
                          sizeOption === size ? 'bg-black border-[#ff5e14] text-white' : ''
                        }`}
                      >
                        {sizeOption}
                      </button>
                    ))
                  ) : (
                    <p className="text-gray-500">No sizes available</p>
                  )}
                </div>

                <div className="flex justify-between items-center mt-4">
                  <button
                    className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300"
                    onClick={() => addToCart(item.id, size)} // Use selected size here
                  >
                    Add to Cart
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <Link
          to="/products"
          className="mt-10 inline-block bg-gray-700 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300"
        >
          Back to Shopping
        </Link>
      </div>
    </div>
  );
};

export default Wishlist;
