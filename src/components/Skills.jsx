import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend & Core',
            skills: [
                { name: 'React', level: 90 },
                { name: 'JavaScript / ES6+', level: 85 },
                { name: 'HTML5 & CSS3', level: 95 },
                { name: 'SASS', level: 80 },
                { name: 'Astro', level: 75 }
            ]
        },
        {
            title: 'Backend & Data',
            skills: [
                { name: 'Python', level: 80 },
                { name: 'Bases de Datos SQL', level: 85 },
                { name: 'Bases de Datos NoSQL', level: 75 },
                { name: 'PHP', level: 70 },
                { name: 'Java / Kotlin (Básico)', level: 60 }
            ]
        },
        {
            title: 'Herramientas & Otros',
            skills: [
                { name: 'Git & GitHub', level: 90 },
                { name: 'Figma / Diseño UX/UI', level: 85 },
                { name: 'Docker', level: 70 },
                { name: 'Power BI / Data Analytics', level: 75 },
                { name: 'Inglés (B1 Certificado)', level: 80 }
            ]
        }
    ];

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title">Habilidades y Tecnologías</h2>

                <div className="skills-container">
                    {skillCategories.map((category, index) => (
                        <div className="skill-category glass-card" key={index}>
                            <h3 className="category-title">{category.title}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, i) => (
                                    <div className="skill-item" key={i}>
                                        <div className="skill-info">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percentage">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar-bg">
                                            <div
                                                className="skill-bar-fill"
                                                style={{ width: `${skill.level}%`, animationDelay: `${i * 0.1}s` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
