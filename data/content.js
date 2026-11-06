/**
 * data/content.js
 * ---------------------------------------------------------------
 * Portfolio Dataset — Vedh Jayesh Naik
 * Every claim here is verifiable against assets/resume.pdf or a
 * public repository at https://github.com/VoidVedh.
 * ---------------------------------------------------------------
 */

const PORTFOLIO_PROFILES = {
  vedh: {
    id: "vedh",
    name: "Vedh Jayesh Naik",
    shortName: "Vedh",
    initials: "VN",
    tagline: "Computer Science & Engineering student at ITM Kharghar, interested in cybersecurity, cloud infrastructure, and data science.",
    avatar: "assets/profile/vedh.jpg",
    avatarFallback: "assets/profile/vedh.webp",
    location: "Ghansoli, Navi Mumbai, India",
    email: "vedh1440@gmail.com",
    resumeUrl: "assets/resume.pdf",
    statusBadge: "Open to internships",
    socials: [
      { name: "GitHub", url: "https://github.com/VoidVedh", icon: "github" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/vedh-naik-b559b4321/", icon: "linkedin" },
      { name: "Email", url: "mailto:vedh1440@gmail.com", icon: "mail" }
    ],
    intro: {
      headline: "Intro",
      paragraphs: [
        "I'm a first-year B.Tech Computer Science & Engineering student at ITM Kharghar. Before that, I completed a Diploma in Computer Engineering at VPM Polytechnic, Thane (MSBTE), where I built my foundation in programming, data structures, and computer networks.",
        "My main interests are cybersecurity and data science. I spend most of my time learning Linux, networking, and cloud fundamentals — setting up lab environments in WSL, inspecting traffic with Wireshark, and running discovery scans with Nmap to understand how systems actually talk to each other.",
        "On the building side, I work with React and JavaScript for the web, and I've been learning AWS, Terraform, and Docker through personal and coursework projects. I'm looking for an internship where I can learn from an experienced engineering team and contribute to real work."
      ]
    },
    quotes: [
      {
        text: "Simplicity is prerequisite for reliability.",
        author: "Edsger W. Dijkstra"
      },
      {
        text: "Make it work, make it right, make it fast.",
        author: "Kent Beck"
      },
      {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
      }
    ],
    song: {
      title: "Resonance",
      artist: "HOME",
      album: "Odyssey",
      note: "Coding soundtrack",
      spotifyUrl: "https://open.spotify.com/search/HOME%20Resonance",
      bpm: 85,
      frequencyNotes: [220, 261.63, 329.63, 392, 440, 523.25]
    },
    projects: [
      {
        id: "sportxtreme",
        title: "SportXtreme Events Platform",
        role: "Developer",
        category: "web",
        badge: "Live",
        description: "A sports event management web app for listing tournaments, leagues, marathons, and school championships, with event registration and an admin area.",
        highlights: [
          "Built with React 18, Vite, and React Router; data and auth handled through Supabase",
          "Database schema changes tracked as numbered SQL migration files",
          "Deployed on Vercel with Playwright smoke tests"
        ],
        tech: ["React", "Vite", "Supabase", "JavaScript"],
        links: [
          { label: "Live Site", url: "https://sportxtreme-events.vercel.app" },
          { label: "GitHub", url: "https://github.com/VoidVedh/sportxtreme-events" }
        ]
      },
      {
        id: "networks-lab",
        title: "Networks & Environment Lab",
        role: "Academic Study",
        category: "security",
        badge: "Lab Work",
        description: "Hands-on network fundamentals work done inside Windows Subsystem for Linux to understand how hosts, ports, and protocols behave at the packet level.",
        highlights: [
          "Configured basic network test environments in WSL",
          "Ran host and port discovery with Nmap",
          "Captured and inspected HTTP and TCP traffic in Wireshark"
        ],
        tech: ["Linux", "WSL", "Nmap", "Wireshark", "TCP/IP"],
        links: []
      },
      {
        id: "twincore",
        title: "TwinCore — Cloud DevOps Platform",
        role: "Personal Project",
        category: "cloud",
        badge: "IaC",
        description: "A learning project that deploys a small telemetry dashboard and a Flask analytics API on AWS, covering the full path from infrastructure code to a running Kubernetes workload.",
        highlights: [
          "Terraform provisions the VPC, subnets, security groups, and an EC2 instance",
          "Dashboard and Flask API containerized with Docker and run on K3s",
          "Jenkins pipeline builds images and rolls out updates to the cluster"
        ],
        tech: ["AWS", "Terraform", "Docker", "K3s", "Jenkins", "Flask"],
        links: [
          { label: "GitHub", url: "https://github.com/VoidVedh/twincore" }
        ]
      },
      {
        id: "facilityops",
        title: "FacilityOps — Building Operations App",
        role: "Coursework Project",
        category: "cloud",
        badge: "Full Stack",
        description: "A facility management web app with a React frontend and FastAPI backend, designed for deployment on AWS with infrastructure defined in Terraform.",
        highlights: [
          "React + TypeScript frontend, FastAPI + SQLAlchemy backend with JWT auth",
          "Designed around MySQL on RDS and S3 for document storage",
          "Nginx reverse proxy and Docker containers for each service"
        ],
        tech: ["React", "TypeScript", "FastAPI", "MySQL", "Terraform", "AWS"],
        links: [
          { label: "GitHub", url: "https://github.com/VoidVedh/FacilityOps" }
        ]
      },
      {
        id: "haultrack",
        title: "HaulTrack — Fleet Telematics Case Study",
        role: "Coursework (SEPM)",
        category: "web",
        badge: "Case Study",
        description: "A software engineering case study designing a fleet telematics and driver-safety system for a hypothetical 1,800-truck logistics company, balancing the needs of managers, drivers, and insurers.",
        highlights: [
          "Requirements and stakeholder analysis for three competing groups",
          "Interactive web demo hosted on GitHub Pages"
        ],
        tech: ["HTML", "CSS", "JavaScript", "Software Engineering"],
        links: [
          { label: "Demo", url: "https://voidvedh.github.io/HaulTrack/" },
          { label: "GitHub", url: "https://github.com/VoidVedh/HaulTrack" }
        ]
      },
      {
        id: "ml-campaign",
        title: "Marketing Campaign Response Prediction",
        role: "Coursework (ML)",
        category: "ml",
        badge: "Machine Learning",
        description: "A semester machine learning project predicting which customers respond to a marketing campaign, using the public Kaggle Customer Personality Analysis dataset.",
        highlights: [
          "Feature engineering and classification models with scikit-learn",
          "Threshold tuning to compare precision/recall trade-offs",
          "Notebook analysis plus a small Streamlit interface"
        ],
        tech: ["Python", "scikit-learn", "Pandas", "Streamlit"],
        links: [
          { label: "GitHub", url: "https://github.com/VoidVedh/CollegeML_MarketingCampaignResponse" }
        ]
      },
      {
        id: "cpp-dsa",
        title: "C++ Data Structures & Algorithms",
        role: "Self-Study",
        category: "ml",
        badge: "Learning",
        description: "My running repository for learning data structures and algorithms in C++ from scratch — core concepts, common patterns, and practice problems.",
        highlights: [
          "Implementations of fundamental data structures and algorithms",
          "Practice problems worked through step by step"
        ],
        tech: ["C++", "DSA"],
        links: [
          { label: "GitHub", url: "https://github.com/VoidVedh/CPP_PROJECTS" }
        ]
      }
    ],
    skills: [
      {
        title: "Programming",
        items: ["C++", "Java (Core)", "SQL (Basic)", "Python"]
      },
      {
        title: "Web Development",
        items: ["HTML5", "CSS3", "JavaScript", "React.js", "MERN Stack (Learning)"]
      },
      {
        title: "Cybersecurity",
        items: ["Linux Fundamentals", "Wireshark (Basic)", "Nmap (Basic)", "WSL"]
      },
      {
        title: "Cloud & Tools",
        items: ["AWS Fundamentals (Learning)", "Git", "GitHub", "VS Code", "Docker", "Terraform"]
      },
      {
        title: "Languages",
        items: ["English", "Hindi", "Marathi"]
      }
    ],
    education: [
      {
        degree: "B.Tech in Computer Science & Engineering",
        institution: "ITM, Kharghar",
        period: "2025 – Expected 2029",
        notes: "Currently pursuing. CGPA: awaiting results."
      },
      {
        degree: "Diploma in Computer Engineering",
        institution: "VPM Polytechnic, Thane (MSBTE)",
        period: "2022 – 2025",
        notes: "Percentage: 71.94%"
      },
      {
        degree: "Class X (ICSE)",
        institution: "Vibgyor High School, Airoli",
        period: "2022",
        notes: "Percentage: 76.17%"
      }
    ],
    learning: [
      {
        title: "AWS & Infrastructure as Code",
        tag: "Cloud",
        summary: "Working through AWS fundamentals and writing Terraform for VPCs, EC2, and RDS in my own projects."
      },
      {
        title: "Linux & Network Security",
        tag: "Security",
        summary: "Building comfort with the Linux command line, packet analysis, and service discovery in lab environments."
      },
      {
        title: "MERN Stack",
        tag: "Web",
        summary: "Extending my React knowledge toward Node.js, Express, and MongoDB for full-stack applications."
      }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_PROFILES;
}
