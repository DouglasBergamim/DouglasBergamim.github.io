import React, { useEffect, useState } from 'react';
/**
 * ProjectCard Component
 * 
 * A reusable card component that displays project information.
 * It shows the project title, description, image, and tags.
 * The card links to the project's GitHub repository and displays the last commit date.
 */

const cardBaseStyle = {
  display: 'flex',
  background: 'linear-gradient(120deg, #262b35 60%, #283040 100%)',
  borderRadius: '16px',
  boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
  padding: '2rem',
  alignItems: 'flex-start',
  gap: '2rem',
  border: '1.5px solid #23272f',
  marginBottom: '0.5rem',
  minHeight: '140px',
  cursor: 'pointer',
  transition: 'background 0.25s, box-shadow 0.25s, border 0.25s',
  textDecoration: 'none',
};

const cardHoverStyle = {
  background: 'linear-gradient(120deg, #31384a 60%, #36405a 100%)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.28)',
  border: '1.5px solid #7ab8f5',
};

const ProjectCard = ({ title, description, image, github, tags, repo }) => {
  const [lastCommit, setLastCommit] = useState('...');
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!repo) return;
    fetch(`https://api.github.com/repos/${repo}/commits?per_page=1`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          const date = new Date(data[0].commit.committer.date);
          setLastCommit(date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }));
        } else {
          setLastCommit('Unavailable');
        }
      })
      .catch(() => setLastCommit('Unavailable'));
  }, [repo]);

  return (
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      style={{ ...cardBaseStyle, ...(hovered ? cardHoverStyle : {}) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={image} alt={title} className="project-thumb" style={{width: '160px', height: '110px', borderRadius: '8px', objectFit: 'cover', background: '#23272f', boxShadow: '0 2px 8px #181b20'}} />
      <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
          <span style={{color: 'var(--text-main)', fontSize: '1.25rem', fontWeight: 600, textDecoration: 'none'}}>{title} <span style={{fontSize: '1.1rem', color: 'var(--accent)'}}>&#8599;</span></span>
        </div>
        <p style={{margin: '0.7rem 0 1.1rem 0', color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.6}}>{description}</p>
        <div style={{display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap'}}>
          <span style={{fontSize: '0.98rem', color: 'var(--text-secondary)'}}>Last commit: {lastCommit}</span>
        </div>
        <div style={{marginTop: '1.1rem', display: 'flex', gap: '0.7rem', flexWrap: 'wrap'}}>
          {tags && tags.map(tag => (
            <span key={tag} style={{background: '#1a1d23', color: '#7ab8f5', borderRadius: '6px', padding: '0.25em 0.9em', fontSize: '0.98rem', fontWeight: 500, letterSpacing: 0.2}}>{tag}</span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard; 