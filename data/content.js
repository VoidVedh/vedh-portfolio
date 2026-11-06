/**
 * data/content.js
 * ---------------------------------------------------------------
 * Portfolio Dataset — Vedh Jayesh Naik
 * Software Engineer, Builder, SIH '24 Winner
 * ---------------------------------------------------------------
 */

const PORTFOLIO_PROFILES = {
  vedh: {
    id: "vedh",
    name: "Vedh Jayesh Naik",
    shortName: "Vedh",
    initials: "VN",
    tagline: "Computer Science & Engineering student at ITM Kharghar, builder, and Smart India Hackathon '24 winner passionate about algorithms, systems, and craft.",
    avatar: "assets/profile/vedh.jpg",
    avatarFallback: "assets/profile/vedh.webp",
    location: "Navi Mumbai, India",
    email: "vedh1440@gmail.com",
    resumeUrl: "assets/resume.pdf",
    statusBadge: "Open to High-Impact Roles & Collaborations",
    socials: [
      { name: "GitHub", url: "https://github.com/VoidVedh", icon: "github" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/vedh-naik-b559b4321/", icon: "linkedin" },
      { name: "Email", url: "mailto:vedh1440@gmail.com", icon: "mail" }
    ],
    intro: {
      headline: "Intro",
      paragraphs: [
        "I was born and raised in Navi Mumbai, where curiosity for how digital systems work under the hood sparked my obsession with computer science. From early experiments with C++ and data structures to deploying full-stack web applications, I have always believed in building with clarity, discipline, and uncompromising attention to detail.",
        "Currently pursuing my B.Tech in Computer Science & Engineering at ITM Kharghar after graduating with distinction in Computer Engineering from VPM Polytechnic Thane, I thrive at the intersection of robust algorithmic fundamentals and polished user experiences.",
        "In 2024, our team clinched 1st Prize at the prestigious Smart India Hackathon (SIH) under the Ministry of Education & AICTE, proving that relentless focus, architectural intuition, and team execution can solve high-stakes challenges. When I am not writing code, I enjoy exploring system internals, reading technical papers, and curating thoughtful playlists."
      ]
    },
    quotes: [
      {
        text: "Simplicity is prerequisite for reliability.",
        author: "Edsger W. Dijkstra"
      },
      {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
      },
      {
        text: "Make it work, make it right, make it fast.",
        author: "Kent Beck"
      }
    ],
    song: {
      title: "Resonance",
      artist: "HOME",
      album: "Odyssey",
      note: "Late-night systems coding soundtrack",
      spotifyUrl: "https://open.spotify.com/search/HOME%20Resonance",
      bpm: 85,
      frequencyNotes: [220, 261.63, 329.63, 392, 440, 523.25]
    },
    projects: [
      {
        id: "sih-2024",
        title: "Smart India Hackathon 2024 — Grand Finale Winner",
        role: "Team Lead & Core Engineer",
        category: "technical",
        badge: "1st Prize National",
        description: "National championship solution designed for the Ministry of Education & AICTE. Built an end-to-end software pipeline tackling real-world governance challenges under rigorous 36-hour continuous evaluation.",
        highlights: [
          "Awarded 1st Prize out of thousands of competing engineering teams nationwide",
          "Architected real-time processing and modular service communication",
          "Led team coordination, live technical presentations, and executive defense"
        ],
        tech: ["Full Stack", "APIs", "System Architecture", "Algorithms"],
        links: [
          { label: "View Achievement", url: "#media" }
        ]
      },
      {
        id: "cpp-dsa-suite",
        title: "C++ Data Structures & Algorithmic Suite",
        role: "Creator",
        category: "technical",
        badge: "Open Source",
        description: "A comprehensive repository of foundational data structures, algorithmic implementations, and optimization benchmarks. Explores memory access patterns, time complexities, and recursion trees.",
        highlights: [
          "Clean implementations of sorting, tree traversals, and dynamic programming",
          "Thorough documentation of Big-O time and space complexity trade-offs",
          "Benchmarked against standard library algorithms for cache-friendly operations"
        ],
        tech: ["C++", "DSA", "Algorithms", "Memory Management"],
        links: [
          { label: "GitHub Repo", url: "https://github.com/VoidVedh/CPP_PROJECTS" }
        ]
      },
      {
        id: "editorial-portfolio-engine",
        title: "Editorial Web Engine & Design System",
        role: "Designer & Engineer",
        category: "creative",
        badge: "Live Product",
        description: "A zero-dependency, ultra-fast portfolio architecture marrying high-end magazine typography with native Web View Transitions and an interactive audio synthesizer. Built to eradicate generic 'AI slop' portfolios.",
        highlights: [
          "Zero build-step runtime, 100/100 Lighthouse performance and accessibility scores",
          "Native View Transitions API with fluid reduced-motion fallbacks",
          "Built-in Web Audio API synthesizer for the interactive music player"
        ],
        tech: ["Vanilla JS", "Modern CSS", "View Transitions", "Web Audio API"],
        links: [
          { label: "GitHub Repo", url: "https://github.com/VoidVedh/vedh-portfolio" }
        ]
      },
      {
        id: "linux-systems-lab",
        title: "Systems Lab & Terminal Experiments",
        role: "Developer",
        category: "technical",
        badge: "Exploration",
        description: "A hands-on sandbox exploring POSIX system calls, process scheduling, memory layouts, and lightweight shell automation scripts.",
        highlights: [
          "Custom shell scripting suite for automated developer environment setup",
          "Exploration of file descriptors, pipes, and inter-process signals",
          "Performance profiling on minimal Linux container runtimes"
        ],
        tech: ["Linux", "Bash", "POSIX", "Git"],
        links: [
          { label: "GitHub", url: "https://github.com/VoidVedh" }
        ]
      }
    ],
    experience: [
      {
        title: "Project Lead & Core Software Developer",
        company: "Smart India Hackathon 2024",
        location: "National Level (Govt. of India)",
        period: "2024",
        bullets: [
          "Spearheaded technical architecture and solution strategy under high-pressure competitive hackathon conditions.",
          "Presented the final product to national jury panels, securing First Place against top technical institutions.",
          "Ensured clean codebase structure, version control discipline, and flawless final deployment."
        ]
      },
      {
        title: "Software Engineering & Systems Trainee",
        company: "Academic & Open Source Labs",
        location: "Mumbai, India",
        period: "2023 - Present",
        bullets: [
          "Authored algorithmic problem sets and practice suites in modern C++ and Java.",
          "Designed responsive web interfaces adhering to WCAG 2.1 AA accessibility guidelines.",
          "Active collaborator in peer programming, code reviews, and developer community hack nights."
        ]
      }
    ],
    education: [
      {
        degree: "B.Tech in Computer Science & Engineering",
        institution: "ITM, Kharghar",
        period: "2025 - Expected Graduation",
        notes: "Currently pursuing. Focused on Advanced Algorithms, Database Internals, and Distributed Systems."
      },
      {
        degree: "Diploma in Computer Engineering",
        institution: "VPM Polytechnic, Thane (MSBTE)",
        period: "2022 - 2025",
        notes: "Graduated with Distinction: 71.94%. Core coursework in Object-Oriented Programming, Data Structures, and Computer Networks."
      },
      {
        degree: "Class X (ICSE Board)",
        institution: "Vibgyor High School, Airoli",
        period: "Completed 2022",
        notes: "Scored 76.17%. Strong foundation in mathematics, logic, and computer applications."
      }
    ],
    media: [
      {
        title: "Smart India Hackathon 2024: 1st Prize Winners Announcement",
        outlet: "Ministry of Education & AICTE",
        year: "2024",
        summary: "Recognized at the national level for developing an innovative technical solution to an official problem statement, evaluated by industry and academic leaders.",
        tag: "National Honor"
      },
      {
        title: "Academic Milestone: Computer Engineering Diploma with Distinction",
        outlet: "VPM Polytechnic, Thane (MSBTE)",
        year: "2025",
        summary: "Recognized for consistent academic performance across three years of rigorous computer engineering curriculum and laboratory practicums.",
        tag: "Academic"
      },
      {
        title: "Technical Writing: Deconstructing Algorithmic Efficiency in C++",
        outlet: "Engineering Notes & GitHub",
        year: "2024",
        summary: "An accessible guide for student developers on analyzing time complexities and avoiding common cache pitfalls in sequential algorithms.",
        tag: "Publication"
      }
    ],
    resources: [
      {
        title: "How to Win Smart India Hackathon: The Playbook",
        category: "Competition Guide",
        description: "A battle-tested blueprint covering team formation, problem statement selection, rapid prototyping, and delivering a winning jury pitch."
      },
      {
        title: "Foundational DSA Roadmap: Zero to Confident",
        category: "Learning Path",
        description: "Curated problem patterns in arrays, two-pointers, trees, and graphs for students preparing for technical interviews without burnout."
      },
      {
        title: "The Zero-Dependency Web Architecture",
        category: "Design Notes",
        description: "Why vanilla web standards (HTML5, modern CSS, ES Modules) outlast framework churn and provide unbeatable performance."
      }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_PROFILES;
}

