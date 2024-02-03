import React from 'react'
import '../pages/home/Home.scss'
import { beshinchi, birinchi, ikkinchi, oltinchi, tortinchi, uchinchi } from '../assets'
const Follow = () => {
    return (
        <div className='follow'>
            <div className='container'>
                <div className='follower'>
                    <div className='section'>
                        <img src={birinchi} alt="" />
                        <img src={ikkinchi} alt="" />
                        <img src={uchinchi} alt="" />
                        <img src={tortinchi} alt="" />
                        <img src={beshinchi} alt="" />
                        <img src={oltinchi} alt="" />
                    </div>
                    <div className='section1'>
                        <h1>Join Us</h1>
                        <p>Follow our account @marooncare and be the first <br /> to know about new products and promotions</p>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Follow