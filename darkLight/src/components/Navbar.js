import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'; // Assuming you have a CSS file for styling

const Navbar = () => {
  return (
    <div className='nav_container'>
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="logo" style={{ width: '50px', height: '50px' }} />
        <div className='nav_links'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
        <button className='theme_toggle'>Toggle Theme</button>
    </div>
  )
}

export default Navbar