import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext';
import ProjectItem from './ProjectItem';
const BestSelling = () => {
    const {Products}= useContext(ShopContext);
const [bestselling,setBestselling]=useState([]);


useEffect(()=>{
const bestProducts= Products.filter((item)=>(item.bestSeller));
setBestselling(bestProducts.slice(0,5));
},[Products])



  return (
    
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
      <Title text1={'BEST'} text2={'SELLINGS'}/>
    
  <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-grey-800 ml-60 '>
    These are highly recommended and best selling products</p>
    {/* rendering products */}
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-8 my-12'>
   {bestselling.map((item,index)=>(
    <ProjectItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
   ))}

  </div>
    </div>
     </div>
 
   
  )
}

export default BestSelling
