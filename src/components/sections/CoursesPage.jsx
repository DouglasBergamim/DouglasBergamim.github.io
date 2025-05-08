import React from 'react';
import { projects } from '../../data/projectsData';
import ProjectCard from '../projects/ProjectCard';

const ProjectsPage = () => (
  <section style={{maxWidth: '900px', margin: '0 auto', paddingTop: '2.5rem'}}>
    <h2 style={{fontSize: '2.3rem', marginBottom: '2.5rem', color: 'var(--text-main)'}}>Projects</h2>
    <div className="projects-list" style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
      {projects.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  </section>
);

export default ProjectsPage;