import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from './IMG react/logo3.jpg'
const Nav = ({search, setsearch}) => {
  return (
    <>
    <nav className='Nav'>
    <h2 className='titlelogo'><Link to="/dashboard">Freelancer</Link></h2>
      <ul className='navbar-menu'>
        <li><Link to="/home">Home</Link> </li>
        <li><Link to="/post">Upload</Link> </li>
        <li><Link to="/about">About</Link> </li>
      </ul>
      {/* <img src={logo1} alt="" srcset="" /> */}
   </nav>
  
   </>
  )
}

export default Nav