import React, { useState } from 'react';
import './Section7.css';
import card2 from "../assets/card2.png"

const Section7 = () => {
  const [banks, setBanks] = useState([
    { 
      id: 1, 
      name: 'Bank of Scotland', 
      logo: 'https://logo.clearbit.com/bankofscotland.co.uk', 
      active: true 
    },
    { 
      id: 2, 
      name: 'Halifax', 
      logo: 'https://logo.clearbit.com/halifax.co.uk', 
      active: false 
    },
    { 
      id: 3, 
      name: 'NatWest', 
      logo: 'https://logo.clearbit.com/natwest.com', 
      active: false 
    },
    { 
      id: 4, 
      name: 'Ulster Bank', 
      logo: 'https://logo.clearbit.com/ulsterbank.com', 
      active: true 
    },
    { 
      id: 5, 
      name: 'Zopa', 
      logo: 'https://logo.clearbit.com/zopa.com', 
      active: false 
    },
  ]);

  const toggleBank = (id) => {
    setBanks(banks.map(bank => 
      bank.id === id ? { ...bank, active: !bank.active } : bank
    ));
  };

  return (
    <section className="section7">
      <div className="section7-container">
        
      <img src={card2} alt="" />

        <div className="section7-content">
          <span className="section7-badge">SIMPLIFY THE PROCESS</span>
          <h1 className="section7-title">
            One. <br /> Monthly. <br /> Payment.
          </h1>
          <p className="section7-text">
            Free yourself from the tedious routine of paying down multiple 
            loans and credit cards every month.
          </p>
          <p className="section7-text">
            Set up a single payment to Incredible, and we'll pay down your 
            loans and credit cards in the most cost-effective way.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Section7;