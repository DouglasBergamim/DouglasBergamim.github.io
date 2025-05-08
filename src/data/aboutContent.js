const aboutContent = {
  title: "About me",
  name: "Douglas Bergamim",
  role: "Computer Engineering Student - ITA",
  sections: [
    {
      title: "Self-introduction",
      paragraphs: [
        "Hi, I'm a Computer Engineering student at ITA. I'm passionate about Machine Learning and Statistics (yes, I'm the kind of person who actually enjoys tweaking loss functions). I also spent time helping other students land internships through ITA's Internship Committee, because I believe school should be a launchpad, not a bubble. Now I'm looking to bring that energy into the ML world.",
        "This space is a snapshot of what I've been working on over the past few years — projects, ideas, and some of the things I'm most passionate about."
      ]
    },
    {
      title: "Projects",
      paragraphs: [
        "Some of the projects I've been working on — from personal initiatives to class notes and university assignments."
      ]
    },
    {
      title: "Contact Me",
      paragraphs: [
        "I'm always looking for new opportunities to learn and grow. If you have any questions or just want to say hi, feel free to reach out."
      ],
      contactInfo: {
        email: "douglasbergamimf@gmail.com",
        linkedin: "https://linkedin.com/in/douglas-bergamim"
      }
    }
  ],
  timelineData: [
    { year: 2023, isYear: true },
    { 
      date: '2023/Jan', 
      title: 'Instituto Tecnológico de Aeronáutica (ITA)', 
      role: 'Undergraduate Student', 
      bullets: ["Brazil's top Engineering Institute", 'Year of Entry Acceptance Rate: 1.61%'] 
    },
    { 
      date: '2023/Mar', 
      title: "ITA's Job Comission", 
      role: 'Member', 
      bullets: ['Organized the university\'s largest corporate event, with 1,800 students and 40+ companies']
    },
    { year: 2024, isYear: true },
    { 
      date: '2024/Mar', 
      title: 'ITA\'s Job Comission', 
      role: 'Vice-President', 
      bullets: ['Led a team of 40 people', 'Managed the contract pipeline and financial flow']
    },
    { 
      date: '2024/Jul', 
      title: 'Choosing Bachelor\'s in Computer Engineering', 
      role: '', 
      bullets: ['Completed the undergraduate core cycle with a GPA of 3.59/4.00', 'Chose Computer Engineering, the most competitive major in the institute'] 
    },
    { year: 2025, isYear: true },
    { 
      date: '2025/Jan', 
      title: 'Real Estate at Navi Capital', 
      role: 'Summer Intern', 
      bullets: ['Developed a project to calculate short-term dividends of Real Estate Credit Assets.','Mapped 90% of the real estate receivables certificates market'] 
    },
  ]
};

export default aboutContent; 