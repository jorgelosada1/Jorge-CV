import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: 'Globant',
            role: 'Frontend Developer (Prácticas)',
            period: 'Completado',
            description: [
                'Desarrollo de interfaces de usuario con React, aplicando buenas prácticas de frontend.',
                'Aprendizaje y uso de nuevas tecnologías, metodologías ágiles y trabajo en equipo en entornos corporativos.',
                'Creación de aplicaciones a medida con PHP, JavaScript, HTML y CSS.',
                'Mantenimiento y mejora de sitios web y aplicaciones.',
                'Diseño y desarrollo de proyectos web y testeo de interfaces de usuario.',
                'Gestión de tareas en Jira y Confluence para seguimiento eficiente.',
                'Desarrollo y mantenimiento de interfaces de usuario en aplicaciones web responsive.'
            ],
            technologies: ['React', 'JavaScript', 'HTML/CSS', 'PHP', 'Agile', 'Jira']
        }
    ];

    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="section-title">Experiencia Profesional</h2>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-content glass-card">
                                <div className="timeline-header">
                                    <h3 className="timeline-role">{exp.role}</h3>
                                    <span className="timeline-period">{exp.period}</span>
                                </div>
                                <h4 className="timeline-company text-gradient">{exp.company}</h4>
                                <ul className="timeline-tasks">
                                    {exp.description.map((task, i) => (
                                        <li key={i}>{task}</li>
                                    ))}
                                </ul>
                                <div className="timeline-tech">
                                    {exp.technologies.map((tech, i) => (
                                        <span className="tech-badge" key={i}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
