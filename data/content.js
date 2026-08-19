/**
 * data/content.js
 * ---------------------------------------------------------------
 * Single source of truth for all portfolio content.
 * 
 * Update your personal information, links, projects, dev log entries,
 * skills, and journey here — without modifying HTML or CSS.
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
    avatarImage: "assets/profile/vedh.jpg",
    location: "Navi Mumbai / Mumbai, India",
    handle: "@vedhdev",
    email: "vedh1440@gmail.com",
    about: "I'm a Computer Science student focused on software development and understanding how computer systems, networks, and algorithms operate under the hood. My active focus spans web applications, cybersecurity fundamentals, cloud infrastructure, and machine learning. I believe in hands-on learning — building systems, analyzing how they communicate, and solving technical challenges directly in code.",
    statusBadge: "Open to internships & technical opportunities",
    focusAreas: [
      "Software Development",
      "Cybersecurity",
      "Machine Learning",
      "Cloud / DevOps"
    ],
    links: {
      github: "https://github.com/VoidVedh",
      linkedin: "TODO_ADD_LINKEDIN_URL",   // TODO: Add actual LinkedIn profile URL
      resume: "TODO_ADD_RESUME_FILE.pdf"   // TODO: Add resume file to assets/ and link it here
    }
  },

  // ---------------------------------------------------------
  // WHY I BUILD (Personal Philosophy)
  // ---------------------------------------------------------
  whyIBuild: {
    quote: "I like understanding how things work beneath the surface — from the code running an application to the network carrying its data and the infrastructure running the system.",
    detail: "Whether it's writing a responsive frontend interface, automating cloud infrastructure with Terraform, inspecting TCP packets in Wireshark, or training machine learning models in Python, my goal is always to build real systems, debug edge cases, and understand why things work."
  },

  // ---------------------------------------------------------
  // PROOF OF WORK (Verified Hands-On Domains)
  // ---------------------------------------------------------
  proofOfWork: [
    {
      domain: "Web Development",
      title: "Building for the web",
      badge: null,
      tech: ["HTML5", "CSS3", "JavaScript", "React"],
      description: "Built responsive web applications and worked with frontend interfaces, component-based development, deployment, and real project workflows."
    },
    {
      domain: "Cloud & DevOps",
      title: "Working with infrastructure",
      badge: "Hands-on",
      tech: ["AWS", "Docker", "Docker Compose", "Terraform", "Jenkins", "Nginx", "Linux"],
      description: "Worked with EC2, IAM, VPC, containerized services, infrastructure as code, Linux environments, and deployment tooling."
    },
    {
      domain: "Networking & Security",
      title: "Understanding systems underneath",
      badge: "Lab Exploration",
      tech: ["Kali Linux", "Nmap", "Wireshark", "WSL", "TCP/IP", "HTTP"],
      description: "Exploring networking and security by working with Linux environments, network discovery, packet analysis, and protocol behavior."
    },
    {
      domain: "Machine Learning",
      title: "Learning Machine Learning",
      badge: "Current Focus",
      tech: ["Python", "scikit-learn", "Decision Trees", "ML Fundamentals"],
      description: "Currently building ML fundamentals with Python — focusing on understanding algorithms and how models learn rather than treating libraries as black boxes."
    }
  ],

  // ---------------------------------------------------------
  // HOW I BUILD (Developer Learning Philosophy)
  // ---------------------------------------------------------
  howIBuild: {
    steps: [
      { num: "01", name: "Understand", desc: "Break down the core problem, system architecture, and protocol fundamentals." },
      { num: "02", name: "Build", desc: "Write clean, modular code and provision real infrastructure." },
      { num: "03", name: "Break", desc: "Stress test edge cases, network failures, and input boundaries." },
      { num: "04", name: "Debug", desc: "Analyze error logs, inspect packets, and isolate root causes." },
      { num: "05", name: "Learn", desc: "Extract the underlying engineering principle behind the fix." },
      { num: "06", name: "Improve", desc: "Refactor architecture for reliability, speed, and maintainability." }
    ],
    statement: "I learn fastest by building things, running into problems, debugging them, and understanding why the solution works."
  },

  // ---------------------------------------------------------
  // CURRENTLY BUILDING (2026 Technical Tracks)
  // ---------------------------------------------------------
  currentlyBuilding: [
    {
      track: "01",
      area: "Machine Learning",
      year: "2026",
      summary: "Learning ML fundamentals with Python and scikit-learn.",
      detail: "Exploring split criteria (Gini impurity vs entropy) in decision trees, model evaluation metrics, and supervised learning algorithms from first principles."
    },
    {
      track: "02",
      area: "Cybersecurity",
      year: "2026",
      summary: "Exploring Linux, networking, Nmap and Wireshark.",
      detail: "Analyzing packet captures, TCP 3-way handshakes, HTTP request lifecycles, and network service discovery in WSL and Kali Linux environments."
    },
    {
      track: "03",
      area: "Cloud / DevOps",
      year: "2026",
      summary: "Working with AWS, Docker, Terraform and deployment workflows.",
      detail: "Building declarative Infrastructure-as-Code setups, containerizing multi-tier applications, and setting up automated Jenkins and Kubernetes pipelines."
    }
  ],

  // ---------------------------------------------------------
  // WHAT I WORK WITH (Clean Technical Breadth)
  // ---------------------------------------------------------
  whatIWorkWith: [
    {
      category: "BUILD",
      items: ["Python", "Java", "C++", "JavaScript", "React"]
    },
    {
      category: "BACKEND",
      items: ["Node.js", "Express", "MongoDB", "MySQL", "Firebase", "Supabase"]
    },
    {
      category: "SYSTEMS",
      items: ["Linux", "Nginx", "Docker", "Docker Compose"]
    },
    {
      category: "CLOUD",
      items: ["AWS", "Terraform", "Jenkins"]
    },
    {
      category: "SECURITY",
      items: ["Kali Linux", "Nmap", "Wireshark", "WSL"]
    },
    {
      category: "LEARNING",
      items: ["Machine Learning", "scikit-learn"]
    }
  ],

  // ---------------------------------------------------------
  // FEATURED PROJECTS (Technical Depth)
  // ---------------------------------------------------------
  projects: [
    {
      id: "twincore",
      name: "TwinCore Platform",
      description: "Cloud-native industrial digital twin & telemetry analytics infrastructure on AWS.",
      overview: "A cloud-native DevOps ecosystem simulating live machine configuration profiles and telemetry data, fully provisioned via Terraform IaC on AWS with automated Jenkins CI/CD and K3s Kubernetes orchestration.",
      tech: ["AWS", "Terraform", "Docker", "Kubernetes (K3s)", "Jenkins", "Python (Flask)", "Nginx", "Linux"],
      built: [
        "Declarative Terraform configurations provisioning AWS VPC, subnets, route tables, and EC2 instances",
        "Automated Jenkins CI/CD pipeline compiling Docker containers and triggering rolling K3s pod restarts",
        "Flask-based telemetry analytics microservice generating machine temperature, vibration, and RPM metrics",
        "Slate-dark dashboard served via Nginx reverse proxy with live telemetry polling"
      ],
      workedWith: [
        "Terraform IaC (HCL)",
        "AWS EC2, VPC, Security Groups, IAM",
        "Docker multi-stage builds",
        "Jenkinsfile declarative pipelines",
        "K3s CTR & Kubernetes manifests"
      ],
      learned: [
        "Structuring automated Infrastructure-as-Code to ensure repeatable cloud deployments",
        "Managing container lifecycles, artifact compilation, and zero-downtime rolling updates in Kubernetes",
        "Configuring reverse proxy layers with Nginx and debugging distributed system logs"
      ],
      status: "Verified Project",
      featured: true,
      github: "https://github.com/VoidVedh/twincore",
      demo: null
    },
    {
      id: "sportxtreme",
      name: "SportXtreme Events",
      description: "Modern sports event discovery, tournament operations, and registration platform.",
      overview: "A comprehensive event management web platform designed to streamline tournament discovery, participant registrations, and event scheduling with real-time state management and mobile-first responsive architecture.",
      tech: ["React", "JavaScript", "Supabase", "CSS3", "Vercel", "Git"],
      built: [
        "Component-driven event catalog with real-time category filtering and search",
        "Supabase authentication and database integration for event registrations",
        "Responsive mobile-first UI with custom CSS design tokens and smooth transitions"
      ],
      workedWith: [
        "React Hooks & Context API",
        "Supabase PostgreSQL & Row Level Security (RLS)",
        "RESTful API queries & async state",
        "Vercel CI/CD deployment"
      ],
      learned: [
        "Designing scalable frontend architectures with clean separation of concerns",
        "Implementing secure user flows and backend data contracts with Supabase",
        "Handling edge cases in asynchronous state updates and mobile layout viewports"
      ],
      status: "Deployed",
      featured: true,
      github: "https://github.com/VoidVedh/sportxtreme-events",
      demo: "https://sport-seven-eta.vercel.app"
    },
    {
      id: "networks-lab",
      name: "Academic Networks & Systems Lab",
      description: "Practical Linux networking, port discovery, and packet analysis lab.",
      overview: "An academic lab environment focused on inspecting low-level network communications, analyzing protocol headers, and mapping host topologies in Linux and WSL environments.",
      tech: ["Kali Linux", "WSL", "Nmap", "Wireshark", "TCP/IP", "HTTP"],
      built: [
        "Isolated WSL and Linux testing environment for network discovery workflows",
        "Targeted host mapping and service port identification using Nmap",
        "Packet capture workflows analyzing TCP three-way handshakes and HTTP payloads in Wireshark"
      ],
      workedWith: [
        "Wireshark packet filters & protocol dissectors",
        "Nmap SYN scans & service version detection",
        "Linux socket tooling & curl diagnostics",
        "TCP/IP protocol stack & HTTP headers"
      ],
      learned: [
        "Understanding exact packet-level sequences during connection establishment and teardown",
        "Analyzing unencrypted payload structures and transport-layer flags",
        "Practical system administration and network diagnostics directly from the Linux terminal"
      ],
      status: "Academic Lab",
      featured: true,
      github: null,
      demo: null
    },
    {
      id: "ml-experiments",
      name: "Applied Machine Learning Experiments",
      description: "Foundational ML algorithm implementations, data analysis, and model evaluation in Python.",
      overview: "A collection of hands-on Machine Learning laboratory experiments exploring core algorithms from mathematical principles rather than treating libraries as black boxes.",
      tech: ["Python", "scikit-learn", "NumPy", "Pandas", "Decision Trees", "Jupyter"],
      built: [
        "Laboratory notebooks implementing Decision Trees, regression models, and classification pipelines",
        "Data preprocessing routines including feature scaling, normalization, and categorical encoding",
        "Evaluation scripts computing accuracy, precision, recall, confusion matrices, and ROC curves"
      ],
      workedWith: [
        "scikit-learn estimators & model pipelines",
        "NumPy matrix operations",
        "Pandas DataFrame transformations",
        "Matplotlib & Seaborn visualization"
      ],
      learned: [
        "Mathematical intuition behind split criteria (Gini impurity vs entropy) in decision trees",
        "Techniques for identifying and mitigating model overfitting and high variance",
        "Structuring repeatable exploratory data analysis and validation workflows"
      ],
      status: "Academic Coursework",
      featured: true,
      github: "https://github.com/VoidVedh/MachineLearning-College",
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
  ]
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
