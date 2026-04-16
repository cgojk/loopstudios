

import React, { useState}from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"
import logo from "../images/logo.svg";


export default function Navbar() {
  const[menuOpen,setMenuOpen]=useState(false);
  // close the menu when clicking outside


  function handleLinkClick(){
    setMenuOpen(false);
  }
  
 

  return(
<header className="header">
  <div className="sm__container header-inner">

      
      <Link to="/">
        <img src={logo} className="nav-logo" alt="Podcast logo" />
     </Link>

     {/* hamburguer button only visible on mobile */}
     

     <button
      className="menu-btn"
      aria-label="toggle menu"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <FaTimes  /> : <FaBars  />}
    </button>


 {/* Nav list, toggled open on mobile */}
    <nav>
    <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
       <li className="mobile-logo">
        <Link to="/">
          <img src={logo} className="mobile-logo-img" alt="Podcast logo" />
        </Link>
      </li>
             
       <li className="nav-list-item">
      <NavLink 
        to="/about" 
        onClick={handleLinkClick}
        className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}
        // if the link is active then the class active 
      >
        About
      </NavLink>
    </li>
    <li className="nav-list-item">
      <NavLink 
        to="/podcasts" 
        onClick={handleLinkClick}
        className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}
      >
       Careers
      </NavLink>
    </li>
    <li className="nav-list-item">
      <NavLink 
        to="/store" 
        onClick={handleLinkClick}
        className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}
      >
      Events
      </NavLink>
    </li>
    <li className="nav-list-item">
      <NavLink 
        to="/press" 
        onClick={handleLinkClick}
        className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}
      >
        Products
      </NavLink>
    </li>
    <li className="nav-list-item">
      <NavLink 
        to="/contact" 
        onClick={handleLinkClick}
        className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}
      >
      Support
      </NavLink>
    </li>

          
        </ul>
      </nav>
      </div>
    </header>
  );
}

