import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <p>Copyright © 2023</p>
                <ul className="footer__links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
