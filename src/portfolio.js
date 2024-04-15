/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// make our custom icons `./myicons` available in Font Awesome
import { dom, library } from "@fortawesome/fontawesome-svg-core";
import {
  faAzure,
  faBlockchain,
  faCypress,
  faLambda,
  faServerless,
  faTS
} from "./assets/myicons";
import { workExpArray } from "./data/WorkExpArray";

// noinspection JSCheckFunctionSignatures
library.add([faTS, faLambda, faServerless, faBlockchain, faAzure, faCypress]);

dom.watch();

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hesam Ossanloo",
  title: "Heya, I'm Hesam",
  subTitle: emoji(
    `I'm a cofounder, proactive technology and people leader with 19+ years of experience in leadership and software 
development across multiple disciplines and tech stacks for startups and established companies. A volunteer PhD 
candidate focusing on Semantic Search and Ontology (Dropped out) and research fellow at Planetary Transportation Systems 
working on sending a lunar rover to the Moon. Passionate about 
working in great teams focusing on quality, personal development, mentoring and solving problems.`
  ),
  resumeLink: "Hesam-CV-EN.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hesamossanloo",
  linkedin: "https://www.linkedin.com/in/hesamossanloo/",
  email: "hesam@ossanloo.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Enthusiast Engineer Leader, Solving complex problems, finding and mentoring talents",
  skills: [
    emoji(
      "⚡ Leading teams to build highly scalable, reliable, secure, cost-efficient and performant cloud solutions."
    ),
    emoji(
      "⚡ Building interactive Frontend / Backend for your web, tablet, mobile and smart TV applications."
    ),
    emoji(
      "⚡ Finding solutions for automatic CI/CD pipeline, release process, code quality, monitoring and data analysis."
    ),
    emoji(
      "⚡ Solving complex problems regardless of the industry and teaching teams how to approach such problems."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
    https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fabi fa-azure"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fabi fa-ts"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "NoSQL/SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Blockchain",
      fontAwesomeClassname: "fabi fa-blockchain"
    },
    {
      skillName: "Cypress",
      fontAwesomeClassname: "fabi fa-cypress"
    },
    {
      skillName: "GIT",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Atlassian",
      fontAwesomeClassname: "fab fa-atlassian"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName:
        "Hochschule Darmstadt - University of Applied Sciences (Germany)",
      logo: require("./assets/images/hdaLogo.png"),
      subHeader: "Phd. in Computer Science (Dropped out)",
      duration: "September 2015 - September 2023",
      desc: "Focus: Semantic search, Ontology, Big Data, Machine learning, AI, ETL, Search result clustering, Semantic Web, Taxonomy, Linked Open Data, Information Retrieval, Semantic Information Visualization."
    },
    {
      schoolName:
        "Hochschule Darmstadt - University of Applied Sciences (Germany)",
      logo: require("./assets/images/hdaLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "October 2010 - October 2012",
      desc: "Focus: System Architecture, Fullstack development (Java, JS, Ruby), Business Process Optimization."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Enterprise Architect",
      progressPercentage: "95%"
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend",
      progressPercentage: "95%"
    },
    {
      Stack: "IaaC/PaaS/SaaS",
      progressPercentage: "95%"
    },
    {
      Stack: "Automated Testing",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: workExpArray
};

/* Your Open Source Section to View Your GitHub Pinned Projects
To know how to get GitHub key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using GitHub, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/sparksportLogo.png"),
      projectName: "Spark Sport App",
      projectDesc: `Building scalable live streaming and video-on-demand 
          platforms for over twenty different devices. E.g. IOS, Android, TVOS, 
          Smart TVs, Tablet, Desktop ...`,
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.sparksport.co.nz/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/mercuryLogo.png"),
      projectName: "Mercury Broadband",
      projectDesc: `Building scalable cloud-based application for Mercury 
          customers to be able to signup for broadband service or integrate it 
          into their billing service.`,
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.mercury.co.nz/broadband/"
        }
      ]
    },
    {
      image: require("./assets/images/powerfinanceLogo.png"),
      projectName: "PowerChain",
      projectDesc: `Building a bank from ground up using Blockchain! 
          Cryptography, Minting, Burning, Authenticating and Authorising ...`,
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.powerfinance.co.nz/our-platform-technology/"
        }
      ]
    },
    {
      image: require("./assets/images/ATLogo.png"),
      projectName: "AT Journey Planner",
      projectDesc: `Every 9 seconds, GPS data from all fleets are sent to the 
          API. Using ML, arrival and departure predictions are made and sent to 
          all clients.`,
      footerLink: [
        {
          name: "Visit Website",
          url: "https://at.govt.nz/bus-train-ferry/journey-planner/"
        }
      ]
    },
    {
      image: require("./assets/images/PTSLogo.png"),
      projectName: "Moon Landing Rover",
      projectDesc: `Building a fast semantic search engine to communicate with 
          the two Quattro robots and ALINA spacecraft on the moon.`,
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.pts.space/products/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Scientific papers, books and certifications which I have published or achieved!",

  achievementsCards: [
    {
      title: "A Semantic Search Engine for Software Components",
      subtitle:
        "A Semantic Search Engine for Software Components. Proceedings (WWW/Internet 2016), pp 127-135, Mannheim, Germany (Bernhard G. Humm), ISBN 978-989-8533-57-9.",
      image: require("./assets/images/topicPie.png"),
      footerLink: [
        {
          name: "Scientific Paper",
          url: "https://www.researchgate.net/publication/309735336_A_SEMANTIC_SEARCH_ENGINE_FOR_SOFTWARE_COMPONENTS"
        }
      ]
    },
    {
      title: "Cost-Effective Semi-Automatic Ontology Development",
      subtitle:
        "Cost-Effective Semi-Automatic Ontology Development from Large Domain Terminology. Proceedings (CERC 2017), pp 73-82, Karlsruhe, Germany (Bernhard G. Humm). ISSN: 2220-4164.",
      image: require("./assets/images/ontology.svg"),
      footerLink: [
        {
          name: "Scientific Paper",
          url: "https://www.researchgate.net/publication/322724628_Cost-Effective_Semi-Automatic_Ontology_Development_from_Large_Domain_Terminology"
        }
      ]
    },
    {
      title:
        "Domain-Specific Semantic Search Applications: Example SoftwareFinder",
      subtitle:
        "Semantic Applications - Methodology, Technology, Corporate Use. pp. 243-258. Springer Verlag (publisher), Berlin, 2018 (Bernhard G. Humm). ISBN 978-3-662-55432-6.",
      image: require("./assets/images/semanticBook.jpeg"),
      footerLink: [
        {
          name: "Book Chapter",
          url: "https://www.researchgate.net/publication/322931131_Domain-Specific_Semantic_Search_Applications_Example_SoftwareFinder"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embedded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: `Need to solve a complex problem, make sure your Tech is scalable and secure, need a mentor to build your team 
    or just want to say hi? Drop me an email 🙂`,
  email_address: "hesam@ossanloo.com"
};

export {
  achievementSection, bigProjects, contactInfo, educationInfo, greeting, illustration, openSource, podcastSection, skillsSection, socialMediaLinks, techStack,
  workExperiences
};

