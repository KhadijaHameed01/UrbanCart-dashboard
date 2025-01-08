import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../Components/Title';
import { MdDelete } from 'react-icons/md';
import CartTotal from '../Components/CartTotal';
import { Link } from 'react-router-dom';

export default function Orders() {
  const { Products, cartItem, currency, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const temporaryData = [];
    console.log('cart item', cartItem);

    for (const itemId in cartItem) {
      const sizes = cartItem[itemId];
      for (const size in sizes) {
        if (sizes[size] > 0) {
          temporaryData.push({
            _id: itemId,
            size: size,
            quantity: sizes[size],
          });
        }
      }
    }
    setCartData(temporaryData);
    console.log('temporary data', temporaryData);
  }, [cartItem]);

  return (
    <div className="border-t pt-14 bg-[#ffffff] text-black">
      <div className="text-2xl mb-3">
        <Title text1="YOUR" text2="CART" />
        <div className="space-y-6">
          {cartData.map((item, index) => {
            const productData = Products.find(
              (product) => product._id === item._id
            );
            if (!productData) return null; // Skip rendering if product data is missing

            return (
              <div
                key={index}
                className="flex flex-col border rounded-lg shadow-md p-4"
              >
                {/* Product Image and Details */}
                <div className="flex items-start gap-4">
                  <img
                    src={productData.image[0]}
                    alt=""
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div>
                    <p className="text-lg font-semibold">{productData.name}</p>
                    <p className="text-sm text-gray-700 mt-1">
                      Price: <span className="text-[#ff5e14]">{productData.price}{currency}</span>
                    </p>
                    <p className="text-sm text-gray-700 mt-1">
                      Size: <span className="text-[#ff5e14]">{item.size}</span>
                    </p>
                  </div>
                </div>

                {/* Quantity and Delete Action */}
                <div className="flex items-center justify-between mt-4">
                  <input
                    onChange={(e) =>
                      e.target.value === '' || e.target.value === '0'
                        ? null
                        : updateQuantity(
                            item._id,
                            item.size,
                            Number(e.target.value)
                          )
                    }
                    className="border  border-gray-800 w-20 px-2 py-1 rounded-md text-center"
                    type="number"
                    min={1}
                    defaultValue={item.quantity}
                  />
                  <button
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                    className="text-[#ff5e14] hover:text-red-600 transition"
                  >
                    <MdDelete size={24} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <hr className='bg-gray-500 h-1 w-[35vw] flex justify-end mt-2'/>
          <div className='w-full text-end flex justify-end mt-3'>
                      <Link to={'/place-order'}>
                      <button className='w-full my-8 md:w-auto bg-[#ff5e14] text-white py-2 px-4 rounded-lg transition ease-in-out duration-300 active:bg-orange-600 mt-3'>PROCEED TO CHECKOUT</button>
                      </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
