import React from 'react'
import Header from '../../components/header/Header'
import { CgArrowLongRightR } from "react-icons/cg";
import { TbArrowLeftRhombus } from "react-icons/tb";
import { p } from '../../assets'

import './Katalog.scss'
import Lastone from '../../components/Lastone';
import Follow from '../../components/Follow';
import Map from '../../components/Map';
const Katalog = () => {
  return (
    <>
      <div className='cardss'>
        <div className='container'>
          <div className='kataloglar'>
            <div className='title'>
              <h1>Catalog</h1>
              <button>Filter</button>
            </div>
            <div className='kard'>
              <div className='kards1'>
                <div className='h1lar'>
                  <h3>Paradise</h3>
                  <h4>590 <img src={p} alt="" /></h4>
                </div>
                <div className='p1lar'>
                  <p>минеральная пудра</p>
                  <p>15g</p>
                </div>
              </div>
              <div className='kards2'>
                <div className='h1lar'>
                  <h3>Paradise</h3>
                  <h4>590 <img src={p} alt="" /></h4>
                </div>
                <div className='p1lar'>
                  <p>минеральная пудра</p>
                  <p>15g</p>
                </div>
              </div>
              <div className='kards3'>
                <div className='h1lar'>
                  <h3>Paradise</h3>
                  <h4>590 <img src={p} alt="" /></h4>
                </div>
                <div className='p1lar'>
                  <p>минеральная пудра</p>
                  <p>15g</p>
                </div>
              </div>
              <div className='kards4'>
                <div className='h1lar'>
                  <h3>Paradise</h3>
                  <h4>590 <img src={p} alt="" /></h4>
                </div>
                <div className='p1lar'>
                  <p>минеральная пудра</p>
                  <p>15g</p>
                </div>
              </div>
              <div className='kards5'>
                <div className='h1lar'>
                  <h3>Paradise</h3>
                  <h4>590 <img src={p} alt="" /></h4>
                </div>
                <div className='p1lar'>
                  <p>минеральная пудра</p>
                  <p>15g</p>
                </div>
              </div>
              <div className='kards6'>
                <div className='h1lar'>
                  <h3>Paradise</h3>
                  <h4>590 <img src={p} alt="" /></h4>
                </div>
                <div className='p1lar'>
                  <p>минеральная пудра</p>
                  <p>15g</p>
                </div>
              </div>
              <div className='kards7'>
                <div className='h1lar'>
                  <h3>Paradise</h3>
                  <h4>590 <img src={p} alt="" /></h4>
                </div>
                <div className='p1lar'>
                  <p>минеральная пудра</p>
                  <p>15g</p>
                </div>
              </div>
              <div className='kards8'>
                <div className='h1lar'>
                  <h3>Paradise</h3>
                  <h4>590 <img src={p} alt="" /></h4>
                </div>
                <div className='p1lar'>
                  <p>минеральная пудра</p>
                  <p>15g</p>
                </div>
              </div>
              <div className='kards9'>
                <div className='h1lar'>
                  <h3>Paradise</h3>
                  <h4>590 <img src={p} alt="" /></h4>
                </div>
                <div className='p1lar'>
                  <p>минеральная пудра</p>
                  <p>15g</p>
                </div>
              </div>
              <div className='kards10'>
                <div className='h1lar'>
                  <h3>Paradise</h3>
                  <h4>590 <img src={p} alt="" /></h4>
                </div>
                <div className='p1lar'>
                  <p>минеральная пудра</p>
                  <p>15g</p>
                </div>
              </div>
              <div className='kards11'>
                <div className='h1lar'>
                  <h3>Paradise</h3>
                  <h4>590 <img src={p} alt="" /></h4>
                </div>
                <div className='p1lar'>
                  <p>минеральная пудра</p>
                  <p>15g</p>
                </div>
              </div>
              <div className='kards12'>
                <div className='h1lar'>
                  <h3>Paradise</h3>
                  <h4>590 <img src={p} alt="" /></h4>
                </div>
                <div className='p1lar'>
                  <p>минеральная пудра</p>
                  <p>15g</p>
                </div>
              </div>
            </div>
            <div className='change'>
              <TbArrowLeftRhombus className='left' />
              <CgArrowLongRightR className='left' />
            </div>
          </div>
        </div>
      </div>
      <Lastone />
      <Follow />
      <Map />
    </>
  )
}

export default Katalog