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
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Lucas Qiu",
  title: "Hi all, I'm Lucas Qiu",
  subTitle: emoji(
    "A passionate Data Engineer & Architect 🚀 with experience in Business Intelligence & Sports Analytics."
  ),

};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/lqiu03",
  linkedin: "https://www.linkedin.com/in/lucas-qiu/",
  gmail: "lqiu03@ucla.edu",
  medium: "https://medium.com/@lqiu03",
 tableau: "https://public.tableau.com/app/profile/lucas.qiu/vizzes"
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "MY PROFICIENCIES",
  subTitle: "SELF-MOTIVED PROBLEM SOLVER WHO WANTS TO EXPLORE TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: {
    coding: [
      {
        skillName: "C++",
        fontAwesomeClassname: "fas fa-code"
      },
      {
        skillName: "SQL",
        fontAwesomeClassname: "fas fa-database"
      },
      {
        skillName: "R",
        fontAwesomeClassname: "fab fa-r-project"
      },
      {
        skillName: "Python",
        fontAwesomeClassname: "fab fa-python"
      }
    ],
    dataStorage: [
      {
        skillName: "Databricks (Azure)",
        fontAwesomeClassname: "fab fa-microsoft"
      },
      {
        skillName: "Databricks (AWS)",
        fontAwesomeClassname: "fab fa-aws"
      },
      {
        skillName: "Snowflake",
        fontAwesomeClassname: "fas fa-snowflake"
      },
      {
        skillName: "OracleSQL",
        fontAwesomeClassname: "fas fa-database"
      },
      {
        skillName: "PostgreSQL",
        fontAwesomeClassname: "fas fa-database"
      }
    ],
    dataPipeline: [
      {
        skillName: "Apache Kafka",
        fontAwesomeClassname: "fas fa-stream"
      }
    ],
    visualization: [
      {
        skillName: "Tableau",
        fontAwesomeClassname: "fas fa-chart-bar"
      },
      {
        skillName: "Power BI",
        fontAwesomeClassname: "fas fa-chart-pie"
      },
      {
        skillName: "Google Colab",
        fontAwesomeClassname: "fas fa-laptop-code"
      }
    ]
  }
  
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "UCLA",
      logo: require("/Users/lucasqiu/Desktop/uclalogo.png"),
      subHeader: "B.S. Biology Honors - B.A. History, Double Major",
      duration: "September 2021 - June 2025",
      desc: "Specialization in Computing, Physics 5A (Mechanics & Energy) Course Reader, UCLA Undergraudate Student Government, UCLA Athletics, CSSA-UCLA, TEDxUCLA, Aleph UCLA Undergraduate Journal",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
  ]
};



// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Engineer, UCLA Tennis (BIG TEN)",
      company: "UCLA Athletics",
      companylogo: require("/Users/lucasqiu/Desktop/logo/athleticslogo.png"),
      date: "June 2024 – Present",
      desc: "Tennis player performance analytics, data cleaning, query optimization, BI visualization",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Intern, Rose Bowl Legacy",
      company: "Rose Bowl Stadium",
      companylogo: require("/Users/lucasqiu/Desktop/logo/rosebowl.png"),
      date: "June 2024 – Present",
      desc: "2025 Rose Bowl Game (College Football Playoff), UCLA Football, Rose Bowl Concerts & Foundation"
    },
    {
      role: "Football Data Architect",
      company: "AMSG FC",
      companylogo: require("/Users/lucasqiu/Desktop/logo/amsg.png"),
      date: "May 2024 – Aug 2024",
      desc: "Player performance analytics, Data warehouse management, Stadium technology"
    }
    {
        role: "Team Manager, UCLA Women's Volleyball (PAC 12)",
        company: "UCLA Athletics",
        companylogo: require("/Users/lucasqiu/Desktop/logo/uclalogo.png"),
        date: "June 2023 – June 2024",
        desc: "Game-day & scrimmage team operations"
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
  title: "Projects",
  subtitle: "Repository of my coding portfolio",
  projects: [
    {
      image: require("/Users/lucasqiu/Desktop/logo/paris.png"),
      projectName: "Analysis of Performance Metrics in Women's Singles Gold Medal Match",
      projectDesc: "Zheng Q. vs. Vekic D. | Paris Olympics 2024",
      footerLink: [
        {
          name: "Visit Tableau",
          url: "https://public.tableau.com/app/profile/lucas.qiu/viz/AnalysisofCriticalShotsandPerformanceMetricsinWomensSinglesGoldMedalMatchParisOlympics2024/Dashboard2/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("/Users/lucasqiu/Desktop/logo/rams.png"),
      projectName: "LA Rams: Offensive and Defensive Performance",
      projectDesc: "Analyzing NFL Play-by-Play data in R Studio",
      footerLink: [
        {
          name: "Visit Medium",
          url: "https://medium.com/@lqiu03/analyzing-the-la-rams-2023-nfl-season-with-r-studio-offensive-and-defensive-performance-metrics-2c5b65335064/"
        }
      ]
    }
    {
        image: require("/Users/lucasqiu/Desktop/logo/euro.png"),
        projectName: "UEFA EURO 24 - Finals Interactive Starting Line-ups",
        projectDesc: "England vs. Spain @Olympiastadion, Berlin",
        footerLink: [
          {
            name: "Visit Tableau",
            url: "https://public.tableau.com/app/profile/lucas.qiu/viz/UEFAEURO2024-FinalsStartingLine-upInteractivePreview/Dashboard1"
          }
        ]
      }
    {
        image: require("/Users/lucasqiu/Desktop/logo/fcb.png"),
        projectName: "Lamine Yamal (FC Barcelona)'s Performance Analytics",
        projectDesc: "Football performance analytics with Python Jupyter",
        footerLink: [
          {
            name: "Visit Medium",
            url: "https://medium.com/@lqiu03/hes-only-16-a-tableau-r-and-python-showcase-of-lamine-yamal-e16734988f3f"
          }
        ]
      }
  ],
  display: true // Set false to hide this section, defaults to true
};



const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "lqiu03@ucla.com"
};


const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
