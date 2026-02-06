import './Section2.css'
import s from "../assets/s.png"
import brain from "../assets/brain.png"

function Section2 (){
  return (
    <>
    <div className="Personal">

      <div className="per-card">

        <h3>"Healing the personal debt market"</h3>

        <div className="info">
          <img src={s} alt="" />
          <p>Sifted</p>
        </div>

      </div> 

      <div className="per-card">
        
        <h3>“If this isn’t the best Fintech glow-up of debt <br /> consolidation, then I don’t know what is”</h3>

        <div className="info">
          <img src={brain} alt="" />
          <p>Fintech Brain Food</p>
        </div>

      </div>

    </div>
        
    </>
  );
};

export default Section2;