import React from 'react';
import { Link } from 'react-router-dom';
import Timeline from '../timeline';
import ProjectCard from '../projects/ProjectCard';
import aboutContent from '../../data/aboutContent';
import { projects } from '../../data/projectsData';

const AboutPage = () => {
    return(
        <section className="section about" style={{maxWidth: '900px', margin: '0 auto', paddingTop: '2.5rem', display: 'flex', flexDirection: 'column'}}>
            <h1>{aboutContent.title}</h1>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img src="/images/profile.jpg" alt={aboutContent.name} style={{width: '220px', height: '220px', borderRadius: '50%', objectFit: 'cover', border: '4px solid var(--border-subtle)', boxShadow: '0 4px 24px rgba(0,0,0,0.18)', marginBottom: '2rem'}} />
                <div style={{textAlign: 'center'}}>
                    <div style={{fontWeight: 600, fontSize: '2.3rem', color: 'var(--text-main)', marginBottom: '0.7rem', fontFamily: 'var(--font-body)'}}>{aboutContent.name}</div>
                    <div style={{fontSize: '1.1rem', color: 'var(--text-secondary)', opacity: 0.85, fontStyle: 'italic', marginBottom: '2.2rem', fontFamily: 'var(--font-body)'}}>{aboutContent.role}</div>
                </div>
            </div>
            
            {/* First section */}
            <div style={{marginTop: '0.5rem', color: 'var(--text-main)', fontSize: '1.08rem', lineHeight: 1.7, textAlign: 'justify', fontFamily: 'var(--font-body)', width: '100%'}}>
                <h2>{aboutContent.sections[0].title}</h2>
                {aboutContent.sections[0].paragraphs.map((paragraph, index) => (
                    <p key={index} style={{marginBottom: index < aboutContent.sections[0].paragraphs.length - 1 ? '1.1rem' : 0}}>
                        {paragraph}
                    </p>
                ))}
            </div>
            
            {/* Timeline */}
            <div className="timeline-wrapper" style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '2.5rem'}}>
                <Timeline data={aboutContent.timelineData} />
            </div>
            
            {/* Projects sections */}
            <div style={{marginTop: '2.5rem', color: 'var(--text-main)', fontSize: '1.08rem', lineHeight: 1.7, textAlign: 'justify', fontFamily: 'var(--font-body)', width: '100%'}}>
                {aboutContent.sections.slice(1).map((section, sectionIndex) => (
                    <React.Fragment key={sectionIndex}>
                        {section.title === "Projects" ? (
                            <>
                                <h2>
                                    <Link to="/projects" style={{color: 'var(--text-main)', textDecoration: 'none', display: 'flex', alignItems: 'center'}}>
                                        {section.title}
                                        <span style={{marginLeft: '10px', fontSize: '0.8em', color: 'var(--accent)'}}>&#10132;</span>
                                    </Link>
                                </h2>
                                {section.paragraphs.map((paragraph, paraIndex) => (
                                    <p key={paraIndex} style={{marginBottom: paraIndex < section.paragraphs.length - 1 ? '1.1rem' : 0}}>
                                        {paragraph}
                                    </p>
                                ))}
                                <div style={{marginTop: '1.5rem', marginBottom: '2rem'}}>
                                    {projects.find(project => project.id === 'wikipedia-bias') && 
                                      <ProjectCard {...projects.find(project => project.id === 'wikipedia-bias')} />
                                    }
                                    {projects.find(project => project.id === 'CT213') && 
                                      <ProjectCard {...projects.find(project => project.id === 'CT213')} />
                                    }
                                </div>
                            </>
                        ) : (
                            <>
                                <h2>{section.title}</h2>
                                {section.paragraphs.map((paragraph, paraIndex) => (
                                    <p key={paraIndex} style={{marginBottom: paraIndex < section.paragraphs.length - 1 ? '1.1rem' : 0}}>
                                        {paragraph}
                                    </p>
                                ))}
                            </>
                        )}
                        
                        {/* Contact Info */}
                        {section.contactInfo && (
                            <div style={{marginTop: '1.5rem'}}>
                                <div style={{display: 'flex', alignItems: 'center', marginBottom: '0.8rem'}}>
                                    <span style={{fontWeight: 600, marginRight: '0.5rem'}}>E-mail:</span>
                                    <a href={`mailto:${section.contactInfo.email}`} style={{color: 'var(--accent)', textDecoration: 'none', transition: 'opacity 0.3s'}}>
                                        {section.contactInfo.email}
                                    </a>
                                </div>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <span style={{fontWeight: 600, marginRight: '0.5rem'}}>LinkedIn:</span>
                                    <a href={section.contactInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent)', textDecoration: 'none', transition: 'opacity 0.3s'}}>
                                        {section.contactInfo.linkedin.replace('https://', '')}
                                    </a>
                                </div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}

export default AboutPage;