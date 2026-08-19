/**
 * data/content.js
 * ---------------------------------------------------------------
 * Single source of truth for all portfolio content.
 * 
 * Update your personal information, links, projects, dev log entries,
 * skills, and journey here — without modifying HTML or CSS.
 * 
 * Unset links/info are marked with "TODO" placeholders and are
 * handled gracefully with disabled states in the UI.
 * ---------------------------------------------------------------
 */

const SITE_CONTENT = {

  // ---------------------------------------------------------
  // PROFILE & IDENTITY
  // ---------------------------------------------------------
  profile: {
    name: "Vedh Naik",
    fullName: "Vedh Jayesh Naik",
    initials: "VN",
    title: "Computer Science Student · Developer",
    tagline: "Building software, exploring cybersecurity, and learning machine learning.",
    location: "Navi Mumbai / Mumbai, India",
    handle: "@vedhdev",
    email: "TODO_ADD_EMAIL@example.com", // TODO: replace with real email
    about: "I'm a Computer Science student focused on software development and understanding how computer systems, networks, and algorithms operate under the hood. My active focus spans web applications, cybersecurity fundamentals, cloud infrastructure, and machine learning. I believe in hands-on learning — building systems, analyzing how they communicate, and solving technical challenges directly in code.",
    focusAreas: [
      "Software Development",
      "Cybersecurity",
      "Machine Learning",
      "Cloud / DevOps"
    ],
    links: {
      github: "TODO_ADD_GITHUB_URL",       // TODO: Add actual GitHub profile URL
      linkedin: "TODO_ADD_LINKEDIN_URL",   // TODO: Add actual LinkedIn profile URL
      resume: "TODO_ADD_RESUME_FILE.pdf"   // TODO: Add resume file to assets/ and link it here
    }
  },

  // ---------------------------------------------------------
  // EDUCATION / JOURNEY
  // ---------------------------------------------------------
  journey: [
    {
      year: "2025 – 2029",
      title: "B.Tech in Computer Science & Engineering",
      place: "ITM, Kharghar",
      detail: "Undergraduate degree in CSE (In Progress)"
    },
    {
      year: "2022 – 2025",
      title: "Diploma in Computer Engineering",
      place: "VPM Polytechnic, Thane",
      detail: "Graduated with 71.94%"
    },
    {
      year: "2022",
      title: "Class X — ICSE",
      place: "Vibgyor High School, Airoli",
      detail: "Completed with 76.17%"
    },
    {
      year: "Ongoing",
      title: "Self-Directed Technical Growth",
      place: "Hands-on projects & lab experimentation",
      detail: "Deepening practical skills across systems, networks, cloud tooling, and applied machine learning."
    }
  ],

  // ---------------------------------------------------------
  // CONFIRMED PROJECTS (Featured Repositories)
  // ---------------------------------------------------------
  projects: [
    {
      id: "sportxtreme",
      name: "SportXtreme Events",
      description: "A responsive web platform for discovering and showcasing active sports events.",
      overview: "SportXtreme Events is a responsive front-end web platform designed to showcase sports events in a clear, accessible interface. Developed and deployed to master component-driven front-end architecture, mobile-first responsive styling, and modern version control workflows.",
      tech: ["React", "HTML5", "CSS3", "JavaScript", "Git", "GitHub"],
      built: [
        "Componentized React UI for browsing sports events seamlessly",
        "Mobile-first responsive layout with clean media query breakpoints",
        "Structured state and modular design for event listings"
      ],
      learned: [
        "Structuring and building production-ready React web applications",
        "Writing scalable, responsive CSS without layout breakage across viewports",
        "Git/GitHub branch workflows and static deployment practices"
      ],
      status: "Deployed",
      featured: true,
      github: "TODO_ADD_GITHUB_URL_FOR_SPORTXTREME",   // TODO: Add repository URL
      demo: "TODO_ADD_LIVE_DEMO_URL"                    // TODO: Add live deployment URL
    },
    {
      id: "networks-lab",
      name: "Academic Networks & Environment Lab",
      description: "An academic networking & cybersecurity lab exploring device discovery and packet analysis.",
      overview: "An academic lab environment focused on core networking protocols, port discovery, and packet inspection. Centered on understanding TCP/IP communication and network behavior in a WSL-based Linux environment.",
      tech: ["WSL", "Linux", "Nmap", "Wireshark", "Networking Fundamentals"],
      built: [
        "WSL-based Linux lab environment for network analysis and inspection",
        "Targeted host and port discovery workflows using Nmap",
        "HTTP and TCP packet capture and protocol analysis with Wireshark"
      ],
      learned: [
        "Detailed inspection of TCP 3-way handshakes and HTTP request/response lifecycles",
        "Practical port scanning techniques and network topology mapping",
        "Fundamental network security concepts underlying defensive and offensive tooling"
      ],
      status: "Academic project",
      featured: true,
      github: "TODO_ADD_GITHUB_URL_FOR_NETWORKS_LAB", // TODO: Add repository URL if published
      demo: null
    }
  ],

  // ---------------------------------------------------------
  // DEV LOG (Learning journal & technical progress)
  // ---------------------------------------------------------
  activity: [
    {
      date: "2026-08-14",
      content: "Exploring Decision Trees with Python and Scikit-learn — focusing on understanding split criteria (Gini impurity / entropy) and tree depth trade-offs rather than treating the library as a black box.",
      tags: ["machine-learning", "python", "scikit-learn"]
    },
    {
      date: "2026-08-02",
      content: "Building and refining this developer portfolio in vanilla HTML, CSS, and JS. Emphasizing clean semantic structure, accessibility, zero unnecessary dependencies, and an interactive terminal Easter egg.",
      tags: ["portfolio", "web-dev", "vanilla-js"]
    },
    {
      date: "2026-07-20",
      content: "Deep dive into Linux networking and security fundamentals. Using Nmap for host/service discovery and analyzing captured TCP/HTTP traffic in Wireshark to understand packet header structures.",
      tags: ["cybersecurity", "linux", "networking", "wireshark"]
    },
    {
      date: "2026-07-05",
      content: "Hands-on with Docker and Docker Compose. Containerizing multi-tier web setups to understand isolated network bridges, volume persistence, and repeatable local development environments.",
      tags: ["devops", "docker", "containers"]
    },
    {
      date: "2026-06-22",
      content: "Configuring core AWS services (EC2, IAM roles/policies, VPC subnets, and S3). Provisioning and tearing down test environments to gain practical familiarity with cloud architecture.",
      tags: ["cloud", "aws", "infrastructure"]
    }
  ],

  // ---------------------------------------------------------
  // SKILLS / TECH STACK
  // ---------------------------------------------------------
  skills: [
    {
      category: "Programming",
      items: ["Python", "C++", "Java", "SQL"]
    },
    {
      category: "Web Frontend",
      items: ["HTML5", "CSS3", "JavaScript", "React"]
    },
    {
      category: "Backend & Databases",
      items: ["Node.js", "Express", "MongoDB", "MySQL", "Firebase", "Supabase"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS EC2", "AWS IAM", "AWS VPC", "AWS S3", "Docker", "Docker Compose", "Terraform", "Jenkins", "Nginx", "Linux"]
    },
    {
      category: "Cybersecurity & Networking",
      items: ["Kali Linux", "Nmap", "Wireshark", "WSL", "Networking Fundamentals"]
    },
    {
      category: "Machine Learning",
      items: ["Python", "Scikit-learn", "Core Algorithms"]
    }
  ],

  // ---------------------------------------------------------
  // CURRENTLY LEARNING
  // ---------------------------------------------------------
  learning: [
    {
      area: "Machine Learning",
      detail: "Working through supervised learning models and mathematical intuition in Python with Scikit-learn."
    },
    {
      area: "Cybersecurity",
      detail: "Expanding practical network defense, packet analysis with Wireshark, and Linux environment security."
    },
    {
      area: "Cloud & DevOps",
      detail: "Container orchestration with Docker Compose, infrastructure as code with Terraform, and AWS configurations."
    },
    {
      area: "Backend Development",
      detail: "Designing performant REST APIs with Node.js/Express and exploring database schema optimization."
    }
  ],

  // ---------------------------------------------------------
  // DEVELOPMENT ACTIVITY NOTE (Honest disclosure)
  // ---------------------------------------------------------
  activityNote: "Visual representation of regular learning and coding activity over the past 20 weeks. Illustrative development rhythm."
};

// Expose on window, globalThis, and export for Node
if (typeof window !== "undefined") {
  window.SITE_DATA = SITE_CONTENT;
}
if (typeof globalThis !== "undefined") {
  globalThis.SITE_DATA = SITE_CONTENT;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONTENT;
}
