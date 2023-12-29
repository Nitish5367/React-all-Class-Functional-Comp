import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
const Nav = () => {
  return (
    <nav>
        <Link to="/">Product</Link>
        <Link to="/cart">Cart</Link>
    </nav>
  )
}

export default Nav