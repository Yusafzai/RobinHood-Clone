import React from 'react'
import "./Image.css";
import Logo from './Phone.jpg';
import { AiOutlineInfoCircle } from 'react-icons/ai';

function Image() {
    return (
        <div className="image__wrapper">
            <div className="image__top">
            <img src={Logo} width={1500} />
            <h1 class="top-left">Investing for <br/> Everyone</h1>
            <p className="top-para">Commission-free investing, plus the tools <br/> you need to put your money in motion. Sign <br/> up and get your first stock for free. Certain <br/> limitations apply.</p>
            <button class="image__button">Sign Up</button>
             <a  className="image__info"  href="/"><AiOutlineInfoCircle size={32}/>&nbsp; Free Stock Disclosure</a>
             
            </div>

        </div>
    )
}

export default Image
