import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProjectItem from '../Components/ProjectItem';

export default function Products() {
  
  const { Products, showSearch, search} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category,setCategory]= useState([]);
  const [subCategory,setSubCategory] = useState([]);
const [sortType, setSortType] = useState('relevant');

  const toggleCategory=(e)=>{
    if (category.includes(e.target.value)) {
    setCategory(prev => prev.filter(item=> item !== e.target.value))  
    }
    else{
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory=(e)=>{
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item=> item !== e.target.value))
  }
  else{
    setSubCategory(prev => [...prev, e.target.value])
  }
  }

 
  const applyFilter = useCallback(() => {
    if (!Array.isArray(Products) || Products.length === 0) return;
    
    let productsCopy = [...Products]; // Ensure you're working with a fresh copy
  
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }
  
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
  
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }
  
    setFilterProducts(productsCopy);
  }, [Products, category, subCategory, search, showSearch]);  // Added all dependencies
  
  const sortProducts = useCallback(() => {
    let sortingProducts = [...filterProducts]; 
  
    switch (sortType) {
      case 'low-high':
        sortingProducts.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        sortingProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        return;
    }
  
    setFilterProducts(sortingProducts);
  }, [filterProducts, sortType]); // Added dependencies
  

  useEffect(() => {
    setFilterProducts(Products);
  }, [Products]);
  

  useEffect(() => {
    applyFilter();
  }, [applyFilter]);
  

  useEffect(() => {
    sortProducts();
  }, [sortProducts]);
  
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 pt-10 border-t border-gray-300 w-[100%] ml-3 bg-white mt-2">
        {/* Filters section */}
        <div className={`p-4 bg-[#ff5e14] rounded-lg shadow-lg text-white ml-2 transition-all duration-300 ${showFilter ? 'h-[450px]' : 'h-[130px] sm:h-[450px]'}`}>
          <p
            className="my-2 text-2xl font-semibold cursor-pointer text-black flex items-center"
            onClick={() => setShowFilter(!showFilter)}
          >
            FILTERS
          </p>
          
          {/* Categories */}
          <div className={`border-t border-white mt-4 pt-4 ${showFilter ? '' : 'hidden sm:block'}`}>
            <p className="mb-3 text-lg font-medium text-black">CATEGORIES</p>
            <div className="flex flex-col gap-1 text-sm font-light">
              <label className="flex gap-2 items-center">
                <input type="checkbox" className="w-4 h-4 accent-white" value="men" onChange={toggleCategory}/> <span>Men</span>
              </label>
              <label className="flex gap-2 items-center">
                <input type="checkbox" className="w-4 h-4 accent-white" value="women" onChange={toggleCategory}/> <span>Women</span>
              </label>
              <label className="flex gap-2 items-center">
                <input type="checkbox" className="w-4 h-4 accent-white" value="kids" onChange={toggleCategory}/> <span>Kids</span>
              </label>
            </div>
          </div>

          {/* Type */}
          <div className={`border-t border-white mt-4 pt-4 ${showFilter ? '' : 'hidden sm:block'}`}>
            <p className="mb-3 text-lg font-medium text-black">TYPE</p>
            <div className="flex flex-col gap-1 text-sm font-light">
              <label className="flex gap-2 items-center">
                <input type="checkbox" className="w-4 h-4 accent-white" value="Topwear" onChange={toggleSubCategory}/> <span>Topwear</span>
              </label>
              <label className="flex gap-2 items-center">
                <input type="checkbox" className="w-4 h-4 accent-white" value="Bottomwear" onChange={toggleSubCategory}/> <span>Bottomwear</span>
              </label>
            </div>
          </div>
        </div>
   

      {/* Products section */}
      <div className="flex-1">
        <div className="flex items-center justify-between bg-[#ffffff] p-6 rounded-lg shadow-lg text-black mb-6">
          <p className="text-2xl font-semibold">Products</p>
          {/* Product sort */}
          <select className="border-2 border-gray-300 text-sm px-2 py-1 rounded-md " onChange={(e)=>setSortType(e.target.value)}>
            <option value="relevant" className='hover:bg-[#ff5e14]'>Sort by: Relevant</option>
            <option value="low-high" className='hover:bg-[#ff5e14]'>Sort by: Low to High</option>
            <option value="high-low" className='hover:bg-[#ff5e14]'>Sort by: High to Low</option>
          </select>
        </div>

        {/* Render products here */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProjectItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
              sizes={item.sizes}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
