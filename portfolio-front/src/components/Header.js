import logoGold from '../images/22-gold-plain.png';

import React from 'react';

function Header() {
    return (
        <div className='header'>
            <header>
                <img src={logoGold} alt='golden logo' />
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;
