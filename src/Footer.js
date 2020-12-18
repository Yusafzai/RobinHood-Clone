import React from 'react';
import './Footer.css';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import Logo from './images/snacks.png';

function Footer() {
    return (
        <div className="footer__wrapper">
        <h1 className="footer__textLeftOne">Nothing</h1>
         <h1 className="footer__line">____________________________________________________________________________________________</h1>
         <p className="footer__paraOne">Robinhood means Robinhood Markets and its in-application and web experiences with its family of wholly owned subsidiaries which includes Robinhood Financial, Robinhood <br/>  Securities, and Robinhood Crypto. <br/>
         <br/>
          All investments involve risks, including the possible loss of capital. <br/>
          <br/>
         Securities trading is offered to self-directed customers by Robinhood Financial. Robinhood Financial is a member of the <a className="Finra" href="https://www.finra.org/"> Financial Industry Regulatory Authority (FINRA).</a></p>
         <a href="https://robinhood.com/us/en/about/#our-products"><h1 className="footer__textOneLeft">Stocks & Funds</h1></a>
         <a href="https://robinhood.com/us/en/about/options/"><h1 className="footer__textTwoLeft">Options</h1></a>
         <a href="https://robinhood.com/us/en/about/gold/"><h1 className="footer__textThirdLeft">Gold</h1></a>
         <a href="https://robinhood.com/us/en/about/cash-management/"><h1 className="footer__textFourthLeft">Cash Management</h1></a>
         <a href="https://robinhood.com/us/en/about/crypto/"><h1 className="footer__textFifthLeft">Crypto</h1></a>

         <a href="https://learn.robinhood.com/"><h1 className="footer__textOneMid">Learn</h1></a>
         <a href="https://robinhood.com/us/en/support/"><h1 className="footer__textTwoMid">Support</h1></a>
         <a href="https://snacks.robinhood.com/"><h1 className="footer__textThirdMid">Snacks</h1></a>

         <a href="https://careers.robinhood.com/"><h1 className="footer__textOneLast">About Us</h1></a>
         <a href="https://careers.robinhood.com/openings"><h1 className="footer__textTwoLast">Careers</h1></a>
         <a href="https://blog.robinhood.com/"><h1 className="footer__textThirdLast">Company News</h1></a>
         <a  className="footer__Linked"  href="https://www.linkedin.com/company/robinhood"><AiFillLinkedin /></a>
         <a  className="footer__Facebook"  href="https://www.facebook.com/robinhoodapp"><FaFacebook /></a>
         <a  className="footer__Insta"  href="https://www.instagram.com/robinhoodapp"><AiOutlineInstagram /></a>
         <a  className="footer__Twitter"  href="https://twitter.com/RobinhoodApp"><FaTwitter /></a>

        <div className="footer__emailButton">
         <input className="footer__email" type="text" placeholder="name@email.com" />
         <button className="footer__subscribe">Subscribe</button>
        </div>
         
        <img className="footer__image" src={Logo} />

        <a href="https://brokercheck.finra.org/"><h1 className="footer__belowOne">Check the background of the firm on FINRA’s BrokerCheck</h1></a>
        <a href="https://cdn.robinhood.com/assets/robinhood/legal/RHF%20Customer%20Relationship%20Summary.pdf"><h1 className="footer__belowTwo">Brokerage Customer Relationship Summary</h1></a>
        <a href="https://cdn.robinhood.com/assets/robinhood/legal/Robinhood%20Terms%20and%20Conditions.pdf"><h1 className="footer__belowThree">Robinhood Terms & Conditions</h1></a>
        <a href="https://robinhood.com/us/en/about/legal/"><h1 className="footer__belowFour">Disclosure Library</h1></a>
        <a href="https://robinhood.com/l/privacy"><h1 className="footer__belowFive">Privacy</h1></a>
        <p className="footer__textGray">The 3-minute newsletter with fresh takes on the financial <br/> news you need to start your day.</p>

         <a  className="footer__Info"  href="/"><AiOutlineInfoCircle size={32}/>&nbsp; View Important Disclosures</a>
         <a href="http://www.savewalterwhite.com/"><h1 className="walter">Donate @SaveWalterWhite</h1></a>
        </div>
    )
}

export default Footer
