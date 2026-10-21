/**
 * data/content.js
 * ---------------------------------------------------------------
 * Vedh Jayesh Naik — Student Portfolio Data
 * Clean, authentic portfolio data matching resume exactly.
 * ---------------------------------------------------------------
 */

const PORTFOLIO_DATA = {
  profile: {
    fullName: "Vedh Jayesh Naik",
    name: "Vedh Naik",
    title: "Computer Science & Engineering Student",
    role: "Aspiring Software Developer / IT Trainee",
    location: "Navi Mumbai, Maharashtra, India",
    email: "vedh1440@gmail.com",
    objective: "Entry-level candidate looking for an internship or trainee role in software development or IT.",
    links: {
      github: "https://github.com/VoidVedh",
      linkedin: "https://www.linkedin.com/in/vedh-naik-b559b4321/",
      resume: "assets/resume.pdf"
    }
  },

  skills: {
    programming: ["C++", "Java (Core)", "JavaScript"],
    web: ["HTML5", "CSS3", "React.js"],
    fundamentals: [
      "Introductory Data Structures & Algorithms (DSA)",
      "Object-Oriented Programming (OOP)",
      "DBMS / SQL (Basic)",
      "Computer Networks"
    ],
    tools: ["Git", "GitHub", "VS Code", "Linux Basics"],
    cloud: ["AWS Fundamentals (Learning)"]
  },

  projects: [
    {
      id: "cpp-dsa-practice",
      title: "C++ Data Structures & Practice Programs",
      tech: ["C++", "Algorithms", "Data Structures"],
      description: "Practical implementations of foundational algorithms including selection sort alongside 8 practice programs. Focused on algorithmic problem solving, array manipulation, and understanding core time and space complexity.",
      github: "https://github.com/VoidVedh/CPP_PROJECTS"
    }
  ],

  achievements: [
    {
      title: "1st Prize, Smart India Hackathon (SIH) 2024",
      organization: "Ministry of Education & AICTE, Government of India",
      year: "2024",
      team: "[Team Name — To be confirmed]",
      problemStatement: "[Problem Statement / Category — To be confirmed]",
      role: "[My Role & Contribution — To be confirmed]"
    }
  ],

  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "ITM, Kharghar",
      duration: "2025 to Expected Graduation",
      status: "Currently Pursuing"
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "VPM Polytechnic, Thane (MSBTE)",
      duration: "2022 to 2025",
      score: "71.94%"
    },
    {
      degree: "Class X (ICSE)",
      institution: "Vibgyor High School, Airoli",
      year: "2022",
      score: "76.17%"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
