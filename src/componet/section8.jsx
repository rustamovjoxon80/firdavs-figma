import React from 'react';
import './Section8.css';
import { RiAppleLine } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa6";



const Section8 = () => {
  const steps = [
    {
      id: 1,
      title: "Download the app",
      description: "Changing lives on iOS, coming soon to Android",
      hasButtons: true,
    },
    {
      id: 2,
      title: "Connect your debts",
      description: "Through our Open Banking partner, Truelayer, you'll be able to add all your credit cards to the app",
      hasButtons: false,
    },
    {
      id: 3,
      title: "Track & pay",
      description: "Make repayments, overpayments and monitor your progress towards financial freedom",
      hasButtons: false,
    },
  ];

  return (
    <section className="section8">
      <div className="section8-container">
        <h2 className="section8-main-title">How to get started</h2>
        
        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.id} className="step-item">
              <div className="step-number-box">
                <span className="step-number">{step.id}</span>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              
              {step.hasButtons && (
                <div className="step-buttons">
                  <button className="app-btn">
                    <i className="fab fa-apple"></i> <RiAppleLine size={22} />Sign up with iOS
                  </button>
                  <button className="app-btn">
                    <i className="fab fa-google"></i> <FaGoogle size={20} /> Join Android waitlist
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section8;