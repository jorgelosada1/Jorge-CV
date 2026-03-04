import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-content">
                    <div className="footer-brand text-gradient">JL.</div>
                    <p className="footer-copyright">
                        &copy; {new Date().getFullYear()} Jorge Andrés Losada Vargas. Todos los derechos reservados.
                    </p>
                    <div className="footer-socials">
                        <a href="https://github.com/jorgelosada1" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/jorge-andres-losada-vargas/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
