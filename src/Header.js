import React from 'react';
import Logo from './images/Robinhood.svg';
import "./Header.css";

function Header() {
    return (
        <div className="header__wrapper">
           
            {/* logo */}
            <div className="header__logo">
                <a href="/"><img src={Logo} width={160} /></a>
            </div>

           {/* menu */}
           <div className="header__menuItems">
              <a href="https://robinhood.com/us/en/about/#our-products">Products</a>
              <a href="https://learn.robinhood.com/">Learn</a>
              <a href="https://robinhood.com/us/en/support/">Support</a>
              <a href="https://robinhood.com/us/en/about-us/">Who we are</a>
           </div>

        {/* Login */}
        <div className="header__log">
             <a href="https://robinhood.com/login">Log In</a>
        </div>

        {/* SignUp */}
        <div className="header__sign">
        <a href="https://signup.robinhood.com/"><button  class="header__button">Sign Up</button></a>
        </div>

        </div>
    )
}

export default Header
