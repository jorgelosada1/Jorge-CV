import React from 'react';
import { Tilt } from 'react-tilt';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Marketplace Universitario',
            description: 'Desarrollo Frontend para la plataforma de compra y venta exclusiva de la universidad. Permite a los estudiantes publicar y adquirir artículos académicos de forma segura.',
            tech: ['React', 'CSS Modules', 'Figma', 'API Integration'],
            status: 'En Desarrollo',
            color: '#00f0ff'
        },
        {
            title: 'Pokedex Mobile App',
            description: 'Aplicación móvil interactiva para consultar datos de Pokémon utilizando la PokeAPI. Cuenta con funcionalidades de búsqueda y estadísticas detalladas por criatura.',
            tech: ['React Native', 'JavaScript', 'PokeAPI'],
            status: 'Completado',
            color: '#ff4b4b'
        },
        {
            title: 'Data Dashboard',
            description: 'Dashboard interactivo de prueba para visualizar métricas, utilizando principios de Visual Analytics. Diseñado como proyecto de práctica para la especialización.',
            tech: ['Python', 'Power BI', 'SQL'],
            status: 'Práctica',
            color: '#7000ff'
        }
    ];

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">Proyectos Destacados</h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <Tilt
                            key={index}
                            options={{ max: 15, scale: 1.02, speed: 400 }}
                            className="project-tilt-wrapper"
                        >
                            <div className="project-card glass-card">
                                <div
                                    className="project-status"
                                    style={{ backgroundColor: `${project.color}20`, color: project.color, border: `1px solid ${project.color}50` }}
                                >
                                    {project.status}
                                </div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>

                                <div className="project-tech">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
