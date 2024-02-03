import React from 'react'
import '../pages/home/Home.scss'
import { fifth, fourth, third } from '../assets'
import { CgArrowLongRightR } from "react-icons/cg";
import { TbArrowLeftRhombus } from "react-icons/tb";


const Nextpage = () => {
    return (
        <>
            <div className='nextone'>
                <div className="container">
                    <div className='cards'>
                        <div className='pagination'>
                            <div className='texts'>
                                <h2>Bestsellers</h2>
                                <p>Legendary products <br />
                                    won love
                                    our clients</p>
                                <button>See all</button>
                            </div>
                            <div className='cardlar1'>
                            </div>
                            <div className='cardlar2'>
                            </div>
                            <div className='cardlar3'>
                            </div>
                        </div>
                        <div className='pag'>
                            <TbArrowLeftRhombus className='left' />
                            <CgArrowLongRightR className='left' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nextpage