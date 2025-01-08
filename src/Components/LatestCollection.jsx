import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProjectItem from './ProjectItem';
export default function LatestCollection() {
  
  const {Products}= useContext(ShopContext);
 const [latestProducts,setLatestProducts]=useState([]);
  useEffect(() => {
    setLatestProducts(Products);
  }, [Products]);
  
  
  
  
  
    return (
<>
  <div className="my-6 px-4 lg:px-12">
    <div className="flex justify-center items-center text-center">
      <Title text1={'LATEST'} text2={'COLLECTION'} />
    </div>
    {/* Rendering products */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-8 mb-8 mt-4">
      {latestProducts.map((item, index) => (
        <ProjectItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} sizes={item.sizes} />
      ))}
    </div>
  </div>
</>

  )
}
