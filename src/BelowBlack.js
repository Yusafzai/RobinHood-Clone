import React from 'react';
import './BelowBlack.css';
import Logo from './images/Phone3.jpg';
import { AiOutlineInfoCircle } from 'react-icons/ai';

function BelowBlack() {
    return (
        <div className="belowblack__wrapper">
             <img className="belowblack__image" src={Logo} />
             <h1 className="belowblack__textTop">Our Products</h1>
             <a href="https://robinhood.com/us/en/about/gold/" className="belowblack__textMidFirst">Cash Management</a>
             <a href="https://robinhood.com/us/en/about/gold/" className="belowblack__textMidSecond">Stocks & Funds</a>
             <a href="https://robinhood.com/us/en/about/options/" className="belowblack__textMidThird">Options</a>
             <a href="https://robinhood.com/us/en/about/gold/" className="belowblack__flipFirst">Gold</a>
             <h1 className="belowblack__flipBlank">|</h1>
             <a href="https://robinhood.com/us/en/about/crypto/" className="belowblack__flipLast">Crypto</a>

             <p className="belowblack__para">Earn 0.30% APY* on your uninvested cash and <br/> get more flexibility with your brokerage account.</p>

             <a href="https://robinhood.com/us/en/about/cash-management/"><button class="belowblack__button">Learn More</button></a>

             <a  className="belowblack__Info"  href="https://cdn.robinhood.com/assets/robinhood/legal/Addendum%20(FINRA%201-28-20).pdf"><AiOutlineInfoCircle size={32}/>&nbsp; Variable APY and Debit Card Disclosures</a>

             <p className="extra">Cash Management offered through Robinhood Financial</p>
        </div>
    )
}

export default BelowBlack
