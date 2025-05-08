// Array of project data used throughout the portfolio site
// Each project object contains:
// - id: unique identifier for the project
// - title: display name of the project
// - description: short summary of the project
// - image: path to thumbnail image
// - github: link to GitHub repository
// - repo: GitHub username/repository for fetching commit data
// - tags: array of technologies/tools used
// - detailPage: route to detailed project page

export const projects = [
  {
    id: 'site-portfolio',
    title: 'Site Portfólio',
    description: 'This site was developed in React to serve as my personal portfolio. It features an animated timeline, modern design, and custom sections to showcase what I\'ve been working on over the past few years and highlight some of the things I\'m most passionate about. It reflects both my academic journey and personal interests.',
    image: '/images/site.png',
    github: 'https://github.com/seu-usuario/site-portfolio',
    repo: 'seu-usuario/site-portfolio',
    tags: ['React', 'CSS', 'Vite'],
    detailPage: '/projects/site-portfolio'
  }, 
  {
    id: 'CT213',
    title: 'Artificial Intelligence for Mobile Robotics',
    description: 'Repository of the projects developed for the course CT-213: Artificial Intelligence for Mobile Robotics (ITA). Includes implementations of optimization algorithms, neural networks, and reinforcement learning applied to robotics problems.',
    image: '/images/CT213.jpg',
    github: 'https://github.com/DouglasBergamim/CT-213',
    repo: 'DouglasBergamim/CT-213',
    tags: ['AI', 'Python', 'TensorFlow', 'Robotics'],
    detailPage: '/projects/CT213'
  },
  {
    id: 'CTC12',
    title: 'Algorithm Design and Analysis',
    description: 'Repository of the projects developed for the course CTC-12: Algorithm Design and Analysis (ITA). Includes implementations of algorithms and data structures.',
    image: '/images/CTC12.jpeg',
    github: 'https://github.com/DouglasBergamim/CTC-12',
    repo: 'DouglasBergamim/CTC-12',
    tags: ['C++', 'Algorithms', 'Data Structures'],
    detailPage: '/projects/CTC12'
  }, 
]; 