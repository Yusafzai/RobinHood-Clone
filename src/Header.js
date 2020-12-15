import React from 'react';
import Logo from './Robinhood.svg';
import "./Header.css";

function Header() {
    return (
        <div className="header__wrapper">
           
            {/* logo */}
            <div className="header__logo">
                <img src={Logo} width={160} />
            </div>

           {/* menu */}
           <div className="header__menuItems">
              <a href="/">Products</a>
              <a href="/">Learn</a>
              <a href="/">Support</a>
              <a href="/">Who we are</a>
           </div>

        {/* Login */}
        <div className="header__log">
             <a href="/">Log In</a>
        </div>

        {/* SignUp */}
        <div className="header__sign">
        <button class="header__button">Sign Up</button>
        </div>

        </div>
    )
}

export default Header
