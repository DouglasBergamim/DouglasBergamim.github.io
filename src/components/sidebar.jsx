import React, { useState } from 'react';
import '../styles/sidebar.css';
import { Link, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FiX, FiGithub, FiMail, FiLinkedin, FiInstagram, FiUser, FiBook } from 'react-icons/fi';

const Sidebar = ({open, toggleSidebar}) => (
  <aside className={`sidebar ${open ? 'open' : ''}`}>
    {/* button visible only on mobile (inside the bar) */}
    <button className="toggle-btn internal" onClick={toggleSidebar} aria-label="Toggle sidebar">
      <FiX size={22} />
    </button>

    <div className="profile">
      <img src="/images/profile.jpg" alt="Portrait" className="profile-pic" />
      <h1 className="name">Douglas Bergamim</h1>
      <p className="title">Computer Engineering Student at ITA</p>
    </div>

    <nav className="nav-links nav-links-top">
      <NavLink to="/" end><FiUser style={{marginRight: '8px'}}/>About me</NavLink>
      <NavLink to="/projects"><FiBook style={{marginRight: '8px'}}/>Projects</NavLink>
    </nav>

    <div className="sidebar-footer">
      <a href="https://github.com/DouglasBergamim" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub size={24} /></a>
      <a href="mailto:douglasbergamimf@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="E-mail"><FiMail size={24} /></a>
      <a href="https://www.linkedin.com/in/douglas-bergamim/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin size={24} /></a>
      <a href="https://www.instagram.com/douglas_bergamim/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FiInstagram size={24} /></a>
    </div>
  </aside>
);
export default Sidebar;