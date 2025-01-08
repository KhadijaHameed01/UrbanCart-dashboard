import React from 'react';
import { TbBrandFacebook } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className="footer">
      {/* Social Media Icons */}
      <div className="footer-icons-container">
        <ul className="footer-icons-list">
          <li className="footer-icons">
            <a href="https://www.facebook.com/profile.php?id=61555998413259"><TbBrandFacebook /></a>
          </li>
          <li className="footer-icons">
            <a href="https://www.instagram.com/"><IoLogoInstagram /></a>
          </li>
          <li className="footer-icons">
            <a href="https://www.instagram.com/"><BsTwitterX /></a>
          </li>
          <li className="footer-icons">
            <a href="https://www.youtube.com/"><AiOutlineYoutube /></a>
          </li>
          <li className="footer-icons">
            <a href="https://www.pinterest.com/"><FaPinterestP /></a>
          </li>
        </ul>
      </div>

      {/* Email Subscription */}
      <div className="footer-input-box">
        <input type="text" placeholder="Enter your email" />
        <button>SUBSCRIBE</button>
      </div>

      {/* Copyright Line */}
      <span className="footer-copyright">
        © {new Date().getFullYear()} Your Website Name. All Rights Reserved.
      </span>
    </footer>
  );
}
