import React from 'react';
import './Education.css';

const Education = () => {
    const educationList = [
        {
            degree: 'Especialización en Visual Analytics y Big Data',
            institution: 'UNINPAHU - Carrera 16 # 39A-77',
            period: 'En curso - Noviembre 2026',
            type: 'Especialización'
        },
        {
            degree: 'Ingeniero de Software',
            institution: 'UNINPAHU - Carrera 16 # 39A-77',
            period: '08/2024 - 06/2026',
            type: 'Profesional'
        },
        {
            degree: 'Tecnólogo en Análisis y Desarrollo de Software',
            institution: 'SENA - Calle 57 # 8 - 69',
            period: '02/2021 - 06/2024',
            type: 'Tecnología'
        },
        {
            degree: 'Bachiller Académico',
            institution: 'I.E.D FLORIDABLANCA - Engativá',
            period: '01/2017 - 12/2022',
            type: 'Secundaria'
        }
    ];

    return (
        <section id="education" className="section education-section">
            <div className="container">
                <h2 className="section-title">Educación</h2>
                <div className="education-grid">
                    {educationList.map((edu, index) => (
                        <div className="edu-card glass-card" key={index}>
                            <div className="edu-icon-wrapper">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" /></svg>
                            </div>
                            <span className="edu-type">{edu.type}</span>
                            <h3 className="edu-degree">{edu.degree}</h3>
                            <p className="edu-institution">{edu.institution}</p>
                            <div className="edu-period">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                {edu.period}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
