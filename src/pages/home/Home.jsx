import React from 'react'
import { FaRegUser } from "react-icons/fa6";
import { PiToolboxThin } from "react-icons/pi";
import { box, first, logo, profile, second } from '../../assets'
import { LuMoveRight } from "react-icons/lu";
import './Home.scss'
import Nextpage from '../../components/Nextpage';
import Spring from '../../components/Spring';
import Individual from '../../components/Individual';
import History from '../../components/History';
import Follow from '../../components/Follow';
import Map from '../../components/Map';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='headerbackground'>
        <div className='container'>
          <header>
            {/* <div className="header">
              <div className='logo'>
                <img src={logo} alt="" />
              </div>
              <div className='nav'>
                <ul>
                  <NavLink to='katalog'><li>Catalog</li></NavLink>
                  <NavLink to='page3'><li>About Us</li></NavLink>
                  <NavLink to='page4'><li>Contacts</li></NavLink>
                </ul>
                <div className='icons'>
                  <FaRegUser className='profile' />
                  <PiToolboxThin className='box' />
                </div>
              </div>
            </div> */}
            <div className='text'>
              <div className='card1'>
                <img src={first} alt="" />
                <div className='paginate'>
                  <h4>Facial care</h4>
                  <LuMoveRight className='right' />
                </div>
              </div>
              <div className='card2'>
                <h1>MAROON</h1>
                <p>
                  Natural cosmetic
                  for gentle skin care</p>
                <button>More details</button>
              </div>
              <div className='card1'>
                <img src={second} alt="" />
                <div className='paginate'>
                  <h4>Facial care</h4>
                  <LuMoveRight className='right' />
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
      <Nextpage />
      <Spring />
      <Individual />
      <History />
      <Follow />
      <Map />

    </>
  )
}

export default Home