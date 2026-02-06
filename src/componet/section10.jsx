import React from 'react'
import './section10.css'


const Section10 = () => {
    return (
        <>
            <section className="faq">
                <h2 className="faq-title">
                    Questions we think you’d like answered
                </h2>

                <div className="faq-list">
                    <details className="faq-item">
                        <summary>
                            <span>What is Incredible?</span>
                            <span className="icon"></span>
                        </summary>
                        <p>
                            Incredible is a service that helps you manage your finances more easily.
                        </p>
                    </details>

                    <details className="faq-item">
                        <summary>
                            <span>How does it work</span>
                            <span className="icon"></span>
                        </summary>
                        <p>You connect your bank account and we analyze your data.</p>
                    </details>

                    <details className="faq-item">
                        <summary>
                            <span>Is my credit score affected?</span>
                            <span className="icon"></span>
                        </summary>
                        <p>No, it does not affect your credit score.</p>
                    </details>

                    <details className="faq-item">
                        <summary>
                            <span>Is it secure?</span>
                            <span className="icon"></span>
                        </summary>
                        <p>Yes, we use bank-level encryption.</p>
                    </details>

                    <details className="faq-item">
                        <summary>
                            <span>What is Open Banking?</span>
                            <span className="icon"></span>
                        </summary>
                        <p>It allows secure sharing of financial data.</p>
                    </details>
                </div>
            </section>
        </>
    )
}

export default Section10