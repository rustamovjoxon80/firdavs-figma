import React from 'react'
import white from '../assets/white.png'
import white2 from '../assets/white2.png'
import './section11.css'
const Section11 = () => {
    return (
        <>
            <div className="section">
                <div className="wrp">
                    <div className="wrp_text">
                        <h1>Ready to <br />of your <br /> borrowing?</h1>
                        <p>Start your journey towards financial freedom</p>
                        <div className="images">
                            <img src={white} alt="" />
                            <img src={white2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section11