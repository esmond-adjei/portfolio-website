import logoGold from '../images/22-choco-plain.png';

import React from 'react';

function Header() {
    return (
    <header>
        <div className='header'>
                <img src={logoGold} alt='golden logo' className='logo' />
                <nav>
                    <ul>
                        <li><a href="#home" className='nav__links'>Home</a></li>
                        <li><a href="#about" className='nav__links'>About</a></li>
                        <li><a href="#portfolio" className='nav__links'>Portfolio</a></li>
                        <li><a href="#contact" className='nav__links'>Contact</a></li>
                    </ul>
                </nav>
        </div>
    </header>
    );
}

export default Header;
