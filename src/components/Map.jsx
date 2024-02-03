import React from 'react'
import { map } from '../assets'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { TbBrandTwitter } from "react-icons/tb";

const Map = () => {
    return (
        <div>
            <div className='individual'>
                <div className="container">
                    <div className='personal'>
                        <div className='card4'>
                            <div className='textlarr'>
                                <h1>Contacts</h1>
                                <h3>Address</h3>
                                <p>Saint Petersburg, st. Bolshaya Konyushennaya, 19</p>
                                <h3>Telephone</h3>
                                <p>+7 (923) 888-90-60</p>
                                <h3>E-mail <br /> info@maroon.ru</h3>
                                <div className='socialmedia'>
                                    <FaFacebookF className='socialmedias' />
                                    <IoLogoInstagram className='socialmedias' />
                                    <TbBrandTwitter className='socialmedias' />
                                </div>
                            </div>
                            <div className='rasm'>
                                <img src={map} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map