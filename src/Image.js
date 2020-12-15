import React from 'react'
import "./Image.css";
import Logo from './Phone.jpg';
import Laga from './Empty.jpg';
import { AiOutlineInfoCircle } from 'react-icons/ai';

function Image() {
    return (
        <div className="image__full">
        <div className="image__wrapper">
            <div className="image__top">
            <img src={Logo} />
            <h1 class="top-left">Investing for <br/> Everyone</h1>
            <p className="top-para">Commission-free investing, plus the tools <br/> you need to put your money in motion. Sign <br/> up and get your first stock for free. Certain <br/> limitations apply.</p>
            <button class="image__button">Sign Up</button>
             <a  className="image__info"  href="/"><AiOutlineInfoCircle size={32}/>&nbsp; Free Stock Disclosure</a>
            </div>
        </div>

        <div className="image__below">
            <h1 className="image__belowText">Break Free from Commission Fees</h1>
            <p className="image__belowPara">Make unlimited commission-free trades in stocks, ETFs, and options with <br/>&nbsp; &nbsp; Robinhood Financial, as well as buy and sell cryptocurrencies with <br/>&nbsp; &nbsp; Robinhood Crypto. See our <a className="fee__tag" href="/">fee schedule</a> to learn more about cost.</p>
            <a  className="image__belowInfo"  href="/"><AiOutlineInfoCircle size={32}/>&nbsp; Commissions Disclosure</a>
        </div>

        <div className="image__end">
              <img src={Laga} />
              {/* Top */}
              <h1 className="image__endText">Introducing Fractional Shares</h1>
              <h2 className="image__endPara">Invest in thousands of stocks with as little as $1.</h2>
              {/* First */}
              <h1 className="image__endTextTwo">Invest Any Amount</h1>
              <p className="image__endParaTwo">Choose how much you want to <br/> invest, and we’ll convert from <br/> dollars to parts of a whole <br/> share.</p>
              {/* Second */}
              <h1 className="image__endTextThree">Build a Balanced Portfolio</h1>
              <p className="image__endParaThree">Customize your portfolio with <br/> pieces of different companies <br/> and funds to help reduce risk.</p>
              {/* Third */}
              <h1 className="image__endTextFour">Trade in Real Time</h1>
              <p className="image__endParaFour">Trades placed during market <br/> hours are executed at that time, <br/> so you’ll always know the share <br/> price.</p>
              <a  className="image__endLink"  href="/"><AiOutlineInfoCircle size={32}/>&nbsp; Fractional Shares Disclosure</a>
        </div>
        </div>
    )
}

export default Image
