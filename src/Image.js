import React from 'react'
import "./Image.css";
import Logo from './images/New.png';
import Video from './images/Video.mp4'
import { AiOutlineInfoCircle } from 'react-icons/ai';

function Image() {
    return (
        <div className="image__full">
        <div className="image__wrapper">
            <div className="image__top">
            <img className="image-iphone" src={Logo} alt="iphoneTen" />
            <h1 class="top-left">Investing for <br/> Everyone</h1>
            <p className="top-para">Commission-free investing, plus the tools <br/> you need to put your money in motion. Sign <br/> up and get your first stock for free. Certain <br/> limitations apply.</p>
            <a href="https://signup.robinhood.com/"><button class="image__button">Sign Up</button></a>
             <a  className="image__info"  href="https://rbnhd.co/freestock"><AiOutlineInfoCircle size={32}/>&nbsp; Free Stock Disclosure</a>
            

            </div>
        </div>

         <div className="image__video">
    <video autoPlay loop muted
    style={{
        position: "relative",
        width: "49%",
        height: "72%",
        objectFit: "cover",
        transform: "translate(-50%, -50%)",
        zIndex: "0"
    }}
    >
        <source src={Video} type="video/mp4"/>
    </video>
         </div>
    
        </div>
    )
}

export default Image