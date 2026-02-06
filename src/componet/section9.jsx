import React from 'react'
import './section9.css'
import card from '../assets/card.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import img from '../assets/img.png'
export default function Section9() {
    return (
        <>
            <div className="uptade">
                <h1>The Incredible update</h1>
                <button>view all posts</button>
            </div>
            <p className='p'>Insights on borrowing better, behind the scenes of building Incredible and a whole lot more.</p>

            <div className="container">
                <div className="card">
                    <img src={card} alt="" />
                    <h4>Reframing ambitious <br /> financial goals</h4>
                    <p>As another new year has approached, goal <br /> setting can be scary. However, we take a look at <br /> some ways you can reframe ambitious financial <br /> goals in order to make them more achievable!</p>
                    <div className="img_cont">
                        <img src={img} alt="" />
                        <div className="">
                            <h1>Emma Nunes-Vaz</h1>
                            <p>January 16, 2023</p></div>
                    </div>
                </div>
                <div className="card">
                    <img src={card2} alt="" />
                    <h4>Reframing ambitious <br /> financial goals</h4>
                    <p>As another new year has approached, goal <br /> setting can be scary. However, we take a look at <br /> some ways you can reframe ambitious financial <br /> goals in order to make them more achievable!</p>
                    <div className="img_cont">
                        <img src={img} alt="" />
                        <div className="img_cont_text">
                            <h1>howifundthis</h1>
                            <p>January 9, 2023</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={card3} alt="" />
                    <h4>Reframing ambitious <br /> financial goals</h4>
                    <p>As another new year has approached, goal <br /> setting can be scary. However, we take a look at <br /> some ways you can reframe ambitious financial <br /> goals in order to make them more achievable!</p>
                    <div className="img_cont">
                        <img src={img} alt="" />
                        <div className="img_cont_text">
                            <h1>Emma Nunes-Vaz</h1>
                            <p>January 16, 2023</p>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
