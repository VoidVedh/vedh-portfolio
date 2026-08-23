/**
 * src/data/projects.js
 * ---------------------------------------------------------------
 * Authentic, factual project data model for Vedh Naik's Proof of Work.
 * External industry evaluation compliant:
 * - Real personal and academic coursework projects from GitHub (VoidVedh)
 * - Zero fabricated metrics, users, or performance numbers
 * ---------------------------------------------------------------
 */

export const projects = [
  {
    id: "twincore",
    title: "TwinCore Platform",
    category: "Cloud & DevOps",
    categorySlug: "cloud-devops",
    status: "Personal Project",
    systemType: "Cloud-Native Infrastructure & IoT Pipeline",
    description: "Cloud-native industrial telemetry and digital twin infrastructure on AWS, provisioned via Terraform IaC with automated Jenkins CI/CD and K3s Kubernetes orchestration.",
    technologies: ["AWS", "Terraform", "Docker", "Kubernetes (K3s)", "Jenkins", "Python (Flask)", "Nginx", "Linux"],
    proofTags: ["Terraform HCL", "AWS VPC & EC2", "Jenkinsfile CI/CD", "K3s Pods"],
    sourceUrl: "https://github.com/VoidVedh/twincore",
    liveUrl: null,
    featured: true,
    explanation: {
      problem: "Manual cloud setup often causes configuration drift, unpredictable deployment errors, and inconsistent runtime environments across distributed microservices.",
      approach: "Adopted a declarative Infrastructure-as-Code strategy: provision AWS infrastructure reproducibly using Terraform, package telemetry analytics in Docker containers, and automate deployments with Jenkins into a lightweight K3s cluster.",
      implementation: "Wrote modular Terraform HCL scripts for AWS VPC, subnets, and EC2; created multi-stage Dockerfiles for the Flask telemetry generator; authored declarative Jenkinsfiles for CI/CD; and configured Nginx reverse proxy routing.",
      technology: "Chose Terraform for stateful, repeatable cloud provisioning; Docker for isolated container runtimes; K3s for resource-efficient Kubernetes orchestration; and Flask for lightweight Python telemetry modeling.",
      challenge: "Debugging internal container networking and ingress routing between K3s service pods and the Nginx reverse proxy while strictly managing AWS Security Group rules.",
      learning: "Mastered declarative cloud orchestration, container lifecycle management, and how CI/CD automation prevents human error during multi-tier service rollouts."
    },
    underTheHood: {
      systemType: "Cloud-Native Infrastructure & IoT Pipeline",
      architectureFlow: [
        { step: "01", label: "Sensors / Telemetry Generator", sub: "Flask Python Microservice", desc: "Generates simulated RPM, vibration, and temperature metrics" },
        { step: "02", label: "Container & K3s Pod", sub: "Docker Container Layer", desc: "Packaged via multi-stage Dockerfile and deployed on K3s Kubernetes" },
        { step: "03", label: "Nginx Reverse Proxy", sub: "Web & Routing Layer", desc: "Routes client dashboard traffic and live telemetry polling endpoints" },
        { step: "04", label: "AWS EC2 & VPC", sub: "Terraform IaC Infrastructure", desc: "Custom VPC, subnets, and IAM roles provisioned in HCL" },
        { step: "05", label: "Jenkins CI/CD", sub: "Automation Pipeline", desc: "Triggers automated container build and rolling pod deployment upon git push" }
      ],
      whatBuiltSummary: "Provisioned end-to-end cloud infrastructure using Terraform HCL, containerized telemetry services in Docker, and automated CI/CD deployment with Jenkins on AWS.",
      keyTakeaways: [
        "Declarative infrastructure guarantees identical environment replication without configuration drift.",
        "Lightweight Kubernetes (K3s) enables zero-downtime rolling updates for microservices.",
        "Nginx reverse proxies provide secure isolation between frontend clients and backend APIs."
      ]
    }
  },
  {
    id: "facilityops",
    title: "FacilityOps — Building Operations Cloud",
    category: "Cloud & DevOps",
    categorySlug: "cloud-devops",
    status: "Academic Coursework Project",
    systemType: "Multi-Tier Cloud Application & Infrastructure",
    description: "Multi-tier cloud platform for facility management and building operations built with React, FastAPI, Amazon RDS MySQL, Docker, and provisioned via Terraform on AWS.",
    technologies: ["AWS (RDS, S3, VPC)", "Terraform", "Python (FastAPI)", "React", "TypeScript", "Docker", "Nginx", "MySQL"],
    proofTags: ["Multi-Tier VPC", "Amazon RDS MySQL", "FastAPI REST API", "Docker Compose"],
    sourceUrl: "https://github.com/VoidVedh/FacilityOps",
    liveUrl: null,
    featured: true,
    explanation: {
      problem: "Facility management systems require reliable database isolation, document attachment storage, and multi-tier network separation between public web proxies and internal operational databases.",
      approach: "Architected a multi-tier AWS cloud infrastructure using Terraform: placed Nginx and React frontend in public subnets, deployed the FastAPI backend in private subnets, and isolated relational MySQL data inside Amazon RDS.",
      implementation: "Authored Terraform modules for VPC subnets, RDS MySQL instances, and S3 storage; built a Python FastAPI REST backend with SQLAlchemy ORM and Alembic migrations; created a React TypeScript dashboard; and orchestrated local development via Docker Compose.",
      technology: "FastAPI for high-performance async Python backend endpoints; SQLAlchemy and Alembic for schema migrations; Amazon RDS for managed relational persistence; Terraform for automated AWS provisioning; and Docker for containerized service isolation.",
      challenge: "Configuring secure private database subnets and managing database migrations reliably between local Docker development and cloud RDS instances.",
      learning: "Mastered multi-tier cloud networking, relational database provisioning on AWS RDS, containerized API architectures, and automated database migrations with Alembic."
    },
    underTheHood: {
      systemType: "Multi-Tier Cloud Application & Infrastructure",
      architectureFlow: [
        { step: "01", label: "Client Browser / Dashboard", sub: "React & TypeScript Frontend", desc: "User interfaces for facility work orders, asset logs, and maintenance requests" },
        { step: "02", label: "Nginx Reverse Proxy", sub: "Public Subnet Ingress", desc: "Handles incoming HTTPS traffic and routes API requests to backend containers" },
        { step: "03", label: "FastAPI Application Service", sub: "Python Backend (Docker)", desc: "Processes business logic, JWT authentication, and SQLAlchemy database queries" },
        { step: "04", label: "Amazon RDS MySQL", sub: "Private Database Subnet", desc: "Isolated relational database storing facility assets, user logs, and maintenance records" },
        { step: "05", label: "Terraform IaC & AWS S3", sub: "Cloud Infrastructure Layer", desc: "Automated provisioning of VPC, subnets, S3 backup buckets, and security groups" }
      ],
      whatBuiltSummary: "Engineered a multi-tier cloud management platform with FastAPI, React, and Amazon RDS MySQL, provisioned reproducibly on AWS using Terraform HCL.",
      keyTakeaways: [
        "Multi-tier subnet isolation prevents direct public exposure of backend databases.",
        "FastAPI and SQLAlchemy provide type-safe API validation and structured ORM database queries.",
        "Docker Compose ensures identical development environments matching cloud deployment targets."
      ]
    }
  },
  {
    id: "ml-experiments",
    title: "Applied Machine Learning Experiments",
    category: "Data & Machine Learning",
    categorySlug: "machine-learning",
    status: "Academic Coursework",
    systemType: "Supervised Machine Learning Pipeline",
    description: "Hands-on machine learning laboratory implementations exploring classification algorithms, Decision Tree split criteria (Gini vs Entropy), and validation metrics from mathematical principles.",
    technologies: ["Python", "scikit-learn", "NumPy", "Pandas", "Decision Trees", "Jupyter"],
    proofTags: ["Supervised Classification", "Gini vs Entropy", "Hyperparameter Pruning", "ROC / Confusion Matrix"],
    sourceUrl: "https://github.com/VoidVedh/MachineLearning-College",
    liveUrl: null,
    featured: true,
    explanation: {
      problem: "Treating machine learning packages as black boxes obscures how mathematical split criteria, variance, and hyperparameter constraints dictate model decisions.",
      approach: "Constructed step-by-step laboratory notebooks in Python implementing classification workflows from the ground up: data cleaning, feature scaling, model training, split comparison, and metric evaluation.",
      implementation: "Wrote data preprocessing routines in Pandas/NumPy, trained DecisionTreeClassifier models comparing Gini Impurity versus Entropy, and evaluated performance via confusion matrices, precision, recall, and ROC curves.",
      technology: "Python for core scripting; NumPy and Pandas for matrix manipulations and tabular transformations; scikit-learn for standardized estimator modeling; and Matplotlib for visualizing decision boundaries.",
      challenge: "Mitigating model overfitting when decision trees expanded without depth limits, requiring hyperparameter tuning (max_depth, min_samples_leaf) to stabilize test generalization.",
      learning: "Understood the mathematical basis of tree splitting (impurity reduction) and the vital trade-off between model bias and variance."
    },
    underTheHood: {
      systemType: "Supervised Machine Learning Pipeline & Metric Evaluation",
      architectureFlow: [
        { step: "01", label: "Raw Dataset / Laboratory Data", sub: "CSV & Tabular Features", desc: "Ingests structured attribute datasets for classification and regression tasks" },
        { step: "02", label: "Data Preprocessing", sub: "Pandas & NumPy Pipelines", desc: "Performs feature scaling, missing value imputation, and train/test splitting" },
        { step: "03", label: "Model Training & Splitting", sub: "scikit-learn DecisionTreeClassifier", desc: "Constructs decision trees comparing Gini Impurity and Entropy split criteria" },
        { step: "04", label: "Hyperparameter Tuning", sub: "Tree Depth & Pruning Controls", desc: "Constrains max depth and min samples per leaf to prevent model overfitting" },
        { step: "05", label: "Metric Evaluation", sub: "Confusion Matrix & ROC Curves", desc: "Computes precision, recall, F1-score, and visualizes tree decision boundaries" }
      ],
      whatBuiltSummary: "Implemented foundational supervised learning notebooks analyzing decision tree algorithms, feature transformations, and classification metrics.",
      keyTakeaways: [
        "Mathematical split criteria determine how decision boundaries are formed at each node.",
        "Pruning and depth constraints are essential to prevent decision trees from memorizing training noise.",
        "Evaluating precision vs recall is crucial when dealing with imbalanced class distributions."
      ]
    }
  },
  {
    id: "networks-lab",
    title: "Academic Networks & Systems Lab",
    category: "Systems & Security",
    categorySlug: "systems-security",
    status: "Academic Lab Work",
    systemType: "Academic Systems & Network Analysis Lab",
    description: "Practical network diagnostics and packet inspection lab analyzing TCP 3-way handshakes, HTTP request lifecycles, and Nmap service discovery in Linux and WSL environments.",
    technologies: ["Linux", "WSL", "Nmap", "Wireshark", "TCP/IP", "HTTP"],
    proofTags: ["Packet Dissection", "TCP 3-Way Handshake", "Port Probing", "Linux Sockets"],
    sourceUrl: null,
    liveUrl: null,
    featured: true,
    explanation: {
      problem: "Network protocols are often studied purely theoretically, making it difficult to understand transport layer flags, port states, and socket behaviors in practice.",
      approach: "Created an isolated Linux/WSL lab environment to systematically perform host service discovery using Nmap and capture raw network frames in Wireshark.",
      implementation: "Executed targeted SYN/TCP port scans against local virtual endpoints, mapped running service daemons, and captured and filtered raw frames to dissect protocol headers.",
      technology: "Linux and WSL for POSIX networking primitives; Nmap for active port discovery and service banner grabbing; Wireshark for deep packet inspection and protocol dissection.",
      challenge: "Isolating specific TCP sessions amid background broadcast traffic and interpreting sequence numbers, ACKs, and window sizes during connection teardown.",
      learning: "Gained concrete, packet-level understanding of the TCP three-way handshake and practical Linux socket diagnostics directly from the command line."
    },
    underTheHood: {
      systemType: "Academic Systems & Network Protocol Analysis Lab",
      architectureFlow: [
        { step: "01", label: "Analysis Host", sub: "WSL & Kali Linux Environment", desc: "Isolated POSIX terminal running network diagnostic and auditing tools" },
        { step: "02", label: "Raw Socket & Interface", sub: "Linux Networking Stack", desc: "Interacts directly with network interfaces and socket layers" },
        { step: "03", label: "Service Discovery", sub: "Nmap Network Scanner", desc: "Executes SYN/TCP scans to identify open ports, services, and OS fingerprints" },
        { step: "04", label: "Packet Capture & Dissection", sub: "Wireshark Packet Dissector", desc: "Captures raw frames to inspect Ethernet, IP, and TCP headers in real time" },
        { step: "05", label: "Protocol Inspection", sub: "Header & Payload Analysis", desc: "Verifies TCP 3-way handshake (SYN, SYN-ACK, ACK) and HTTP request headers" }
      ],
      whatBuiltSummary: "Structured an isolated academic lab environment for network topology discovery, port identification, and low-level protocol header inspection.",
      keyTakeaways: [
        "Observing TCP flags (SYN, ACK, FIN, RST) provides concrete understanding of transport reliability.",
        "Nmap service probing reveals how network daemons advertise version metadata.",
        "Direct packet dissection bridges the gap between networking theory and practical system administration."
      ]
    }
  },
  {
    id: "vedh-portfolio",
    title: "Personal Developer Portfolio & Blueprint",
    category: "Web & Systems",
    categorySlug: "web-development",
    status: "Personal Project",
    systemType: "Vanilla Web Application & Interactive System",
    description: "High-performance, zero-dependency developer showcase featuring an interactive Engineering Blueprint, project explanation framework, and design token architecture.",
    technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "Design Tokens", "CSS Grid"],
    proofTags: ["Zero Dependencies", "Design Tokens", "WAI-ARIA Dialogs", "Theme Engine"],
    sourceUrl: "https://github.com/VoidVedh/vedh-portfolio",
    liveUrl: "https://vedh-portfolio.vercel.app",
    featured: false,
    explanation: {
      problem: "Developer portfolios often rely on heavy frameworks, bloated dependencies, or superficial templates that fail to communicate authentic technical reasoning and architecture.",
      approach: "Engineered a zero-dependency web application powered by a centralized data layer (`data/content.js`), an interactive system blueprint, and accessible project explanation modals.",
      implementation: "Created semantic HTML5 with complete ARIA roles, a CSS Custom Property token design system with dark/light mode persistence, an interactive multi-branch blueprint canvas, and accessible modal focus trapping.",
      technology: "Vanilla HTML, CSS, and JavaScript for instantaneous rendering (<15ms), zero build complexity, and total control over styling and performance.",
      challenge: "Designing a responsive, multi-branch interactive blueprint that gracefully collapses into an intuitive vertical system on mobile viewports without horizontal overflow.",
      learning: "Deepened practical mastery of DOM manipulation, CSS custom properties, keyboard accessibility (`aria-selected`, `aria-expanded`), and responsive UX."
    },
    underTheHood: {
      systemType: "Vanilla Web Application & Interactive Design System",
      architectureFlow: [
        { step: "01", label: "Semantic Document Layer", sub: "HTML5 & ARIA Structure", desc: "Provides accessible landmark regions, dialog elements, and SEO metadata" },
        { step: "02", label: "Design Token Engine", sub: "CSS Custom Properties", desc: "Enforces consistent spacing, typography, and dark/light color themes" },
        { step: "03", label: "Central Data Layer", sub: "data/content.js (Single Source of Truth)", desc: "Supplies structured data for profile, blueprint, projects, and dev log" },
        { step: "04", label: "Interactive System Engine", sub: "Vanilla JavaScript (ES6+)", desc: "Handles domain filtering, Trace My Stack stepping, and accessible modal focus" },
        { step: "05", label: "Static Edge Delivery", sub: "Zero-Build Static Hosting", desc: "Delivers instantaneous page loads with zero external library overhead" }
      ],
      whatBuiltSummary: "Built a zero-dependency developer portfolio featuring an interactive Engineering Blueprint, project explanation modals, and dark/light theme persistence.",
      keyTakeaways: [
        "Zero-dependency vanilla JavaScript provides unmatched performance and resilience.",
        "Centralizing content in a single data module allows seamless updates without touching UI markup.",
        "Accessible focus management and semantic HTML ensure equal usability across all input methods."
      ]
    }
  },
  {
    id: "cpp-projects",
    title: "C++ Data Structures & Practical Work",
    category: "Web & Systems",
    categorySlug: "web-development",
    status: "Academic Coursework",
    systemType: "C++ Algorithmic Coursework & Data Structures",
    description: "Foundational data structures, algorithms, and practical programming exercises implemented in modern C++.",
    technologies: ["C++", "Data Structures", "Algorithms", "Pointers", "Memory Management"],
    proofTags: ["C++ Algorithms", "Data Structures", "Pointer Logic", "Academic Coursework"],
    sourceUrl: "https://github.com/VoidVedh/CPP_PROJECTS",
    liveUrl: null,
    featured: false,
    explanation: {
      problem: "Understanding core data structures and algorithmic complexity requires writing implementations from scratch rather than relying entirely on pre-built collections.",
      approach: "Implemented practical C++ exercises covering arrays, linked structures, sorting routines, and pointer operations systematically.",
      implementation: "Authored modular C++ source files implementing standard algorithms, practicing memory management and I/O streams.",
      technology: "C++ for low-level memory control, compile-time type safety, and foundational algorithmic problem solving.",
      challenge: "Managing pointer boundaries and edge cases during data structure traversals.",
      learning: "Solidified core computer engineering fundamentals in C++ and memory allocation."
    },
    underTheHood: {
      systemType: "C++ Algorithmic Coursework & Data Structures",
      architectureFlow: [
        { step: "01", label: "C++ Source Files", sub: "Prac Modules", desc: "Structured problem statements covering arrays, searches, and data manipulation" },
        { step: "02", label: "Compiler & Preprocessor", sub: "g++ / Clang Toolchain", desc: "Compiles native binaries with strict type checking" },
        { step: "03", label: "Execution & Validation", sub: "POSIX Terminal", desc: "Verifies algorithmic time and space complexity against test cases" }
      ],
      whatBuiltSummary: "Implemented practical C++ exercises exploring core data structures, algorithms, and pointer mechanics.",
      keyTakeaways: [
        "Direct pointer arithmetic provides concrete insight into system memory layout.",
        "Choosing appropriate data structures directly dictates algorithmic time complexity."
      ]
    }
  },
  {
    id: "cross-platform",
    title: "Cross-Platform Mobile Application Labs",
    category: "Web & Systems",
    categorySlug: "web-development",
    status: "Academic Coursework",
    systemType: "Cross-Platform Mobile Application Development",
    description: "Cross-platform mobile application development coursework and user interface experiments using Dart and Flutter.",
    technologies: ["Dart", "Flutter", "Cross-Platform", "Mobile UI", "Widgets"],
    proofTags: ["Dart Language", "Widget Hierarchy", "Mobile Layouts", "Academic Coursework"],
    sourceUrl: "https://github.com/VoidVedh/CrossPlatform-College-",
    liveUrl: null,
    featured: false,
    explanation: {
      problem: "Building responsive mobile user interfaces requires understanding declarative widget trees, responsive layouts, and cross-platform compilation.",
      approach: "Constructed weekly laboratory assignments implementing mobile views, stateful/stateless widgets, and navigation workflows in Dart.",
      implementation: "Wrote structured Dart components for mobile views, managing screen layouts and input validation.",
      technology: "Dart for modern object-oriented mobile programming with fast JIT/AOT compilation.",
      challenge: "Handling layout constraints and screen adaptability across diverse device resolutions.",
      learning: "Understood declarative UI paradigms, widget lifecycles, and cross-platform mobile development workflows."
    },
    underTheHood: {
      systemType: "Cross-Platform Mobile Application Development",
      architectureFlow: [
        { step: "01", label: "Dart Component Files", sub: "Widget Modules", desc: "Structured mobile screens composed of layout and input widgets" },
        { step: "02", label: "Declarative Tree", sub: "UI Rendering Layer", desc: "Builds responsive views adapting to screen dimensions" },
        { step: "03", label: "Mobile Target", sub: "Emulator / Device", desc: "Executes cross-platform mobile application flows" }
      ],
      whatBuiltSummary: "Developed academic mobile coursework assignments in Dart exploring declarative widget composition and layout structures.",
      keyTakeaways: [
        "Declarative UI simplifies state-to-view synchronization across mobile screens.",
        "Modular widget composition promotes reusable and maintainable mobile codebases."
      ]
    }
  }
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "cloud-devops", label: "Cloud & DevOps" },
  { id: "machine-learning", label: "Data & Machine Learning" },
  { id: "systems-security", label: "Systems & Security" },
  { id: "web-development", label: "Web & Systems" }
];
