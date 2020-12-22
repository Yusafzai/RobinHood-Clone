import React from 'react';
import "./Second.css";
import { AiOutlineInfoCircle } from 'react-icons/ai';

function Second() {
    return (
        <div className="second__wrapper">
            
        
            <h1 className="second__textOne">Break Free from Commission Fees</h1>
            <p className="second__paraOne">Make unlimited commission-free trades in stocks, ETFs, and options with <br/>&nbsp; &nbsp; Robinhood Financial, as well as buy and sell cryptocurrencies with <br/>&nbsp; &nbsp; Robinhood Crypto. See our <a className="second__link" href="https://cdn.robinhood.com/assets/robinhood/legal/RHF%20Fee%20Schedule.pdf">fee schedule</a> to learn more about cost.</p>
            <a  className="second__last"  href="https://rbnhd.co/freestock"><AiOutlineInfoCircle size={32}/>&nbsp; Commissions Disclosure</a>
            <h1 className="second__line" >_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________</h1>
      

        </div>
    )
}

export default Second
