import React from 'react'
import './Footer.scss'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { TbBrandTwitter } from "react-icons/tb";
import { logo } from '../../assets'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className='contain'>
          <div className='footext'>
            <div className='llogo'>
              <img src={logo} alt="" />
            </div>
            <div className='nnav'>
              <li>Catalog</li>
              <li>About Us</li>
              <li>Shop</li>
              <li>Contacts</li>
            </div>
            <div className='socials'>
              <FaFacebookF className='socialmedias' />
              <IoLogoInstagram className='socialmedias' />
              <TbBrandTwitter className='socialmedias' />
            </div>
          </div>
          <hr />
          <div className='advertisement'>
            <h3 className='maroon'>Maroon  2020 All rights reserved</h3>
            <h3>Privacy Policy</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer