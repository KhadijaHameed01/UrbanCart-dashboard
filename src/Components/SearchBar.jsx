import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { IoIosSearch } from 'react-icons/io';
import { RxCross2 } from "react-icons/rx";
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
   const location = useLocation();
   const [visible,setVisible]=useState(false)
   useEffect(()=>{
 if (location.pathname.includes('products') && showSearch) {
setVisible(true);
 }
 else{
    setVisible(false)
 }
   },[location,showSearch]);

    return showSearch && visible ? (
        <div className="w-[90%] mx-auto border border-white rounded-lg shadow-lg bg-white text-center mt-3">
            <div className="inline-flex items-center border border-[#ff5e14] px-5 py-2 my-5 rounded-full w-3/4 sm:w-1/2">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search"
                    className="flex-1 outline-none bg-transparent text-sm text-gray-700 placeholder-gray-500"
                />
                <span className="w-4 text-[#ff5e14] ">
                    <IoIosSearch />
                </span>
            </div>
            <span
                onClick={() => setShowSearch(false)}
                className="inline-block ml-2 cursor-pointer text-[#ff5e14] align-middle"
            >
                <RxCross2 />
            </span>
        </div>
    ) : null;
};

export default SearchBar;
