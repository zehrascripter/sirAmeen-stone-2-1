'use client';
// E:\giaic Q-2\milestone-3\src\app\components\Navbar.tsx
import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Importing custom CSS
import { AlignJustify, Search } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu on scroll
  const handleScroll = () => {
    if (isOpen) {
      setIsOpen(false); // Close menu on scroll
    }
  };

  // Add scroll event listener on component mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on component unmount
    };
  }, [isOpen]); // Only re-attach listener when isOpen changes

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src="/images/logoo.png" alt="Logo" className="logo" />
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <div className='search-container'>
          <li className='search'><input type="text" placeholder="  Search" /></li>
          <Search className='search-icon'/>
          </div>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/outfits">Outfits</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          <AlignJustify />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
