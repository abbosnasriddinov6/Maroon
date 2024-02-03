import React from 'react'
import './Lastone.scss'
import { p } from '../assets/index'
import { CgArrowLongRightR } from "react-icons/cg";
import { TbArrowLeftRhombus } from "react-icons/tb";
const Lastone = () => {
    return (
        <div className='last'>
            <div className="container">
                <div className="laston">
                    <div className='yozuv'>
                        <h1>Have you watched recently</h1>
                    </div>
                    <div className='lastcards1'>
                        <div className="lastcard1">
                            <div className='hlar'>
                                <h3>Paradise</h3>
                                <h4>590 <img src={p} alt="" /></h4>
                            </div>
                            <div className='plar'>
                                <p>минеральная пудра</p>
                                <p>15g</p>
                            </div>
                        </div>
                        <div className="lastcard2">
                            <div className='hlar'>
                                <h3>Paradise</h3>
                                <h4>590 <img src={p} alt="" /></h4>
                            </div>
                            <div className='plar'>
                                <p>минеральная пудра</p>
                                <p>15g</p>
                            </div>
                        </div>
                        <div className="lastcard3">
                            <div className='hlar'>
                                <h3>Paradise</h3>
                                <h4>590 <img src={p} alt="" /></h4>
                            </div>
                            <div className='plar'>
                                <p>минеральная пудра</p>
                                <p>15g</p>
                            </div>
                        </div>
                        <div className="lastcard4 ">
                            <div className='hlar'>
                                <h3>Paradise</h3>
                                <h4>590 <img src={p} alt="" /></h4>
                            </div>
                            <div className='plar'>
                                <p>минеральная пудра</p>
                                <p>15g</p>
                            </div>
                        </div>
                    </div>
                    <div className='laspagi'>
                        <TbArrowLeftRhombus className='left' />
                        <CgArrowLongRightR className='left' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lastone