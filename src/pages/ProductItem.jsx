/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { FaStar } from 'react-icons/fa';
import RelatedProducts from '../Components/RelatedProducts';

const ProductItem = () => {
    const { productsId } = useParams();
    const { Products, currency, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState('');
    const [image, setImage] = useState('');
    const [size, setSize] = useState('');

    // Fetch product data
    const fetchProductsData = async () => {
        const foundProduct = Products.find((item) => item._id === productsId);
        if (foundProduct) {
            setProductData(foundProduct);
            setImage(foundProduct.image[0]); // Default image
        }
    };

    useEffect(() => {
        fetchProductsData();
    }, [productsId, Products]);

    return productData ? (
        <div className="min-h-screen bg-white text-gray-800 p-4">
            <div className="max-w-5xl mx-auto flex flex-col gap-8 md:flex-row">
                {/* Image Section */}
                <div className="flex-1 flex flex-col md:flex-row gap-4 sm:order-1">
                    <div className="flex flex-col-reverse md:flex-row gap-4">
                        {/* Thumbnail List */}
                        <div className="flex sm:flex-row md:flex-col overflow-x-auto md:overflow-y-auto md:h-80 lg:h-[400px] gap-2">
                            {productData.image.map((item, index) => (
                                <img
                                    src={item}
                                    key={index}
                                    alt="Product Thumbnail"
                                    onClick={() => setImage(item)}
                                    className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover cursor-pointer border border-gray-200 rounded-md hover:border-[#ff5e14] transition"
                                />
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className="lg:w-[50vw] md:flex-1">
                            <img
                                src={image}
                                alt="Selected Product"
                                className="w-full h-auto rounded-lg shadow-md lg:max-w-[90%] lg:mx-auto"
                            />
                        </div>
                    </div>
                </div>

                {/* Product Details Section */}
                <div className="order-2 flex-1 flex flex-col gap-4">
                    {/* Product Name */}
                    <h1 className="text-3xl font-bold text-[black]">
                        {productData.name}
                    </h1>
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                        {Array(5)
                            .fill(0)
                            .map((_, i) => (
                                <FaStar key={i} className="text-yellow-500" />
                            ))}
                        <p className="text-gray-600 pl-2">(122)</p>
                    </div>
                    {/* Price */}
                    <p className="text-3xl font-bold text-gray-800">
                        {productData.price} {currency}
                    </p>
                    {/* Description */}
                    <p className="text-gray-600">{productData.description}</p>

                    {/* Select Size Section */}
                    <div className="flex flex-col gap-4 my-4">
                        <p className="text-lg font-medium">Select Size:</p>
                        <div className="flex gap-2">
                            {productData.sizes.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSize(item)}
                                    className={`border rounded-sm py-2 px-4 bg-gray-100 border-solid border-black ${
                                        item === size ? 'bg-black border-[#ff5e14] text-white ' : ''
                                    }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                        
                        <button  onClick={()=>addToCart(productsId, size)} className="w-full md:w-auto bg-[#ff5e14] text-white py-2 px-4 rounded-lg transition ease-in-out duration-300 active:bg-orange-600">Add to Cart</button>
                    </div>
                </div>
            </div>

            {/* Additional Information */}
            <hr className="mt-8 sm:w-[4/5]" />
            <div className="text-sm text-gray-800 mt-5 flex flex-col gap-1">
                <p>100% Original Product</p>
                <p>Cash on delivery is available for this product</p>
                <p>Easy return policy</p>
            </div>

            {/* Description and Reviews Section */}
            <div className="mt-20">
                <div className="flex">
                    <b className="border px-5 text-2xl font-bold">Description:</b>
                    <p className="border px-5 text-sm">Reviews (122)</p>
                </div>
                <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-800">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam delectus tempore soluta asperiores ducimus expedita dolor illo perferendis minima cum porro sequi voluptates alias, qui quasi, perspiciatis corrupti totam animi.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cupiditate laborum animi perspiciatis distinctio deleniti asperiores nulla labore. Iste harum nisi odio quos possimus explicabo sequi dignissimos suscipit ratione sapiente!
                    </p>
                </div>

                {/* Related Products */}
                <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
            </div>
        </div>
    ) : (
        <div className="min-h-screen flex justify-center items-center">
            <p className="text-gray-500">Loading...</p>
        </div>
    );
};

export default ProductItem;
