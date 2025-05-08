import React, { useState, useEffect } from 'react';
import '../styles/timeline.css';

// Timeline component
// Displays a timeline of events with animated bullets
// Shows year labels, event points with date and title, and optional bullets
// Handles hover effects for expanded event points

const BULLET_ANIMATION_DELAY = 120; // ms

const Timeline = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visibleBullets, setVisibleBullets] = useState([]);

  // Handles hover effects for expanded event points
  useEffect(() => {
    if (hoveredIndex === null || !data[hoveredIndex] || !data[hoveredIndex].bullets) {
      setVisibleBullets([]);
      return;
    }
    setVisibleBullets([]);
    const bullets = data[hoveredIndex].bullets;
    bullets.forEach((_, i) => {
      setTimeout(() => {
        setVisibleBullets(prev => [...prev, i]);
      }, BULLET_ANIMATION_DELAY * i);
    });

    return () => setVisibleBullets([]);
  }, [hoveredIndex, data]);

  return (
    <div className="timeline-container">
      <div className="timeline-line">
        <div className="timeline-vertical" />
        {data.map((item, idx) => (
          <div className="timeline-row" key={item.isYear ? item.year : item.date + item.title}>
            {item.isYear ? (
              <>
                <div className="timeline-year-label">{item.year}</div>
                <div className="timeline-dot year" />
                <div style={{flex: 1}} />
              </>
            ) : (
              <>
                <div className="timeline-year-label" />
                <div className="timeline-dot" />
                <div
                  className={`timeline-event-point${hoveredIndex === idx ? ' expanded' : ''}`}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{flex: 1, position: 'relative'}}
                >
                  <div className="timeline-event-content">
                    <div className="timeline-event-date">{item.date}</div>
                    <div className="timeline-event-title">{item.title}</div>
                    {item.role && <div className="timeline-event-role">{item.role}</div>}
                    {hoveredIndex === idx && (
                      <ul className="timeline-event-bullets">
                        {item.bullets.map((b, i) => (
                          <li key={i} style={{opacity: visibleBullets.includes(i) ? 1 : 0, transition: 'opacity 0.4s'}}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Set default prop for data
Timeline.defaultProps = {
  data: []
};

export default Timeline; 