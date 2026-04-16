import React, { useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookSquare, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";
import logo from "../images/logo.svg";



export default function Footer() {
  

  return (

     

<section className="footer__container">

    <div className="footer__image_links">
        <div className="imagen__footer__container">
           <Link to="/">
           <img src={logo} className="footer-logo" alt="Podcast logo" />
          </Link>
    </div>
    <nav className="footer__nav">
        <ul className="nav-footer-list">
           
            <li><Link to="/about" className="nav-footer-item">About</Link></li>
            <li><Link to="/careers" className="nav-footer-item">Careers</Link></li>
            <li><Link to="/events" className="nav-footer-item">Events</Link></li>
            <li><Link to="/products" className="nav-footer-item">Products</Link></li>
            <li><Link to="/support" className="nav-footer-item">Support</Link></li>
        </ul>
    </nav>
    </div>



     
    <div className="footer_social__copyright">

        <div className="footer__socials">
            <a href="https://www.facebook.com/loopstudios" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare className="footer__social-icon"/>

            </a>
            <a href="https://www.twitter.com/loopstudios" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="footer__social-icon"/>
            </a>
            <a href="https://www.pinterest.com/loopstudios" target="_blank" rel="noopener noreferrer">
                <FaPinterest className="footer__social-icon"/>
            </a>
            <a href="https://www.instagram.com/loopstudios" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="footer__social-icon"/>
            </a>

        </div>
        <div className="copyright">
            Copyright 2026 Loopstudios. All rights reserved
        </div>
    </div>
    </section>

  );
}

