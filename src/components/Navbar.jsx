import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
        <NavLink className="NavLink"  to="/">Home</NavLink>
        <NavLink className="NavLink" to="/posts">Posts</NavLink>
        <NavLink className="NavLink" to="/about">About</NavLink>
        <NavLink className="NavLink" to="/contact">Contact</NavLink>
    </nav>
  )
}

export default Navbar