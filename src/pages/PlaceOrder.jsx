import React, { useState } from "react";
import Title from "../Components/Title";
import CartTotal from "../Components/CartTotal";
import { TbBrandPaypalFilled } from "react-icons/tb";
import { FaStripe } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { Link } from "react-router-dom";

export const PlaceOrder = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const paymentMethods = [
    { id: "paypal", label: "PayPal", logo: <TbBrandPaypalFilled />, color: 'text-blue-500' },
    { id: "stripe", label: "Stripe", logo: <FaStripe />, color: 'text-purple-500' },
    { id: "cod", label: "Cash on Delivery", logo: <BsCashCoin />, color: 'text-gray-500' },
  ];

  const handlePaymentMethodSelection = (id) => {
    setSelectedPaymentMethod(id);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-8 pt-5 sm:pt-14 min-h-[80vh]">
      {/* Left Side */}
      <div className="flex flex-col gap-6 w-full sm:w-1/2">
        {/* Heading */}
        <div className="text-xl sm:text-2xl mb-4">
          <Title text1="DELIVERY" text2="DETAILS" />
        </div>
        {/* Input Fields */}
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="First name"
            className="border border-gray-500 rounded py-3.5 px-2 w-full"
          />
          <input
            type="text"
            placeholder="Last name"
            className="border border-gray-500 rounded py-3.5 px-2 w-full"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-500 rounded py-3.5 px-2 w-full"
        />
        <input
          type="text"
          placeholder="Street address"
          className="border border-gray-500 rounded py-3.5 px-2 w-full"
        />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="City"
            className="border border-gray-500 rounded py-3.5 px-2 w-full"
          />
          <input
            type="text"
            placeholder="State"
            className="border border-gray-500 rounded py-3.5 px-2 w-full"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Zip-code"
            className="border border-gray-500 rounded py-3.5 px-2 w-full"
          />
          <input
            type="text"
            placeholder="Country"
            className="border border-gray-500 rounded py-3.5 px-2 w-full"
          />
        </div>
        <input
          type="number"
          placeholder="Phone Number"
          className="border border-gray-500 rounded py-3.5 px-2 w-full"
        />
      </div>

      {/* Right Side */}
      <div className="flex flex-col gap-10 w-full sm:w-1/2">
        {/* Cart Total */}
        <div>
          <CartTotal />
        </div>
        <hr className='bg-gray-500 h-[2px] w-[48vw] flex justify-end mt-2'/>
        {/* Payment Method */}
        <div>
          <div className="text-xl sm:text-2xl mb-4">
            <Title text1="PAYMENT" text2="METHOD" />
          </div>
          <div className="flex flex-col gap-3 mt-4">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className={`flex items-center gap-4 border p-3 px-4 rounded-md cursor-pointer 
                  ${selectedPaymentMethod === method.id
                    ? "border-green-500 bg-green-50"
                    : "border-gray-300"
                  }`}
                onClick={() => handlePaymentMethodSelection(method.id)}
              >
                {/* Logo */}
                <div className={`text-2xl ${method.color}`}>
                  {method.logo}
                </div>
                {/* Label */}
                <div className="flex items-center gap-2">
                  <p
                    className={`min-w-[14px] h-[14px] border rounded-full flex items-center justify-center 
                      ${selectedPaymentMethod === method.id
                        ? "bg-green-500"
                        : "bg-white"
                      }`}
                  ></p>
                  <span className="text-gray-700 font-medium">
                    {method.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
            <Link to={'/orders'}>
              <div className='w-full text-end flex justify-end mb-3'>
                      <button className='w-[40vw] px-12 py-3 my-8 md:w-auto bg-[#ff5e14] text-white py-2 px-4 rounded-lg transition ease-in-out duration-300 active:bg-orange-600 mt-3'>PLACE ORDER</button>  
            </div>
            </Link>
              </div>
        </div>
    </div>
  );
};

export default PlaceOrder;
