/**
 * data/content.js
 * ---------------------------------------------------------------
 * Vedh Naik — Personal Developer Profile & Portfolio Data Store
 * Authentic Single Source of Truth for:
 * - Profile Identity & verified links
 * - Interactive Engineering Blueprint (4 domains & Trace My Stack)
 * - Proof of Work (Verified Personal Projects & Coursework)
 * - Chronological Dev Log, Focus Tracks & Education Journey
 * ---------------------------------------------------------------
 */

const SITE_CONTENT = {
  // ---------------------------------------------------------
  // PROFILE & CORE IDENTITY
  // ---------------------------------------------------------
  profile: {
    name: "Vedh Naik",
    fullName: "Vedh Jayesh Naik",
    title: "Computer Science Student & Developer",
    aspirantFocus: "Cybersecurity & Data Science Aspirant",
    tagline: "Building software, exploring cybersecurity, and learning machine learning.",
    location: "Ghansoli, Navi Mumbai, India",
    email: "vedh1440@gmail.com",
    about: "I'm a Computer Science student focused on software development and understanding how computer systems, networks, and algorithms operate under the hood. My active focus spans cloud infrastructure, web engineering, cybersecurity fundamentals, and applied machine learning. I believe in hands-on learning — building systems from scratch, analyzing how data flows through networks, and debugging root causes directly in code.",
    statusBadge: "Open to internships & technical opportunities",
    focusAreas: [
      "Cloud / DevOps",
      "Software Development",
      "Cybersecurity",
      "Machine Learning"
    ],
    links: {
      github: "https://github.com/VoidVedh",
      linkedin: "https://www.linkedin.com/in/vedh-naik-b559b4321/",
      resume: "assets/resume.pdf"
    }
  },

  // ---------------------------------------------------------
  // WHY I BUILD (Personal Philosophy)
  // ---------------------------------------------------------
  whyIBuild: {
    quote: "I like understanding how things work beneath the surface — from the code running an application to the network carrying its data and the infrastructure running the system.",
    detail: "Whether it's provisioning multi-tier cloud infrastructure with Terraform on AWS, training decision tree models in Python, inspecting TCP packets in Wireshark, or engineering zero-dependency web applications, my goal is always to build real systems, debug edge cases, and understand why things work."
  },

  // ---------------------------------------------------------
  // EXPERIENCE STATES DEFINITIONS
  // ---------------------------------------------------------
  experienceStates: {
    USED: {
      label: "USED",
      desc: "Currently have hands-on experience building with this."
    },
    LEARNING: {
      label: "LEARNING",
      desc: "Currently studying and actively building depth with this."
    },
    EXPLORING: {
      label: "EXPLORING",
      desc: "Have experimented with this in lab environments."
    }
  },

  // ---------------------------------------------------------
  // ENGINEERING BLUEPRINT (Central Interactive Technical System)
  // ---------------------------------------------------------
  blueprint: {
    title: "Engineering Blueprint",
    subtitle: "How the things I build connect the technologies I'm learning.",
    centerNode: {
      name: "Vedh Naik",
      role: "CS Student · Developer",
      tag: "CORE SYSTEM"
    },
    domains: {
      cloud: {
        id: "cloud",
        name: "Cloud / DevOps",
        badge: "Infrastructure & Automation",
        statusType: "USED & LEARNING",
        icon: "cloud",
        summary: "Provisioning reproducible cloud environments, containerized microservices, and automated CI/CD pipelines on AWS.",
        learningStatus: false,
        technologies: [
          { name: "AWS (EC2, VPC, RDS, S3)", state: "USED", type: "Cloud Provider", role: "Compute, isolated VPC networking, managed RDS MySQL, and S3 object storage" },
          { name: "Terraform (HCL)", state: "USED", type: "Infrastructure-as-Code", role: "Declarative resource provisioning preventing cloud configuration drift" },
          { name: "Docker & Compose", state: "USED", type: "Container Runtime", role: "Multi-stage container builds and multi-container local orchestration" },
          { name: "Nginx", state: "USED", type: "Reverse Proxy", role: "Reverse proxy routing, SSL termination, and static asset delivery" },
          { name: "Kubernetes (K3s)", state: "LEARNING", type: "Container Orchestration", role: "Lightweight cluster management, pod rollouts, and ingress routing" },
          { name: "Jenkins CI/CD", state: "LEARNING", type: "Automation Pipeline", role: "Declarative build automation and rolling container redeployments" }
        ],
        connections: [
          { from: "Terraform (HCL)", to: "AWS VPC & EC2 / RDS", relation: "Declarative IaC" },
          { from: "Docker Containers", to: "Nginx & K3s Pods", relation: "Runtime orchestration" },
          { from: "Nginx Reverse Proxy", to: "TwinCore & FacilityOps", relation: "Production routing" }
        ],
        projectIds: ["twincore", "facilityops"]
      },
      development: {
        id: "development",
        name: "Development",
        badge: "Web & Systems",
        statusType: "USED & EXPLORING",
        icon: "code",
        summary: "Building performant web interfaces, backend APIs, clean component structures, and foundational algorithms.",
        learningStatus: false,
        technologies: [
          { name: "JavaScript (ES6+)", state: "USED", type: "Core Language", role: "Primary language for client-side interactivity, DOM engines, and logic" },
          { name: "HTML5 / CSS3", state: "USED", type: "Frontend Foundation", role: "Semantic layout, accessibility (WAI-ARIA), and design token architectures" },
          { name: "Python (FastAPI / Flask)", state: "USED", type: "Backend & Scripting", role: "RESTful microservices, telemetry generators, and data pipelines" },
          { name: "React & TypeScript", state: "USED", type: "UI Library", role: "Component architecture, declarative state, and typed frontend systems" },
          { name: "C++", state: "USED", type: "Language", role: "Data structures, pointer arithmetic, and algorithmic problem solving" },
          { name: "Dart", state: "EXPLORING", type: "Mobile Language", role: "Cross-platform mobile UI coursework and widgets" },
          { name: "Java (Core)", state: "EXPLORING", type: "Language", role: "Object-oriented programming in academic coursework" }
        ],
        connections: [
          { from: "HTML5 & CSS3", to: "JavaScript ES6+", relation: "DOM interaction" },
          { from: "Python (FastAPI / Flask)", to: "Docker & AWS", relation: "API services" },
          { from: "JavaScript & CSS Tokens", to: "Personal Developer Portfolio", relation: "Live platform" }
        ],
        projectIds: ["facilityops", "vedh-portfolio", "cpp-projects", "cross-platform"]
      },
      machineLearning: {
        id: "machineLearning",
        name: "Machine Learning",
        badge: "Foundational & Applied",
        statusType: "LEARNING & APPLIED",
        icon: "cpu",
        summary: "Implementing supervised learning algorithms, split criteria, and validation metrics from mathematical principles.",
        learningStatus: true,
        technologies: [
          { name: "Python", state: "USED", type: "Primary Language", role: "Algorithmic implementation, data transformations, and statistical evaluation" },
          { name: "NumPy & Pandas", state: "USED", type: "Data Manipulation", role: "Tabular DataFrame cleaning, feature scaling, and matrix operations" },
          { name: "scikit-learn", state: "LEARNING", type: "ML Framework", role: "Standardized estimators, DecisionTreeClassifier, train/test splitting" },
          { name: "Decision Trees", state: "LEARNING", type: "Algorithm", role: "Exploring Gini Impurity vs Entropy split criteria and depth pruning" },
          { name: "Matplotlib & Jupyter", state: "USED", type: "Visualization & Environment", role: "Confusion matrices, ROC curves, and decision boundary plots" }
        ],
        connections: [
          { from: "Raw CSV Datasets", to: "NumPy & Pandas", relation: "Feature preprocessing" },
          { from: "NumPy & Pandas", to: "scikit-learn Estimators", relation: "Model training" },
          { from: "Decision Tree Models", to: "Applied ML Experiments", relation: "Coursework lab" }
        ],
        projectIds: ["ml-experiments"]
      },
      cybersecurity: {
        id: "cybersecurity",
        name: "Cybersecurity",
        badge: "Lab Exploration",
        statusType: "EXPLORING (LAB)",
        icon: "shield",
        summary: "Analyzing network communication layers, packet structures, and service discovery in Linux environments.",
        learningStatus: false,
        technologies: [
          { name: "Linux", state: "USED", type: "Operating System", role: "POSIX command line, system sockets, and file permissions" },
          { name: "WSL", state: "USED", type: "Subsystem", role: "Local Linux workspace for diagnostics and tooling" },
          { name: "TCP/IP & HTTP", state: "USED", type: "Protocol Stack", role: "Transport-layer flags, socket states, and packet headers" },
          { name: "Nmap", state: "EXPLORING", type: "Security Tool", role: "SYN packet scans, host mapping, and port discovery" },
          { name: "Wireshark", state: "EXPLORING", type: "Packet Analysis", role: "Deep packet inspection and protocol header dissection" },
          { name: "Kali Linux", state: "EXPLORING", type: "Security OS", role: "Security diagnostics in isolated coursework lab" }
        ],
        connections: [
          { from: "Linux / WSL", to: "TCP/IP Sockets", relation: "POSIX networking" },
          { from: "Nmap & Wireshark", to: "Packet Inspection", relation: "SYN scans & dissection" },
          { from: "Packet Inspection", to: "Academic Networks Lab", relation: "Lab experimentation" }
        ],
        projectIds: ["networks-lab"]
      }
    },

    // Guided Stack Trace Pathways (Trace My Stack)
    stackTraces: [
      {
        id: "trace-cloud",
        name: "Cloud Infrastructure & IaC Automation",
        domainId: "cloud",
        summary: "How declarative Terraform code provisions AWS resources and automates container deployments.",
        steps: [
          { node: "Vedh Naik", role: "Root Foundation", note: "Building automated, reproducible infrastructure" },
          { node: "AWS (VPC & EC2)", role: "Cloud Provider", note: "Custom VPC, subnets, route tables & compute instances" },
          { node: "Terraform (IaC)", role: "Infrastructure-as-Code", note: "Declarative HCL provisioning preventing configuration drift" },
          { node: "Docker & Compose", role: "Containerization", note: "Multi-stage builds packaging Flask and FastAPI backends" },
          { node: "Nginx & K3s", role: "Orchestration & Ingress", note: "Reverse proxy routing and zero-downtime container rollouts" },
          { node: "TwinCore & FacilityOps", role: "Deployed Systems", note: "Live cloud platforms on AWS infrastructure" }
        ]
      },
      {
        id: "trace-ml",
        name: "Supervised ML & Model Evaluation",
        domainId: "machineLearning",
        summary: "How raw tabular data progresses through mathematical split criteria to validated models.",
        steps: [
          { node: "Vedh Naik", role: "Root Foundation", note: "Exploring data science and ML fundamentals" },
          { node: "Python & Pandas", role: "Data Processing", note: "Feature cleaning, scaling, and train/test partition" },
          { node: "Decision Trees", role: "Split Optimization", note: "Comparing Gini Impurity versus Entropy reduction" },
          { node: "Hyperparameter Pruning", role: "Variance Control", note: "Depth constraints preventing model overfitting" },
          { node: "Applied ML Experiments", role: "Academic Work", note: "Evaluated with confusion matrices & ROC curves" }
        ]
      },
      {
        id: "trace-security",
        name: "Network Protocol Inspection & Sockets",
        domainId: "cybersecurity",
        summary: "How Linux terminal utilities dissect transport-layer packets down to bitwise flags.",
        steps: [
          { node: "Vedh Naik", role: "Root Foundation", note: "Exploring networking & protocol mechanics" },
          { node: "Linux / WSL", role: "Environment Layer", note: "POSIX command line, system sockets & bash scripting" },
          { node: "TCP/IP & HTTP", role: "Protocol Stack", note: "Transport layer flags, 3-way handshakes, request cycles" },
          { node: "Nmap & Wireshark", role: "Analysis Tooling", note: "SYN packet scans, port mapping & frame dissection" },
          { node: "Academic Networks Lab", role: "Lab Environment", note: "Network topology discovery & packet capture analysis" }
        ]
      },
      {
        id: "trace-web",
        name: "Web Engineering & Design System",
        domainId: "development",
        summary: "How zero-dependency architecture powers an accessible, fast developer portfolio.",
        steps: [
          { node: "Vedh Naik", role: "Root Foundation", note: "Building accessible, high-performance web systems" },
          { node: "HTML5 & CSS3", role: "Semantic Foundation", note: "Accessible markup hierarchy and custom CSS tokens" },
          { node: "JavaScript ES6+", role: "Application Logic", note: "State management, DOM rendering, zero external libs" },
          { node: "Interactive Blueprint", role: "System Architecture", note: "Dynamic branch inspection and modal dialogue logic" },
          { node: "Personal Portfolio", role: "Live Platform", note: "Zero-build, lightweight developer showcase" }
        ]
      }
    ]
  },

  // ---------------------------------------------------------
  // PROJECT CATEGORIES (FOR PROOF FILTERING)
  // ---------------------------------------------------------
  projectCategories: [
    { id: "all", label: "All Projects" },
    { id: "cloud-devops", label: "Cloud & DevOps" },
    { id: "machine-learning", label: "Data & Machine Learning" },
    { id: "systems-security", label: "Systems & Security" },
    { id: "web-development", label: "Web & Systems" }
  ],

  // ---------------------------------------------------------
  // AUTHENTIC PERSONAL PROJECTS (PROOFS OF WORK)
  // ---------------------------------------------------------
  projects: [
    {
      id: "twincore",
      name: "TwinCore Platform",
      title: "TwinCore Platform",
      category: "Cloud & DevOps",
      categorySlug: "cloud-devops",
      description: "Cloud-native industrial telemetry and digital twin infrastructure on AWS, provisioned via Terraform IaC with automated Jenkins CI/CD and K3s Kubernetes orchestration.",
      overview: "A cloud-native DevOps ecosystem simulating live machine configuration profiles and telemetry data, fully provisioned via Terraform IaC on AWS with automated Jenkins CI/CD and K3s Kubernetes orchestration.",
      tech: ["AWS", "Terraform", "Docker", "Kubernetes (K3s)", "Jenkins", "Python (Flask)", "Nginx", "Linux"],
      proofTags: ["Terraform HCL", "AWS VPC & EC2", "Jenkinsfile CI/CD", "K3s Pods"],
      status: "Personal Project",
      featured: true,
      github: "https://github.com/VoidVedh/twincore",
      sourceUrl: "https://github.com/VoidVedh/twincore",
      demo: null,
      liveUrl: null,
      
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
      },

      built: [
        "Declarative Terraform configurations provisioning AWS VPC, subnets, route tables, and EC2 instances",
        "Automated Jenkins CI/CD pipeline compiling Docker containers and triggering rolling K3s pod restarts",
        "Flask-based telemetry analytics microservice generating machine temperature, vibration, and RPM metrics",
        "Dashboard served via Nginx reverse proxy with live telemetry polling"
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
      ]
    },
    {
      id: "facilityops",
      name: "FacilityOps — Building Operations Cloud",
      title: "FacilityOps — Building Operations Cloud",
      category: "Cloud & DevOps",
      categorySlug: "cloud-devops",
      description: "Multi-tier cloud platform for facility management and building operations built with React, FastAPI, Amazon RDS MySQL, Docker, and provisioned via Terraform on AWS.",
      overview: "An enterprise-style cloud platform engineered for facility management, asset tracking, and building maintenance operations. Features a multi-tier AWS architecture with isolated public/private subnets, containerized FastAPI backend, Amazon RDS MySQL database, and Terraform provisioning.",
      tech: ["AWS (RDS, S3, VPC)", "Terraform", "Python (FastAPI)", "React", "TypeScript", "Docker", "Nginx", "MySQL"],
      proofTags: ["Multi-Tier VPC", "Amazon RDS MySQL", "FastAPI REST API", "Docker Compose"],
      status: "Academic Coursework Project",
      featured: true,
      github: "https://github.com/VoidVedh/FacilityOps",
      sourceUrl: "https://github.com/VoidVedh/FacilityOps",
      demo: null,
      liveUrl: null,

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
      },

      built: [
        "Multi-tier AWS infrastructure provisioned via Terraform with public/private subnet routing",
        "Python FastAPI backend services with SQLAlchemy ORM and Alembic database migration scripts",
        "Containerized Nginx reverse proxy configuration handling API routing and static asset delivery",
        "Docker Compose orchestration file wiring frontend, backend, Nginx, and local database services"
      ],
      workedWith: [
        "Terraform AWS modules (VPC, RDS, S3, Security Groups)",
        "FastAPI, Pydantic, SQLAlchemy & Uvicorn",
        "Docker & Docker Compose multi-service stacks",
        "Amazon RDS MySQL & Alembic migrations",
        "React, TypeScript, Vite & Tailwind CSS"
      ],
      learned: [
        "Designing secure multi-tier network topologies separating web, application, and database tiers",
        "Implementing structured database migrations and relational data models on Amazon RDS",
        "Managing containerized microservices and automated infrastructure provisioning on AWS"
      ]
    },
    {
      id: "ml-experiments",
      name: "Applied Machine Learning Experiments",
      title: "Applied Machine Learning Experiments",
      category: "Data & Machine Learning",
      categorySlug: "machine-learning",
      description: "Hands-on machine learning laboratory implementations exploring classification algorithms, Decision Tree split criteria (Gini vs Entropy), and validation metrics from mathematical principles.",
      overview: "A collection of hands-on Machine Learning laboratory experiments exploring core algorithms from mathematical principles rather than treating libraries as black boxes.",
      tech: ["Python", "scikit-learn", "NumPy", "Pandas", "Decision Trees", "Jupyter"],
      proofTags: ["Supervised Classification", "Gini vs Entropy", "Hyperparameter Pruning", "ROC / Confusion Matrix"],
      status: "Academic Coursework",
      featured: true,
      github: "https://github.com/VoidVedh/MachineLearning-College",
      sourceUrl: "https://github.com/VoidVedh/MachineLearning-College",
      demo: null,
      liveUrl: null,

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
      },

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
      ]
    },
    {
      id: "networks-lab",
      name: "Academic Networks & Systems Lab",
      title: "Academic Networks & Systems Lab",
      category: "Systems & Security",
      categorySlug: "systems-security",
      description: "Practical network diagnostics and packet inspection lab analyzing TCP 3-way handshakes, HTTP request lifecycles, and Nmap service discovery in Linux and WSL environments.",
      overview: "An academic lab environment focused on inspecting low-level network communications, analyzing protocol headers, and mapping host topologies in Linux and WSL environments.",
      tech: ["Linux", "WSL", "Nmap", "Wireshark", "TCP/IP", "HTTP"],
      proofTags: ["Packet Dissection", "TCP 3-Way Handshake", "Port Probing", "Linux Sockets"],
      status: "Academic Lab Work",
      featured: true,
      github: null,
      sourceUrl: null,
      demo: null,
      liveUrl: null,

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
      },

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
      ]
    },
    {
      id: "vedh-portfolio",
      name: "Personal Developer Portfolio & Blueprint",
      title: "Personal Developer Portfolio & Blueprint",
      category: "Web & Systems",
      categorySlug: "web-development",
      description: "High-performance, zero-dependency developer showcase featuring an interactive Engineering Blueprint, project explanation framework, and design token architecture.",
      overview: "A lightweight, accessible developer portfolio built from scratch in vanilla HTML5, CSS3, and JavaScript (ES6+), designed to transparently communicate technical direction, hands-on proof of work, and project architectures.",
      tech: ["HTML5", "CSS3", "JavaScript (ES6+)", "Design Tokens", "CSS Grid"],
      proofTags: ["Zero Dependencies", "Design Tokens", "WAI-ARIA Dialogs", "Theme Engine"],
      status: "Personal Project",
      featured: false,
      github: "https://github.com/VoidVedh/vedh-portfolio",
      sourceUrl: "https://github.com/VoidVedh/vedh-portfolio",
      demo: "https://vedh-portfolio.vercel.app",
      liveUrl: "https://vedh-portfolio.vercel.app",

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
      },

      built: [
        "Zero-dependency Vanilla HTML5/CSS3/JavaScript application architecture",
        "Custom property design token system with persistent Dark/Light mode theme engine",
        "Interactive Engineering Blueprint topology canvas with dynamic domain inspector",
        "WAI-ARIA accessible project explanation modals with focus restoration"
      ],
      workedWith: [
        "Vanilla JavaScript (ES6+)",
        "Semantic HTML5 & WAI-ARIA Dialogs",
        "CSS Custom Properties & Grid",
        "Vercel Edge static hosting"
      ],
      learned: [
        "Architecting clean Model-View separation with centralized data modules in vanilla JS",
        "Implementing accessible focus trapping and keyboard navigation patterns",
        "Optimizing Core Web Vitals and eliminating layout shifts with fixed aspect ratios"
      ]
    },
    {
      id: "cpp-projects",
      name: "C++ Data Structures & Practical Work",
      title: "C++ Data Structures & Practical Work",
      category: "Web & Systems",
      categorySlug: "web-development",
      description: "Foundational data structures, algorithms, and practical programming exercises implemented in modern C++.",
      overview: "A repository of practical coursework exercises and algorithmic implementations in C++, focusing on memory management, pointer manipulation, and foundational data structures.",
      tech: ["C++", "Data Structures", "Algorithms", "Pointers", "Memory Management"],
      proofTags: ["C++ Algorithms", "Data Structures", "Pointer Logic", "Academic Coursework"],
      status: "Academic Coursework",
      featured: false,
      github: "https://github.com/VoidVedh/CPP_PROJECTS",
      sourceUrl: "https://github.com/VoidVedh/CPP_PROJECTS",
      demo: null,
      liveUrl: null,

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
      },

      built: [
        "Practical C++ implementations of foundational algorithms and problem sets",
        "Pointer manipulation and dynamic array management routines",
        "Algorithmic exercises practicing time and space efficiency"
      ],
      workedWith: [
        "C++ language primitives",
        "Standard Template Library (STL) basics",
        "Pointers & memory references",
        "g++ compilation toolchain"
      ],
      learned: [
        "Writing clean, modular C++ code with strict type discipline",
        "Debugging pointer boundaries and segmentation faults",
        "Analyzing asymptotic complexity for practical problem solving"
      ]
    },
    {
      id: "cross-platform",
      name: "Cross-Platform Mobile Application Labs",
      title: "Cross-Platform Mobile Application Labs",
      category: "Web & Systems",
      categorySlug: "web-development",
      description: "Cross-platform mobile application development coursework and user interface experiments using Dart and Flutter.",
      overview: "A collection of academic mobile development assignments exploring widget trees, layout structures, and cross-platform UI patterns.",
      tech: ["Dart", "Flutter", "Cross-Platform", "Mobile UI", "Widgets"],
      proofTags: ["Dart Language", "Widget Hierarchy", "Mobile Layouts", "Academic Coursework"],
      status: "Academic Coursework",
      featured: false,
      github: "https://github.com/VoidVedh/CrossPlatform-College-",
      sourceUrl: "https://github.com/VoidVedh/CrossPlatform-College-",
      demo: null,
      liveUrl: null,

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
      },

      built: [
        "Weekly academic mobile development assignments and user interface screens",
        "Declarative widget composition with responsive layout containers",
        "Form input validation and mobile view transitions"
      ],
      workedWith: [
        "Dart programming language",
        "Stateless & Stateful widget patterns",
        "Mobile layout constraints & flex containers",
        "Mobile emulator testing"
      ],
      learned: [
        "Grasping modern declarative mobile architecture concepts",
        "Structuring reusable UI components in cross-platform frameworks",
        "Managing mobile view state and layout constraints"
      ]
    }
  ],

  // ---------------------------------------------------------
  // CURRENTLY BUILDING (2026 TRACKS)
  // ---------------------------------------------------------
  currentlyBuilding: [
    {
      track: "01",
      area: "Cloud & Infrastructure Automation",
      year: "2026",
      summary: "Expanding multi-tier AWS deployments, Terraform HCL modules, and Kubernetes (K3s) container orchestration.",
      detail: "Building automated CI/CD pipelines, containerized microservices, and Infrastructure-as-Code setups to eliminate configuration drift."
    },
    {
      track: "02",
      area: "Systems & Network Security",
      year: "2026",
      summary: "Exploring Linux internals, network protocol analysis, and active service discovery in isolated lab environments.",
      detail: "Inspecting raw packet captures in Wireshark, executing targeted Nmap scans, and analyzing transport layer flags directly in POSIX terminals."
    },
    {
      track: "03",
      area: "Applied Machine Learning",
      year: "2026",
      summary: "Deepening theoretical understanding of decision trees, classification split metrics, and feature transformations in Python.",
      detail: "Implementing supervised learning algorithms from mathematical principles using scikit-learn, NumPy, and Pandas."
    }
  ],

  // ---------------------------------------------------------
  // DEV LOG (Learning Stream)
  // ---------------------------------------------------------
  activity: [
    {
      date: "August 2026",
      content: "Refactored portfolio project showcase around authentic GitHub repositories (TwinCore, FacilityOps, ML Experiments) with verified architecture breakdowns and zero external dependencies.",
      tags: ["portfolio", "architecture", "devops", "authenticity"]
    },
    {
      date: "July 2026",
      content: "Completed FacilityOps multi-tier AWS cloud architecture: configured Terraform VPC modules with private subnet isolation for Amazon RDS MySQL and automated Docker Compose stacks.",
      tags: ["aws", "terraform", "fastapi", "docker", "rds"]
    },
    {
      date: "July 2026",
      content: "Implemented decision tree classification experiments in Python: compared Gini Impurity vs Entropy split criteria and evaluated depth pruning against overfitting.",
      tags: ["machinelearning", "python", "scikitlearn", "trees"]
    },
    {
      date: "June 2026",
      content: "Architected TwinCore telemetry infrastructure on AWS: provisioned EC2 with Terraform HCL, deployed Flask container inside K3s, and automated builds with Jenkins.",
      tags: ["aws", "terraform", "k3s", "docker", "jenkins"]
    }
  ],

  // ---------------------------------------------------------
  // WHAT I WORK WITH (Categorized Technical Breadth)
  // ---------------------------------------------------------
  whatIWorkWith: [
    {
      category: "CLOUD & DEVOPS",
      items: ["AWS (EC2, VPC, RDS, S3)", "Terraform (IaC)", "Docker & Compose", "Nginx", "Kubernetes/K3s (Learning)", "Jenkins CI/CD (Learning)"]
    },
    {
      category: "CORE LANGUAGES",
      items: ["Python (Used)", "JavaScript ES6+ (Used)", "HTML5 / CSS3 (Used)", "C++ (Used)", "Dart (Exploring)", "Java Core (Exploring)"]
    },
    {
      category: "SYSTEMS & SECURITY",
      items: ["Linux (Used)", "WSL (Used)", "TCP/IP & HTTP (Used)", "Nmap (Exploring)", "Wireshark (Exploring)", "Kali Linux (Exploring)"]
    },
    {
      category: "DATA & MACHINE LEARNING",
      items: ["NumPy (Used)", "Pandas (Used)", "Jupyter (Used)", "scikit-learn (Learning)", "Decision Trees (Learning)"]
    }
  ],

  // ---------------------------------------------------------
  // HOW I BUILD (Systematic Sequence)
  // ---------------------------------------------------------
  howIBuild: {
    steps: [
      { num: "01", name: "Understand", desc: "Deconstruct system requirements down to foundational primitives." },
      { num: "02", name: "Research", desc: "Analyze protocol constraints, infrastructure architectures, and edge cases." },
      { num: "03", name: "Build", desc: "Implement clean code and declarative infrastructure configurations." },
      { num: "04", name: "Test", desc: "Inspect network packets, container logs, and evaluate validation metrics." },
      { num: "05", name: "Break", desc: "Test boundary limits, simulate network disconnects, and fix errors." },
      { num: "06", name: "Document", desc: "Record technical takeaways, architectures, and lessons learned." }
    ],
    statement: "I learn fastest by building things, running into problems, debugging them, and understanding why the solution works."
  },

  // ---------------------------------------------------------
  // EDUCATION / JOURNEY
  // ---------------------------------------------------------
  journey: [
    {
      year: "2025 – 2029",
      title: "B.Tech in Computer Science & Engineering",
      place: "ITM, Kharghar",
      detail: "Undergraduate degree in CSE (In Progress) · Focus on Cloud, Systems, and Data Science"
    },
    {
      year: "2022 – 2025",
      title: "Diploma in Computer Engineering",
      place: "VPM Polytechnic, Thane (MSBTE)",
      detail: "Graduated with 71.94% · Built solid foundation in programming, networking, and OS"
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
      detail: "Deepening practical skills across cloud automation (Terraform, AWS), Linux systems, and applied machine learning."
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
