import React from 'react';
import EmailForm from './microcomponents/emailform';


function Footer() {
    return (
        <footer>
            <div className="footer__content">
                <div className='footer__info'>
                    {/* email forms */}
                    <EmailForm />

                    {/* footer links */}
                    <ul className="footer__links">
                        <li><a href="/#">Home</a></li>
                        <li><a href="/#">About</a></li>
                        <li><a href="/#">Contact</a></li>
                    </ul>
                </div>
                <p className='footer_copyright'>Copyright © 2023</p>
            </div>
        </footer>
    );
}

export default Footer;
