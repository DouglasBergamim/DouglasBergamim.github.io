import React from 'react';

/**
 * SitePortfolioDetail Component
 * 
 * This is a dedicated page for the portfolio site project.
 * It displays detailed information about the portfolio website itself,
 * including features, technologies used, and development context.
 * 
 * Note: This is a placeholder component that can be fully implemented later
 * with more detailed content, screenshots, and technical specifications.
 */

const SitePortfolioDetail = () => (
  <section style={{maxWidth: '800px', margin: '0 auto', paddingTop: '2.5rem'}}>
    <h2 style={{fontSize: '2.3rem', color: 'var(--text-main)', marginBottom: '1.5rem'}}>Site Portfólio</h2>
    <img src="/images/profile.jpg" alt="Site Portfólio" style={{width: '100%', maxWidth: '500px', borderRadius: '12px', marginBottom: '2rem', background: '#23272f'}} />
    <p style={{color: 'var(--text-main)', fontSize: '1.1rem', marginBottom: '1.2rem'}}>
      This site was developed in React to serve as my personal portfolio. It features an animated timeline, modern and responsive design, and custom sections to showcase what I've been working on over the past few years and highlight some of the things I'm most passionate about.
    </p>
    <ul style={{color: 'var(--text-main)', fontSize: '1.05rem', marginBottom: '1.5rem'}}>
      <li>100% responsive and mobile-friendly</li>
      <li>Animated timeline with year highlights and events</li>
      <li>Custom sections for courses, experiences, and projects</li>
      <li>Dark theme with blue color palette</li>
    </ul>
    <p style={{color: 'var(--text-main)', fontSize: '1.1rem', marginBottom: '1.2rem'}}>
      <b>Context:</b> This project was created to practice React, CSS animations, and UI/UX best practices, while serving as a showcase for my work, interests, and learning journey.
    </p>
    <a href="https://github.com/seu-usuario/site-portfolio" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent)', fontSize: '1.1rem'}}>View on GitHub</a>
  </section>
);

export default SitePortfolioDetail; 