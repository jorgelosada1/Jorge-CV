import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="section-title">Sobre Mí</h2>
                <div className="about-content glass-card">
                    <div className="about-text">
                        <p>
                            ¡Hola! Soy <strong>Jorge Andrés Losada Vargas</strong>, un desarrollador Frontend Junior ubicado en la vibrante ciudad de Bogotá.
                            Tengo una fuerte pasión por la creación de interfaces de usuario modernas, intuitivas y eficientes, donde los detalles
                            y la experiencia del usuario son primordiales.
                        </p>
                        <p>
                            Actualmente me encuentro en la recta final de mi carrera en <strong>Ingeniería de Software</strong> y al mismo tiempo realizando una
                            <strong> Especialización en Visual Analytics y Big Data</strong>. Mi meta es consolidarme en la industria tecnológica,
                            aportando valor desde el primer día y creciendo junto a equipos dinámicos y retadores.
                        </p>
                        <div className="contact-info">
                            <div className="contact-item">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                jorgeandresvargas123@gmail.com
                            </div>
                            <div className="contact-item">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                +57 320 862 0312
                            </div>
                            <div className="contact-item">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                Bogotá, Colombia
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
