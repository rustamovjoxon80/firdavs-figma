import React from 'react';
import './Section5.css';

const transactions = [
  { id: 1, name: 'Starbucks', amount: '£5.00', rounded: '30p rounded up', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png' },
  { id: 2, name: 'Amazon', amount: '£34.20', rounded: '80p rounded up', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { id: 3, name: 'McDonalds', amount: '£12.40', rounded: '60p rounded up', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg' },
  { id: 4, name: 'Nike', amount: '£132.10', rounded: '90p rounded up', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg' },
];

const Section5 = () => {
  return (
    <section className="section5">
      <div className="section5__container">
        
        <div className="section5__cards">
          {transactions.map((item) => (
            <div key={item.id} className="section5__card">
              <div className="section5__card-left">
                <div className="section5__logo-wrapper">
                  <img src={item.logo} alt={item.name} className="section5__logo" />
                </div>
                <span className="section5__brand">{item.name}</span>
              </div>
              <div className="section5__card-right">
                <div className="section5__amount">{item.amount}</div>
                <div className="section5__rounded">{item.rounded}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="section5__content">
          <span className="section5__badge">EVERY PENNY COUNTS</span>
          <h2 className="section5__title">Small change, <br /> big impact.</h2>
          <div className="section5__text-group">
            <p className="section5__desc">
              Effortlessly round up your daily spending like your morning coffee 
              to the nearest pound and automatically pay towards your debt.
            </p>
            <p className="section5__desc section5__desc--bold">
              Rounding up just £5 a week could save you ~£3,000 in interest 
              and reduce your time in debt by 6 years!*
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section5;