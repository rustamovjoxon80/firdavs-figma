import './Section3.css'

import per1 from "../assets/per1.png"
import per2 from "../assets/per2.png"
import per3 from "../assets/per3.png"

function Section3 (){
  return (
    <>
    <div className="Simple">
        <h1>Simpler. Smarter. Smoother.</h1>
        <pre>Let our tech do the work, you just enjoy the power of control.</pre>

        <div className="s-wrapper">

            <div className="s-card">

                <div className="s-img">
                <img src={per1} alt="" />
                </div>

                <div className="s-text">
                    <h3>One home for all debts</h3>
                    <p>Full visibility on all your accounts, <br /> under one roof, with one aim - to give <br /> you control.</p>
                </div>

            </div>
 
            <div className="s-card">

                <div className="s-img">
                <img src={per2} alt="" />
                </div>

                <div className="s-text">
                    <h3>Crystal clear clarity</h3>
                    <p>Effortlessly monitor your cost of debt and <br /> get insights that will help you find smarter <br /> opportunities to save.</p>
                </div>

            </div>

            <div className="s-card">

                <div className="s-img">
                <img src={per3} alt="" />
                </div>

                <div className="s-text">
                    <h3>Influence your future</h3>
                    <p>Easily see how changing your <br /> repayments impacts your future. The <br /> power is in the palm of your hand.</p>
                </div>
                
            </div>

        </div>

    </div>
    </>
  );
};

export default Section3;