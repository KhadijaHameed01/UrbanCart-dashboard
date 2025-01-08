import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../Components/Title";

const Orders = () => {
    const { currency, Products, delivery_fee } = useContext(ShopContext);
    const [cartProducts, setCartProducts] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    useEffect(() => {
      const storedCart = JSON.parse(localStorage.getItem("cartItem")) || {};
      const processedProducts = [];
      let calculatedTotal = 0;
  
      for (const productId in storedCart) {
          const product = Products.find((p) => p._id === productId);
          if (!product) continue;
  
          const sizes = [];
          let totalQuantity = 0;
  
          for (const size in storedCart[productId]) {
              if (storedCart[productId][size] > 0) { // Only process valid quantities
                  sizes.push({ size, quantity: storedCart[productId][size] });
                  totalQuantity += storedCart[productId][size];
                  calculatedTotal += product.price * storedCart[productId][size];
              }
          }
  
          // Only add the product if there are valid sizes
          if (sizes.length > 0) {
              processedProducts.push({
                  ...product,
                  sizes,
                  totalQuantity,
              });
          }
      }
  
      setCartProducts(processedProducts);
      setTotalAmount(calculatedTotal + delivery_fee); // Include delivery fee
  }, [Products, delivery_fee]);
  

    return (
        <div className="bg-white border-t pt-16">
            <div className="text-2xl text-center mb-8">
                <Title text1="MY" text2="ORDERS" />
            </div>

            <div className="max-w-4xl mx-auto px-4">
                {cartProducts.length > 0 ? (
                    cartProducts.map((item, index) => (
                        <div
                            key={index}
                            className="py-6 border-t border-gray-300 text-gray-800 flex flex-col md:flex-row md:items-center gap-6"
                        >
                            {/* Product Image and Details */}
                            <div className="flex gap-6 items-start w-full md:w-3/4">
                                <img
                                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
                                    src={item.image[0]}
                                    alt={item.name}
                                />
                                <div>
                                    <h1 className="text-xl sm:text-2xl font-semibold text-black">
                                        {item.name}
                                    </h1>
                                    <div className="flex flex-col mt-2 text-gray-700 text-sm sm:text-base">
                                        <p className="font-medium">
                                            Price: {currency}{item.price}
                                        </p>
                                        <p>Total Quantity: {item.totalQuantity}</p>
                                        <p>
                                            Sizes:{" "}
                                            {item.sizes
                                                .map((sizeInfo) => `${sizeInfo.size}: ${sizeInfo.quantity}`)
                                                .join(", ")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">Your cart is empty.</p>
                )}
                <div className="mt-8 text-right">
                    <p className="text-xl font-semibold">
                        Total Amount: {currency}{totalAmount}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Orders;
