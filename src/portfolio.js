/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// make our custom icons `./myicons` available in Font Awesome
import {library, dom} from "@fortawesome/fontawesome-svg-core";
import {
  faTS,
  faLambda,
  faServerless,
  faBlockchain,
  faAzure,
  faCypress
} from "./assets/myicons";

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
    `I'm a proactive technology and people leader with 12+ years of experience in leadership and software 
development across multiple disciplines and tech stacks for startups and established companies. A volunteer PhD 
candidate (Semantic Search and Ontology) and research fellow at Planetary Transportation Systems 
working on sending a lunar rover to the Moon. Passionate about 
working in great teams focusing on quality, personal development, mentoring and solving problems.`
  ),
  resumeLink:
    "https://www.icloud.com/iclouddrive/0804uH4yuUuiNiAif_YvN7_uA#Hesam-CV-EN", // Set to empty to hide the button
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
    "Enthusiast Engineer Leader, taking pride in finding and mentoring talents",
  skills: [
    emoji(
      "⚡ Leading teams to build highly scalable, reliable, secure, cost-efficient and performant cloud solutions."
    ),
    emoji(
      "⚡ Building interactive Frontend / Backend for your web, tablet, mobile and smart TV applications."
    ),
    emoji(
      "⚡ Finding solutions for automatic CI/CD pipeline, release process, code quality, monitoring and data analysis."
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
      logo: require("./assets/images/hda_logo.png"),
      subHeader: "Phd. in Computer Science (in progress)",
      duration: "September 2015 - September 2025",
      desc: "Focus: Big Data, Machine learning, AI, ETL, Search result clustering, Semantic Web, Taxonomy, Linked Open Data, Information Retrieval, Semantic Information Visualization."
    },
    {
      schoolName:
        "Hochschule Darmstadt - University of Applied Sciences (Germany)",
      logo: require("./assets/images/hda_logo.png"),
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
      progressPercentage: "85%"
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "85%"
    },
    {
      Stack: "Backend",
      progressPercentage: "95%"
    },
    {
      Stack: "IaaC/PaaS/SaaS",
      progressPercentage: "90%"
    },
    {
      Stack: "Automated Testing",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Head of Engineering",
      company: "Spark Sport NZ",
      companylogo: require("./assets/images/spark-sport.png"),
      date: "February 2022 – Present",
      desc:
        "I take pride in supporting my team, technically and emotionally, while learning from them. I go out of my way to create a safe environment where the better argument wins, and people can openly talk about their expectations and feelings and give constructive feedback." +
        "I ensure that the team and I understand the business objectives, so we can prioritise our tasks to achieve them. One of my focuses is that the enterprise architecture and services are scalable, reliable, and secure. Also, by hiring the right people for the job, the team can benefit from new ideas and diverse ways of doing things." +
        "I have regular one-on-one with my team and my manager and constantly ask for their feedback if they expected me to do sth. or if I failed to support them in functioning at their best." +
        "I believe in hiring smart people, so they tell us how to do things in their preferred way and not the other way around.",
      descBullets: [
        "Technologies: Leadership · Team Building · Enterprise Architecture · Cloud Applications · Node.js · Test Automation · Serverless Framework · Microsoft Azure · TypeScript · Amazon Web Services (AWS) · Security · PCI DSS · Agile Scrum"
      ]
    },
    {
      role: "Solution Architect/ Tech Lead",
      company: "Mercury NZ Ltd.",
      companylogo: require("./assets/images/mercury-logo.png"),
      date: "July 2021 – February 2022 (Contractor)",
      desc:
        "Most of my time, I am researching how to solve business problems using scalable, reliable, secure, cost-effective, and performance technologies. Daily, I interact with many stakeholders, including product owners, project managers, solution architects and developers." +
        "The research includes technical scoping, finding logical fallacies in the current processes and architectural designs. I make sure that the future design and the use of third-party services are compatible so that the business is not spending lots of money on sth. that would either not work or worsen the customer experience." +
        "Parallel to my duties as an architect, I also manage software product implementation from concept to completion, focusing on the quality of our software and the personal development within the team. I participate in code review sessions and make sure the code meets the high quality based on the standard defined by the developer's community. I also take pride in mentoring younger developers and enthusiasts.",
      descBullets: [
        "Technologies: Atlassian · AWS · Git · Node.js · Typescript · Serverless · Eslint · Scrum/ Kanban . CI/CD . Intellij . RESTful WS . SQL . Docker . Oauth2 . Jest . Cucumber . Yarn . NPM . Mira . Sharepoint. Draw.io . Layered APIs."
      ]
    },
    {
      role: "Solution Architect/ Tech Lead",
      company: "P^werFinance Ltd.",
      companylogo: require("./assets/images/powerfinance.png"),
      date: "August 2020 – August 2021",
      desc:
        "On the technical side, I've spent most of my time researching the good practices around cloud-based (Azure) micro-services implementations (React, Typescript, NodeJS) that communicate with Blockchain technologies. Managing and mentoring intermediate developers, 50% hands-on (design the architecture, peer's code-review), 50% leadership (working very closely with DevOps and leading the projects into production (including TDD, BDD, CI/CD with agile methodologies))." +
        "On the business side, I've spent a good chunk of my weekly time interacting with stakeholders, product owners, and designers to make sure that the business needs and the requirements are mapped correctly to the company's technical assets and skill-sets. Also, make sure that the continuous integration and delivery of the product happens efficiently, securely, automatically and meets the highest quality standards." +
        "The research was done in various fields, including challenges around the blockchain, cryptography, game-theory and graph-theory, cloud-based micro- services (Azure), security, authentication/authorisation, and automation. Using other DevOps infrastructure as a code framework, e.g., Terraform, Azure ARM and Bitbucket templates, we built, tested, and deployed our products with a click of a button from the Dev environment to UAT then Prod.",
      descBullets: [
        "Technologies: Atlassian . Azure . Git . React.js . Node.js . Typescript . Eslint . Scrum/ Kanban . CI/CD . Intellij . RESTful WS . SQL . HTML5 . CSS3 . Docker . Oauth2 . Cypress.io . Jest . Mocha . Sinon . Webpack . Yarn . NPM . VITE . Material-UI"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
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
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
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

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3243454077",
  email_address: "saadpasta70@gmail.com"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  podcastSection,
  contactInfo
  // twitterDetails
};
