import "./footer.css";
import soc1 from '../assets/soc1.png'
import soc2 from '../assets/soc2.png'
import soc3 from '../assets/soc3.png'
import soc4 from '../assets/soc4.png'
import btn from '../assets/btn.png'
import btn2 from '../assets/btn2.png'


export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    {/* Left side */}
                    <div className="footer-left">
                        <div className="logo">
                            <span className="logo-icon"></span>
                            <span className="logo-text">Incredible</span>
                        </div>

                        <div className="store-buttons">
                        <img src={btn} alt="" />

                        <img src={btn2} alt="" />
                        </div>

                        <div className="socials">
                            <img src={soc1} alt="" />
                            <img src={soc2} alt="" />
                            <img src={soc3} alt="" />
                            <img src={soc4} alt="" />
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="footer-right">
                        <div className="footer-col">
                            <a>Careers</a>
                            <a>
                                API <span className="badge">New</span>
                            </a>
                        </div>

                        <div className="footer-col">
                            <a>Blog</a>
                            <a>Community</a>
                            <a>Contact us</a>
                        </div>
                    </div>
                </div>

                <div className="footer-divider" />

                <div className="footer-bottom">
                    <div className="legal">
                        <p>
                            Incredible is a trading name of Incredible Technologies LTD, a
                            company registered in England and Wales (No. 13469248).
                            Incredible is registered with the Financial Conduct Authority
                            (FCA) (firm reference 903068) as an EMD Agent appointed by
                            TrueLayer Limited (firm reference 901096). Incredible is seeking
                            further regulatory approval from the Financial Conduct Authority
                            and some of the information on this website exists solely for
                            marketing purposes.
                        </p>

                        <p>
                            *The example assumes you have a credit card balance of £2,100
                            with an interest rate of 21% and making minimum repayments.
                            Rounding up £5 per week and paying the total towards your monthly
                            credit card bill.
                        </p>

                        <p>© 2023 Incredible Technologies Ltd.</p>
                    </div>

                    <div className="privacy">Privacy & Cookies</div>
                </div>
            </div>
        </footer>
    );
}
