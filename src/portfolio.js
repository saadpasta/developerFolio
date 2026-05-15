/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "G M Laasya",
  title: "Hi all, I'm G M Laasya 👋",
  subTitle: emoji(
    "Computer Science Engineering student passionate about Artificial Intelligence, Cloud Computing, and Secure Systems."
  ),
  resumeLink: "",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/GMLaasya",
  linkedin: "https://www.linkedin.com/in/g-m-laasya-083162293/",
  gmail: "mailto:23211a0586@bvrit.ac.in",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "PASSIONATE COMPUTER SCIENCE ENGINEERING STUDENT INTERESTED IN ARTIFICIAL INTELLIGENCE,  AND INTELLIGENT SYSTEMS",

  skills: [
    "⚡ Build AI-powered and intelligent applications",
    "⚡ Work with Java, Python, SQL, and problem-solving",
    "⚡ Explore research-driven and real-world technology solutions"
  ],

  softwareSkills: [
    {
      skillName: "C"
    },
    {
      skillName: "Java"
    },
    {
      skillName: "Python"
    },
    {
      skillName: "SQL"
    },
    {
      skillName: "HTML"
    },
    {
      skillName: "CSS"
    },
    {
      skillName: "JavaScript"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "B V Raju Institute of Technology",
      subHeader: "B.Tech in Computer Science and Engineering",
      duration: "2023 - 2027",
      desc: "Currently pursuing B.Tech in Computer Science and Engineering with interests in Artificial Intelligence, Cybersecurity, Cloud Computing, and Secure Systems.",
      descBullets: [
        "Interested in Artificial Intelligence, Cloud Computing",
        "Actively improving Data Structures, Algorithms, and Problem Solving skills"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Programming (Java, Python, C)",
      progressPercentage: "75%"
    },
    {
      Stack: "Cryptography",
      progressPercentage: "70%"
    },
    {
      Stack: "Cloud Computing",
      progressPercentage: "65%"
    },
    {
      Stack: "Artificial Intelligence & Machine Learning",
      progressPercentage: "60%"
    },
    {
      Stack: "Frontend Development (HTML, CSS, JavaScript)",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  title: "Experience",
  subtitle: "INTERNSHIPS AND PRACTICAL LEARNING EXPERIENCE",

  experience: [
    {
      role: "AI Summer Intern",
      company: "Mirai School of Technology",
      companylogo: require("./assets/images/Mirai Certificate.jpeg"),
      date: "2026",

      desc: "Completed an AI Summer Internship focused on Artificial Intelligence tools, frameworks, and real-world project development. Gained practical exposure to intelligent systems and AI-based problem-solving.",

      descBullets: [
        "Explored AI tools and frameworks",
        "Worked on AI-based real-world projects",
        "Strengthened practical understanding of intelligent systems"
      ]
    }
  ],

  display: true
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF THE PROJECTS I HAVE WORKED ON",

  projects: [
    

      {
  projectName: "Verified Document Intelligence System",
  projectDesc:
    "AI-powered document analysis assistant that enables users to upload PDFs and query their content. Tech Stack: Python | Streamlit | LangChain | FAISS | Ollama (Phi-3)"
},
{
  projectName: "AI-Powered Resume and Job Description Matcher",
  projectDesc:
    "Intelligent resume matching system that helps job seekers and recruiters compare resumes with job descriptions. Tech Stack: Python | NLP | Machine Learning | Streamlit"
},
{
  projectName: "JourneyX Planner",
  projectDesc:
    "Smart travel planning application that helps users organize trips, discover destinations, and manage travel itineraries efficiently. Tech Stack: React.js | JavaScript | HTML | CSS | API Integration"
},
  ],

  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Achievements & Certifications",
  subtitle: "RESEARCH CONTRIBUTIONS, CERTIFICATIONS, AND ACADEMIC ACHIEVEMENTS",

  achievementsCards: [
    {
      title: "Quantum Safe Encryption for Securing Healthcare Data",
      subtitle:
        "Published research paper in the 2025 3rd World Conference on Communication & Computing (WCONF). Developed a quantum-safe encryption framework using CRYSTALS-Kyber, Diffie-Hellman key exchange, and AES encryption for securing healthcare data.",
      image: require("./assets/images/Quantum Safe Paper Certificate.jpeg"),

      footerLink: [
        {
          name: "View Publication",
          url: "https://doi.org/10.1109/WCONF64849.2025.11233562"
        }
      ]
    },

    {
      title: "Salesforce Certified Agentforce Specialist",
      subtitle:
        "Professional certification in Salesforce Agentforce technologies (Dec 2025).",
      image: require("./assets/images/SalesForce Certificate.jpeg"),
      footerLink: []
    },

    {
      title: "SQL and Relational Databases 101",
      subtitle:
        "Completed certification by IBM Developer Skills Network focused on SQL fundamentals and relational databases (May 2025).",
      image: require("./assets/images/IBM SQL Certificate.jpeg"),

      footerLink: []
    },

    {
      title: "Frontend with JavaScript",
      subtitle:
        "Completed certification by TASK focused on frontend development concepts using JavaScript (Feb 2025).",
      image: require("./assets/images/Frontend with Js Certificate.jpeg"),

      footerLink: []
    },

    {
      title: "Java Foundations Certificate",
      subtitle:
        "Completed Oracle Academy certification covering Java fundamentals and programming concepts (Sep 2024).",
      image: require("./assets/images/java foundations Certificate.jpeg"),

      footerLink: []
    },

    {
      title: "Generative AI",
      subtitle:
        "Completed Google Cloud certification focused on Generative AI concepts and applications (Aug 2024).",
      image: require("./assets/images/generative AI Certificate.jpeg"),

      footerLink: []
    }
  ],

  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: "Contact Me",
  subtitle:
    "Feel free to connect for internships, collaborations, or opportunities.",
  number: "+91 8106871348",
  email_address: "23211a0586@bvrit.ac.in"
};

// Twitter Section

const twitterDetails = {
  userName: "",
  display: false
};
const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
