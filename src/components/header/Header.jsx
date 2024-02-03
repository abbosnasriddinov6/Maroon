import React from 'react'
import './Header.scss'
import { logo } from '../../assets'
import { FaRegUser } from "react-icons/fa6";
import { PiToolboxThin } from "react-icons/pi";
import { NavLink } from 'react-router-dom';



const Header = () => {
  return (
    <div className='headerr'>
      <div className="container">
        <div className='links'>
          <div className='logo'>
            <img src={logo} alt="" />
          </div>
          <div className='nav'>
            <ul>
              <NavLink to='/'><li>Home</li></NavLink>
              <NavLink to='katalog'><li>Catalog</li></NavLink>
              <NavLink to='page3'><li>About Us</li></NavLink>
              <NavLink to='page4'><li>Contacts</li></NavLink>
            </ul>
            <div className='icons'>
              <FaRegUser className='profile' />
              <PiToolboxThin className='box' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header