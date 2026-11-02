/**
 * data/content.js
 * ---------------------------------------------------------------
 * Dual-Profile Portfolio Dataset
 * Supporting seamless switching between:
 * 1. Vedh Jayesh Naik (Software Engineer, Builder, SIH '24 Winner)
 * 2. Kayla Padilla (Showcase: USC/UPenn Alum, Sideline Post Founder, Klutch Sports Analyst)
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
  },

  kayla: {
    id: "kayla",
    name: "Kayla Padilla",
    shortName: "Kayla",
    initials: "KP",
    tagline: "Graduate of USC’s Master of Science in Entrepreneurship and Innovation program and UPenn alum, passionate about a career in tech, sports, and music.",
    avatar: "assets/profile/kayla.jpg",
    avatarFallback: "https://images.squarespace-cdn.com/content/v1/62dc43e419bfa717fc15773f/2f600651-b63d-4587-8072-c881bf7939a8/Headshot+2023+2.JPG",
    location: "Los Angeles & Southern California",
    email: "kaylapadilla.business@gmail.com",
    resumeUrl: "#resume",
    statusBadge: "Analyst @ KLUTCH Sports Group | USC & Wharton Alum",
    socials: [
      { name: "Website", url: "https://kaylapadilla.org/", icon: "globe" },
      { name: "Instagram", url: "https://instagram.com/kcpmusic", icon: "instagram" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/kayla-padilla/", icon: "linkedin" },
      { name: "Email", url: "mailto:kaylapadilla.business@gmail.com", icon: "mail" }
    ],
    intro: {
      headline: "Intro",
      paragraphs: [
        "I was born and raised in Southern California where I grew up in a Lakers town and always had good music playing around the house. These threads of family, basketball, and music have defined my life path and experiences.",
        "I received a Master of Science in Entrepreneurship and Innovation degree from the University of Southern California’s Marshall School of Business in tandem with being the starting point guard of the 2023-2024 Elite 8 and PAC-12 Championship Trojans Women’s Basketball Team.",
        "This follows the completion of my undergraduate degree at the University of Pennsylvania where I earned a Bachelor of Science in Economics with concentrations in Finance and Management from the Wharton School of Business. At Penn, I was also a four-year member on the Quakers Women’s Basketball Team and two-time captain."
      ]
    },
    quotes: [
      {
        text: "Humility is not thinking less of yourself, but thinking of yourself less.",
        author: "C.S. Lewis"
      },
      {
        text: "The most important thing is to try and inspire people so that they can be great in whatever they want to do.",
        author: "Kobe Bryant"
      },
      {
        text: "Something's lost, but something's gained, in living everyday.",
        author: "Joni Mitchell, Both Sides Now"
      }
    ],
    song: {
      title: "Both Sides Now",
      artist: "Joni Mitchell",
      album: "Clouds",
      note: "Current song on repeat",
      spotifyUrl: "https://open.spotify.com/search/Joni%20Mitchell%20Both%20Sides%20Now",
      bpm: 72,
      frequencyNotes: [261.63, 293.66, 329.63, 392, 440, 523.25]
    },
    projects: [
      {
        id: "the-sideline-post",
        title: "The Sideline Post",
        role: "Founder, Editor-in-Chief",
        category: "creative",
        badge: "Media Platform",
        description: "The first-ever centralized platform for college athletes to share their stories through their own words. Inspired by the Players' Tribune, born in April 2020 during my freshman year at Penn.",
        highlights: [
          "Published 50+ full-length stories from collegiate athletes around the world across dozens of sports",
          "Generated over 18,000 page views in the first year of operation",
          "Manage an active team of college students overseeing editorial, social, and operations"
        ],
        tech: ["Digital Media", "Publishing", "Team Management", "Athlete Branding"],
        links: [
          { label: "Visit Platform", url: "https://thesidelinepost.com" }
        ]
      },
      {
        id: "kcp-music",
        title: "@kcpmusic — Musical Journey & Song Reviews",
        role: "Creator & Musician",
        category: "creative",
        badge: "Music & Community",
        description: "Documenting my musical journey on guitar, piano, and drums while sharing recurring song recommendations and in-depth thoughts on albums and artists.",
        highlights: [
          "Perform acoustic covers of classic and indie tracks across guitar, keys, and percussion",
          "Curate 'Current Favorite Songs' playlists and editorial music writeups",
          "Built an engaged community of music lovers bridging sports and melody"
        ],
        tech: ["Guitar", "Piano", "Audio Production", "Creative Writing"],
        links: [
          { label: "Instagram @kcpmusic", url: "https://instagram.com/kcpmusic" }
        ]
      },
      {
        id: "springsteen-heardle",
        title: "Springsteen Heardle",
        role: "Creator & Developer",
        category: "technical",
        badge: "27K+ Users",
        description: "Pairing the worldwide craze in daily guessing games with my love for Bruce Springsteen's catalog. Users guess the mystery song in the fewest attempts possible.",
        highlights: [
          "Acquired over 27,000 new users and 92,000 page views in its very first month",
          "Averages nearly 2,000 weekly active visitors across the global Springsteen fanbase",
          "Built interactive audio snippet streaming with client-side JavaScript on Glitch"
        ],
        tech: ["JavaScript", "Web Audio", "Glitch", "Game Design"],
        links: [
          { label: "Play Game", url: "https://kaylapadilla.org/projects" }
        ]
      },
      {
        id: "graphic-design-merch",
        title: "Graphic Design & Merchandise Brand",
        role: "Freelance Designer",
        category: "creative",
        badge: "Design",
        description: "Freelance brand identity, digital marketing assets for The Sideline Post, and custom merchandise lines including apparel designs.",
        highlights: [
          "Produced high-impact social media assets and editorial branding for collegiate campaigns",
          "Designed custom merchandise lines for athletes and community projects",
          "Proficient in Adobe Creative Suite, Canva, and modern digital asset pipelines"
        ],
        tech: ["Branding", "Merchandise", "Typography", "Visual Arts"],
        links: [
          { label: "View Work", url: "https://kaylapadilla.org/projects" }
        ]
      }
    ],
    experience: [
      {
        title: "Analyst — Sports & Brands Insights Team",
        company: "KLUTCH Sports Group",
        location: "Beverly Hills, CA",
        period: "March 2025 - Present",
        bullets: [
          "Conduct data-driven valuation and cultural analytics for top-tier athlete and brand partnerships.",
          "Support strategic client representations across major professional sports leagues."
        ]
      },
      {
        title: "Accountant — Advisory Services & Family Office",
        company: "Citrin Cooperman",
        location: "Woodland Hills, CA",
        period: "August 2024 - March 2025",
        bullets: [
          "Served high-net-worth entertainment, music, and sports clientele within the Business Management Family Office.",
          "Prepared comprehensive cash flow modeling, bank reconciliations, and critical client financial insights.",
          "Leveraged QuickBooks, Agilink, and advanced financial modeling techniques."
        ]
      },
      {
        title: "Large Customer Sales BOLD Intern",
        company: "Google",
        location: "Chicago, IL",
        period: "May 2022 - August 2022",
        bullets: [
          "Completed rigorous Sales School curriculum across Google Ads, YouTube, and Search optimization.",
          "Supported enterprise accounts managing $1M+ quarterly digital advertising budgets.",
          "Conducted summer-long market research for Google's early graduate American Sales Associate Program."
        ]
      },
      {
        title: "Entertainment Banking Intern",
        company: "City National Bank",
        location: "Beverly Hills, CA",
        period: "May 2021 - August 2021",
        bullets: [
          "Participated in high-net-worth client meetings evaluating investment portfolios and financial statements.",
          "Spearheaded marketing collateral for City National Bank's Donor-Advised Fund initiative."
        ]
      },
      {
        title: "Corporate Finance Intern",
        company: "Allied Universal",
        location: "Tustin, CA",
        period: "May 2020 - August 2020",
        bullets: [
          "Assisted VP of Finance in monthly vertical expense reporting and executive variance analyses.",
          "Partnered with pricing analysts on multi-million dollar security bidding proposals."
        ]
      }
    ],
    education: [
      {
        degree: "Master of Science in Entrepreneurship and Innovation",
        institution: "University of Southern California — Marshall School of Business",
        period: "Class of 2024",
        notes: "Cumulative GPA: 3.68. Starting Point Guard for 2023-24 Elite 8 & Pac-12 Championship Women's Basketball."
      },
      {
        degree: "Bachelor of Science in Economics (Finance & Management)",
        institution: "University of Pennsylvania — The Wharton School",
        period: "Class of 2023",
        notes: "Cumulative GPA: 3.5. 4-Year Varsity Basketball Member & 2-Time Team Captain, 2x First-Team All-Ivy."
      }
    ],
    media: [
      {
        title: "The Next: Kayla Padilla is the floor leader USC needed",
        outlet: "The Next Hoops",
        year: "2024",
        summary: "In-depth profile by David Mendez-Yapkowitz detailing Kayla's veteran leadership directing the Trojans offense to the Pac-12 Championship.",
        tag: "Feature"
      },
      {
        title: "Associated Press: Asian players Lee, Padilla making case for NBA, WNBA looks",
        outlet: "Associated Press (AP)",
        year: "2024",
        summary: "National feature on breaking barriers and representing Asian-American athletes in Division 1 basketball and professional prospects.",
        tag: "National Press"
      },
      {
        title: "Penn Today: Kayla the magnificent",
        outlet: "University of Pennsylvania",
        year: "2023",
        summary: "Comprehensive retrospective on Kayla's historic collegiate career at Penn, dual-threat academic excellence at Wharton, and leadership.",
        tag: "Profile"
      },
      {
        title: "USC Annenberg: Kayla Padilla shoots for the stars",
        outlet: "USC Annenberg Media",
        year: "2024",
        summary: "Focus piece on graduate transfer experience, community leadership, and inspiring next-generation student-athletes.",
        tag: "Feature"
      },
      {
        title: "Philadelphia Inquirer: Penn’s Kayla Padilla credits WNBA coach with rise to stardom",
        outlet: "The Philadelphia Inquirer",
        year: "2022",
        summary: "Story highlighting development, work ethic, and NIL partnerships beyond the court.",
        tag: "Press"
      }
    ],
    resources: [
      {
        title: "Getting the Internship: Step-by-Step Guide to Google",
        category: "Career Resource",
        description: "A comprehensive breakdown of how I prepared for and landed Google's competitive BOLD internship from an athlete's background."
      },
      {
        title: "Interview Prep Document & Common Questions",
        category: "Interview Playbook",
        description: "Curated behavioral and situational questions used to prepare for corporate finance and big-tech client-facing interviews."
      },
      {
        title: "Mastering 'Tell Me About Yourself'",
        category: "Public Speaking",
        description: "How to connect seemingly disparate threads (sports, academics, music) into an unforgettable personal pitch."
      }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_PROFILES;
}
