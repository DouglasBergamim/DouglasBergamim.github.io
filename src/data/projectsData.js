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
    id: 'wikipedia-bias',
    title: 'Wikipedia Detect Bias',
    description: 'A web application for analyzing Wikipedia articles using NLP techniques. The system detects bias by classifying sentences as neutral or subjective using a pre-trained BERT model, provides detailed bias analysis with sentence-level scoring, and identifies missing arguments or perspectives. Features include text neutralization through generative AI models.',
    image: '/images/wikipedia_icon.png',
    github: 'https://github.com/DouglasBergamim/Detect_Wikipedia_Bias',
    repo: 'DouglasBergamim/Detect_Wikipedia_Bias',
    tags: ['Python', 'NLP', 'Machine Learning', 'Bert Model'],
    detailPage: '/projects/wikipedia-bias'
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
    id: 'site-portfolio',
    title: 'Personal Website',
    description: 'This site was developed in React to serve as my personal portfolio. It features an animated timeline, modern design, and custom sections to showcase what I\'ve been working on over the past few years and highlight some of the things I\'m most passionate about. It reflects both my academic journey and personal interests.',
    image: '/images/site.png',
    github: 'https://github.com/DouglasBergamim/DouglasBergamim.io',
    repo: 'DouglasBergamim/DouglasBergamim.io',
    tags: ['React', 'CSS', 'Vite'],
    detailPage: '/projects/site-portfolio'
  }, 
  {
    id: 'Monetary-Policy-PID',
    title: 'Monetary Policy Controller',
    description: 'Monetary policy controller implementing Linear Quadratic Regulator (LQR) to control inflation through interest rate adjustments. Based on economic dynamics described by continuous-time representations of the Phillips Curve and Investment-Savings (IS) curve. The system evolved from unstable PID control to stable LQR control with artificial stabilization techniques.',
    image: '/images/PID_controller.jpg',
    github: 'https://github.com/DouglasBergamim/Monetary-Policy-PID',
    repo: 'DouglasBergamim/Monetary-Policy-PID',
    tags: ['Python', 'LQR Controller','PID Controller', 'Economics' ],
    detailPage: '/projects/Monetary-Policy-PID'
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