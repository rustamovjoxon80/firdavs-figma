import React from 'react';
import './Section6.css';

const Section6 = () => {
  return (
    <section className="section6">
      <div className="section6-container">
        {/* Chap tomon: Matnlar */}
        <div className="section6-content">
          <span className="section6-badge">GET A BIRD'S EYE VIEW</span>
          <h1 className="section6-title">
            Bye, bye, <br /> money anxiety
          </h1>
          <p className="section6-description">
            From the app you can easily see how much you owe, to whom, 
            your current usage, total credit limit, your interest rate and most 
            importantly, how soon you'll have paid everything off, at a glance.
          </p>
          <p className="section6-description">
            It makes budgeting a whole lot easier.
          </p>
        </div>

        {/* O'ng tomon: Bank kartasi */}
        <div className="section6-visual">
          <div className="bank-card">
            <div className="bank-card-header">
              <div className="logo-container">
                {/* Logotip ustida oq fon bo'lmasligi uchun fonsiz SVG ishlatildi */}
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" 
                  alt="Amex" 
                  className="bank-logo-img" 
                />
              </div>
              <div className="bank-name-group">
                <h3>American Express</h3>
                <span>Ending 4139</span>
              </div>
              <div className="card-top-balance">£2,792.70</div>
            </div>

            <div className="bank-card-stats">
              <div className="stat-row">
                <span className="label">Days until due</span>
                <span className="value">21</span>
              </div>
              <div className="stat-row">
                <span className="label">Interest rate</span>
                <span className="value">20.74%</span>
              </div>
              <div className="stat-row">
                <span className="label">Total limit</span>
                <span className="value">£5,000</span>
              </div>
              <div className="stat-row">
                <span className="label">Total used</span>
                <span className="value">£2,792.70</span>
              </div>
              <div className="stat-row">
                <span className="label">Left available</span>
                <span className="value">£2,207.30</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;