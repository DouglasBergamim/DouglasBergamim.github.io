import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Sidebar from './components/sidebar';
import TopBar from './components/topbar';

import AboutPage from './components/sections/AboutPage';
import ProjectsPage from './components/sections/CoursesPage';
import SitePortfolioDetail from './components/projects/SitePortfolioDetail';

const COLLAPSE_BREAKPOINT = 750;

function App() {
  // inicia "aberto" apenas em telas grandes
  const [open, setOpen] = useState(window.innerWidth >= COLLAPSE_BREAKPOINT);
  const [isMobile, setIsMobile] = useState(window.innerWidth < COLLAPSE_BREAKPOINT);
  const location = useLocation();

  const toggleSidebar = () => setOpen(prev => !prev);
  
  // Ajustar abertura da sidebar ao redimensionar a janela
  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth < COLLAPSE_BREAKPOINT;
      setIsMobile(isSmallScreen);
      setOpen(!isSmallScreen); // Aberto apenas em telas grandes
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="app-container">
      <Sidebar open={open} toggleSidebar={toggleSidebar} />
      <div className={`page-wrapper ${open && !isMobile ? 'with-sidebar' : ''}`}>
        <TopBar toggleSidebar={toggleSidebar} open={open} />
        <main className="main-content">
          <Routes location={location}>
            <Route path="/"        element={<AboutPage />}   />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/site-portfolio" element={<SitePortfolioDetail />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
export default App;