import React from 'react';
import './Black.css';
import Lege from './Phone2.png';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { AiOutlineArrowDown } from 'react-icons/ai';

function Black() {
    return (
        <div className="black__wrapper">
        
            <div className="black__image">
              <img className="black__phone" src={Lege} />
             </div>
             <div className="black__text">
                 <h1 className="white">Learn As You Grow</h1>
                 <p className="white__para">Our goal is to make investing in financial markets more <br/> affordable, more intuitive, and more fun, no matter how <br/> much experience you have (or don’t have).</p>
                 <a href="/"><AiOutlineArrowUp className="white__arrowUp" /></a>
                 <a className="white__tagOne" href="/" >Learn</a>
                 <a className="white__tagTwo" href="/">Manage</a>
                 <a className="white__tagThree" href="/">Customize</a>
                 <a href="/"><AiOutlineArrowDown className="white__arrowDown" /></a>
             </div>
            
        </div>
    )
}

export default Black
