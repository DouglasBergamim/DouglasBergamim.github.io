import { FiMenu } from 'react-icons/fi';
import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const TopBar = ({ toggleSidebar, open }) => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 750);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 750);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Helper: transform "/courses" → ["Home", "Courses"]
  const buildCrumbs = () => {
    if (location.pathname === '/') return [{ label: 'Home', path: '/' }];
    const segments = location.pathname.slice(1).split('/');
    const crumbs = [{ label: 'Home', path: '/' }];
    segments.forEach((seg, idx) => {
      const path = '/' + segments.slice(0, idx + 1).join('/');
      const label = seg.charAt(0).toUpperCase() + seg.slice(1);
      crumbs.push({ label, path });
    });
    return crumbs;
  };

  const crumbs = buildCrumbs();

  return (
    <header className="topbar">
      {/* Button to toggle the sidebar */}
      <button className="sidebar-toggle" onClick={toggleSidebar} aria-label={open ? "Close sidebar" : "Open sidebar"}>
        <FiMenu size={24} />
      </button>

      <nav className="breadcrumb">
        {crumbs.map((crumb, idx) => (
          <span key={crumb.path}>
            {idx > 0 && ' > '} 
            {idx === crumbs.length - 1 ? (
              <span>{crumb.label}</span>
            ) : (
              <NavLink to={crumb.path}>{crumb.label}</NavLink>
            )}
          </span>
        ))}
      </nav>
    </header>
  );
};
export default TopBar;