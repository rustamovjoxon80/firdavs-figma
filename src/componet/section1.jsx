import './Section1.css'
import final from "../assets/final.png"
import { SiApple } from "react-icons/si";
import { FaGoogle } from "react-icons/fa6";

function Section1 () {
  return (
    <>
    <div className="Final"> 
        <div className="final-text">
            <h1>Finally, an easy way <br /> to manage your <br /> borrowing</h1>
            <p>Pay off loans and credit cards faster, reduce your <br /> interest payments and reclaim your financial freedom.</p>
            <div className="final-btn">
                <button><SiApple /> <p>Sign up with iOS</p></button>
                <button className='google'><FaGoogle /> <p>Join Android waitlist</p></button>
            </div>
        </div>
        <div className="final-img">
            <img src={final} alt="" />
        </div>
    </div>
    </>
  );
};

export default Section1;