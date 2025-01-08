import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProjectItem from './ProjectItem'
const RelatedProducts = ({category,subCategory}) => {

    const {Products} = useContext(ShopContext);
    const [related,setRelated]=useState([]);

    useEffect(()=>{
        let productsCopy= Products.slice();
    if (Products.length>0) { 
        productsCopy = productsCopy.filter((item)=>category === item.category)
        productsCopy= productsCopy.filter((item)=>subCategory === item.subCategory)
    };
      setRelated(productsCopy.slice(0,5));

    },[Products])
  return (
    <div className='my-4'>
        <div className='text-center text-3xl py-2'>
            <Title text1={'RELATED'} text2={'PRODUCTS'}/> 
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 mt-3'>
            {related.map((item,index)=>{
                  return <ProjectItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            })}
        </div>
    </div>
  )
}

export default RelatedProducts