import React from 'react';
import footer from '.././assets/images/footer.png';

const Footer = () => {
    return (
        <div style={{'background': `url(${footer})`}}>
            <footer class="footer p-10  text-base-content">
            <div>
                <span class="footer-title">Services</span>

            </div>
            <div>
                <span class="footer-title">Company</span>

            </div>
            <div>
                <span class="footer-title">Legal</span>

            </div>
        </footer>
        </div>

    );
};

export default Footer;