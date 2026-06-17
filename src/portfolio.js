/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file

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
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rutuja Gophane",
  title: "Cloud & DevOps Enthusiast",
  subTitle: emoji(
    "I'm Rutuja Gophane, an aspiring Linux and DevOps Engineer passionate about cloud computing, automation, and open-source technologies. I am currently focusing on containerization, network infrastructure, and building scalable cloud solutions."
  ),
  resumeLink: "", // Include your profile or drive link here if available
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rutujagophane",
  linkedin: "https://www.linkedin.com/in/rutuja-gophane",
  gmail: "rutujagophane07@gmail.com",
  hashnode: "rutujaa07",
  display: true // Set false to hide this section, defaults to true
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "ASPIRING CLOUD INFRASTRUCTURE & DEVOPS ENGINEER",
  skills: [
    emoji(
      "⚡ Developing and deploying responsive frontend interfaces and web layouts"
    ),
    emoji(
      "⚡ Configuring basic network architectures, understanding routing protocols, and throughput concepts"
    ),
    emoji(
      "⚡ Studying cloud environment essentials, system automation, and Linux administration principles"
    )
  ],

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassName: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassName: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassName: "fab fa-js"
    },
    {
      skillName: "Python",
      fontAwesomeClassName: "fab fa-python"
    },
    {
      skillName: "AWS",
      fontAwesomeClassName: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassName: "fab fa-docker"
    },
    {
      skillName: "Linux",
      fontAwesomeClassName: "fab fa-linux"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Shivaji University",
      logo: null, 
      subHeader: "Bachelor of Science in Computer Science",
      duration: "June 2023 - April 2026",
      desc: "Focused on computer networking, foundational software engineering, and system design layouts.",
      descBullets: [
        "Studied advanced computer networking protocols, network architecture, and security concepts.",
        "Gained hands-on experience in cloud deployment, virtualization, and Linux administration.",
        "Participated in workshops and completed technical lab assignments on Cisco Networking platforms."
      ]
    }
  ]
};

// Your Tech Projects (Work Experience Section Used for Projects/Designs)

const workExperiences = {
  display: true, // Set false to hide this section, defaults to true
  experience: [
    {
      role: "UI/UX & Frontend Design",
      company: "TRENDPACKS (E-Commerce Web Project)",
      companylogo: require("./assets/images/codeInLogo.webp"),
      date: "Dec 2025 - Feb 2026",
      desc: "Developed a comprehensive user interface layout for a premium e-commerce bag brand. Designed clean landing pages, customer registration workflows, and secure payment form prototypes.",
      descBullets: [
        "Created modern UI mockups emphasizing responsiveness and interactive product grids.",
        "Integrated structured contact configurations and streamlined user onboarding layouts."
      ]
    },
    {
      role: "UI/UX Concept Design",
      company: "TIMELESS WATCHES",
      companylogo: require("./assets/images/codeInLogo.webp"),
      date: "Oct 2025 - Dec 2025",
      desc: "Designed premium digital presentation layouts and interface assets for a high-end watch collection storefront, focusing on minimalist aesthetic appeal.",
      descBullets: [
        "Built landing page structures optimized for high-quality product visualization.",
        "Created user registration interfaces and intuitive custom contact forms."
      ]
    }
  ]
};

// Open Source Section

const openSource = {
  showGithubProfile: "true", 
  display: false // Set false to hide this section, defaults to true
};

// Achievements & Certifications Section

const achievementsCards = {
  title: "Achievements & Certifications 🏆",
  subtitle: "Achievements, Certifications, and Technical Contributions",
  achievementsCards: [
    {
      title: "AWS Cloud Practitioner Essentials",
      subtitle: "Successfully completed the AWS Cloud Practitioner Essentials course, validating fundamental knowledge of cloud concepts, AWS services, security, architecture, and pricing models.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "AWS Cloud Practitioner Essentials Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.mindluster.com"
        }
      ]
    },
    {
      title: "Python and Artificial Intelligence Bootcamp",
      subtitle: "Successfully completed a 7-days intensive bootcamp on Python programming and Artificial Intelligence concepts, organized by DevTown in collaboration with Google Developer Student Clubs (GDSC KIIT Chapter) and AWS Community Builders.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Python and AI Bootcamp Certificate",
      footerLink: [
        {
          name: "Certificate of Completion",
          url: "https://cert.devtown.in/verify/1WJmeT"
        }
      ]
    },
    {
      title: "Python Programming Language",
      subtitle: "Completed a comprehensive course focusing on Python programming foundations, syntax, data structures, and foundational coding principles.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Python Programming Language Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.mindluster.com"
        }
      ]
    },
    {
      title: "Launched 'Linux Learning Hub' Blog",
      subtitle: "Authored and published technical content to help beginners understand operating system fundamentals. Featured post: 'Getting Started with Linux: Essential Commands Every Beginner Should Know' focused on Cloud and DevOps prerequisites.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Linux Learning Hub",
      footerLink: [
        {
          name: "Read Blog Post",
          url: "https://your-linux-hub-link.vercel.app"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "With Love for Developing and Writing, I write technical blogs on cloud infrastructure and core systems.",
  blogs: [
    {
      url: "https://your-linux-hub-link.vercel.app",
      title: "Getting Started with Linux",
      description: "Essential terminal commands, file system hierarchy, and basic navigation concepts every beginner should know before entering Cloud and DevOps fields."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Section

const talkSection = {
  title: "Talks",
  subtitle: emoji(""),
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcasts 🎙️"),
  subtitle: "I LOVE TALKING ABOUT TECH...",
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9423662612", 
  email_address: "rutujagophane07@gmail.com"
};

export {
  splashScreen,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  achievementsCards,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo
};
