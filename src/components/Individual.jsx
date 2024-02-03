import React from 'react'
import '../pages/home/Home.scss'
import { boyoqlar } from '../assets'
const Individual = () => {
    return (
        <>
            <div className='individual'>
                <div className="container">
                    <div className='personal'>
                        <div className='card4'>
                            <div className='textlar'>
                                <h1>Individual care</h1>
                                <p>It is not always obvious what elements <br /> and  minerals the skin needs, and numerous <br /> experiments with different products only <br /> worsen its quality.
                                    <br />
                                    <br />
                                    Fill out the  form and we will select the care that is right for you, taking into account your lifestyle, location and other factors.</p>
                                <button>Fill out the form</button>
                            </div>
                            <div className='rasm'>
                                <img src={boyoqlar} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Individual