import React from 'react';
import "./White.css";
import Laga from './images/Shapes.png';
import { AiOutlineInfoCircle } from 'react-icons/ai';

function White() {
    return (
        <div className="White__wrapper">
              <hr className="white__line" />
              <img className="laga" src={Laga} />
              {/* Top */}
              <h1 className="white__textOne">Introducing Fractional Shares</h1>
              <h2 className="white__textTwo">Invest in thousands of stocks with as little as $1.</h2>
              {/* First */}
              <h1 className="white__groupOne">Invest Any Amount</h1>
              <p className="white__paraOne">Choose how much you want to <br/> invest, and we’ll convert from <br/> dollars to parts of a whole <br/> share.</p>
              {/* Second */}
              <h1 className="white__groupTwo">Build a Balanced Portfolio</h1>
              <p className="white__paraTwo">Customize your portfolio with <br/> pieces of different companies <br/> and funds to help reduce risk.</p>
              {/* Third */}
              <h1 className="white__groupThree">Trade in Real Time</h1>
              <p className="white__paraThree">Trades placed during market <br/> hours are executed at that time, <br/> so you’ll always know the share <br/> price.</p>
              <a  className="white__blur"  href="https://cdn.robinhood.com/assets/robinhood/legal/Addendum%20(FINRA%201-28-20).pdf"><AiOutlineInfoCircle size={32}/>&nbsp; Fractional Shares Disclosure</a>
    

        </div>
    )
}

export default White
