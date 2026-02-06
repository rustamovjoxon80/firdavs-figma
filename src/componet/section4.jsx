import "./Section4.css"
import a12 from "../assets/a12.png"

function Section4  ()  {
    return (
        <div className='section4-container'>
            <div className='section4-text'>
                <h3>Uncover the truth</h3>
                <h1>No more <br />
                    expensive interest</h1>
                <p>See the true cost of your borrowing and get insights on the best <br />
                    way to repay whilst saving on interest fees.</p>
            </div>
            <div className='section4-img'>
                <img src={a12} alt="" />
            </div>
        </div>
    )
}

export default Section4