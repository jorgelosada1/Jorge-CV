import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';

const Contact = () => {
    const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [bodyTilt, setBodyTilt] = useState({ x: 0, y: 0 });
    const mascotRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!mascotRef.current) return;

            const rect = mascotRef.current.getBoundingClientRect();
            const mascotCenterX = rect.left + rect.width / 2;
            const mascotCenterY = rect.top + rect.height / 2;

            // Vector from mascot center to cursor
            const dx = e.clientX - mascotCenterX;
            const dy = e.clientY - mascotCenterY;

            // Clamp eye movement to a max of 8px
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxEye = 8;
            const eyeX = dist === 0 ? 0 : (dx / dist) * Math.min(dist * 0.05, maxEye);
            const eyeY = dist === 0 ? 0 : (dy / dist) * Math.min(dist * 0.05, maxEye);

            setEyeOffset({ x: eyeX, y: eyeY });

            // Subtle body tilt
            const tiltX = (dx / window.innerWidth) * 8;
            const tiltY = (dy / window.innerHeight) * 8;
            setBodyTilt({ x: tiltX, y: tiltY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="contact" className="section contact-section">
            <div className="container contact-container">
                <div className="contact-content">
                    <h2 className="section-title" style={{ textAlign: 'left' }}>Contacto</h2>
                    <p className="contact-text">
                        ¿Tienes un proyecto en mente o buscas un desarrollador Frontend apasionado para tu equipo?
                        Me encantaría escuchar tus ideas.
                    </p>

                    <form className="contact-form glass-card" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <input type="text" placeholder="Tu Nombre" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Tu Correo" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Tu Mensaje..." rows="5" required></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                            Enviar Mensaje
                        </button>
                    </form>
                </div>

                <div className="contact-visual">
                    <div
                        className="robot"
                        ref={mascotRef}
                        style={{ transform: `rotateY(${bodyTilt.x}deg) rotateX(${-bodyTilt.y}deg)` }}
                    >
                        {/* Antennae */}
                        <div className="antenna antenna-left">
                            <div className="antenna-tip"></div>
                        </div>
                        <div className="antenna antenna-right">
                            <div className="antenna-tip"></div>
                        </div>

                        {/* Head */}
                        <div className="robot-head glass-card">
                            {/* Screen / Face area */}
                            <div className="robot-screen">
                                <div className="robot-eyes">
                                    <div className={`robot-eye ${isHovering ? 'happy' : ''}`}>
                                        <div
                                            className="robot-pupil"
                                            style={{ transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)` }}
                                        ></div>
                                        <div className="eye-glare"></div>
                                    </div>
                                    <div className={`robot-eye ${isHovering ? 'happy' : ''}`}>
                                        <div
                                            className="robot-pupil"
                                            style={{ transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)` }}
                                        ></div>
                                        <div className="eye-glare"></div>
                                    </div>
                                </div>

                                <div className={`robot-mouth ${isHovering ? 'smiling' : ''}`}>
                                    {!isHovering && (
                                        <>
                                            <div className="mouth-bar"></div>
                                            <div className="mouth-bar"></div>
                                            <div className="mouth-bar"></div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="robot-body glass-card">
                            <div className="robot-chest-light"></div>
                            <div className="robot-code">&lt;/&gt;</div>
                        </div>

                        {/* Arms */}
                        <div className="robot-arm arm-left">
                            <div className="robot-hand"></div>
                        </div>
                        <div className="robot-arm arm-right" style={{ animationDelay: '1s' }}>
                            <div className="robot-hand"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
