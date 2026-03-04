import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ scrolled }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={`navbar ${scrolled ? 'scrolled glass-card' : ''}`}>
            <div className="container nav-container">
                <a href="#home" className="logo text-gradient" onClick={closeMenu}>
                    JL<span className="logo-dot">.</span>
                </a>

                <nav className={`nav-links ${menuOpen ? 'open glass-card' : ''}`}>
                    <a href="#about" onClick={closeMenu}>Sobre Mí</a>
                    <a href="#experience" onClick={closeMenu}>Experiencia</a>
                    <a href="#education" onClick={closeMenu}>Educación</a>
                    <a href="#skills" onClick={closeMenu}>Skills</a>
                    <a href="#projects" onClick={closeMenu}>Proyectos</a>
                    <a href="#contact" className="text-gradient" style={{ fontWeight: 800 }} onClick={closeMenu}>¡Hablemos!</a>
                </nav>

                <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
