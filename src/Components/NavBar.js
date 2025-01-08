import React, { useState, useEffect } from 'react';
import { FaHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {setShowSearch ,cartCount}=useContext(ShopContext);

  const handleNavbarTransparency = () => {
    setIsTransparent(window.scrollY > 50);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleNavbarTransparency);

    return () => {
      window.removeEventListener('scroll', handleNavbarTransparency);
    };
  }, []);

  return (
    <nav className={`navbar ${isTransparent ? 'transparent' : ''}`}>
      <div className="navbar-logo">
        <h2 className="navbar-title">URBAN CART</h2>
      </div>
      <button
        className="mobile-menu-toggle"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
      </button>
      <ul className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <li><a href='/'>Home</a></li>
        <li><a href="/about-us">About Us</a></li>
        <li><a href="/products">Products</a></li>
        <li className="nav-item">
          <p className="nav-link" id="nav-styling"><MdOutlineAccountCircle /></p>
          <ul className="drop-down-menu">
            <li><a href="/account">Account</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </li>
        <li><a href="/wishlist"><FaHeart /></a></li>
        <li className='relative'>
    <a href="/product-cart">
        <LuShoppingCart />
        {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {cartCount}
            </span>
        )}
    </a>
</li>
      </ul>
      <span className="search-icon" id="searchIcon" 
      onClick={()=>setShowSearch(true)}>
        <IoIosSearch />
      </span>
    </nav>
  )
};

export default Navbar;
