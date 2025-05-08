# Douglas Bergamim | Portfolio

This is the repository for my personal portfolio, developed in React, featuring an animated timeline, modern and responsive design, and focused on showcasing my academic and professional journey.

## Features
- **Animated timeline:** Highlighted years and events, with smooth animations on interaction.
- **Responsive layout:** Beautiful visuals on both desktop and mobile.
- **Custom sections:** About me, courses, experiences, and more.
- **GitHub integration:** Dynamic last commit information for projects.
- **Organized architecture:** Logical component structure and data separation for maintainability.

## Technologies Used
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- Pure CSS and custom properties

## Installation & Usage
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-portfolio-repo.git
   cd your-portfolio-repo
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the project locally:**
   ```bash
   npm run dev
   ```
4. **Open in your browser:**
   Go to [http://localhost:5173](http://localhost:5173) to view the site.

## Customization
- **Profile photo:** Replace the file at `public/images/profile.jpg`.
- **Favicon:** Use a circular PNG at `public/images/head.png`.
- **Timeline content:** Edit `src/components/timeline.jsx` to add or modify events.
- **Colors and fonts:** Adjust in `src/styles/variables.css` and other style files.

## Project Structure
```
├── src/
│   ├── components/
│   │   ├── projects/           # Project-specific components
│   │   │   ├── ProjectCard.jsx # Card component for project display
│   │   │   └── SitePortfolioDetail.jsx
│   │   ├── sections/           # Page section components
│   │   │   ├── AboutPage.jsx   # About me page
│   │   │   └── CoursesPage.jsx # Projects/courses page
│   │   ├── sidebar.jsx         # Navigation sidebar
│   │   ├── timeline.jsx        # Interactive timeline component
│   │   └── topbar.jsx          # Top navigation bar
│   ├── data/                   # Data layer with content
│   │   ├── aboutContent.js     # Content for About page
│   │   └── projectsData.js     # Projects information
│   ├── styles/                 # CSS styles
│   ├── font/                   # Custom fonts
│   ├── App.jsx                 # Main application component
│   └── main.jsx                # Entry point
├── public/                     # Static assets
├── index.html
└── README.md
```

## License
This project is for personal and academic use. Feel free to get inspired and adapt it for your own portfolio!

---
