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
  username: "Dereje Getahun",
  title: "Hi all, I'm Dereje",
  subTitle: emoji(
    "A versatile Full Stack Web Developer 🚀 with 5+ years of experience in Web applications with React / Node / AWS Lambda / Java Spring Boot and other cool technologies. Also a Mechanical Engineer with a M.Sc. degree and 10+ years of engineering experience."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1SA6YsQ5CFkDN9b6sXL52Jax1UfB0jFOO/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Dereje1",
  linkedin: "https://www.linkedin.com/in/dereje-getahun-447018134",
  gmail: "dereje.jobs@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "VERSATILE FULL STACK WEB DEVELOPER WHO LOVES TO CREATE USER-FRIENDLY AND INNOVATIVE WEB APPLICATIONS",
  skills: [
    emoji(
      "⚡ Build, deploy, and operate new products and services using technologies such as React, Node, AWS Lambda, Java Spring Boot, PostgreSQL, and MongoDB."
    ),
    emoji("⚡ Create user-friendly and intuitive web-based interfaces with React, Redux, TypeScript, CSS, HTML, and Material UI."),
    emoji(
      "⚡ Write well-structured, tested, and scalable code using best practices and frameworks such as Jest, JUnit, Enzyme, Express, Passport, and Socket.io."
    ),
    emoji("⚡ Collaborate with remote teams using git workflow and agile methodologies."),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL/NoSQL-databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Purdue School of Engineering and Technology",
      subHeader: "Master of Science (M.Sc.), Mechanical Engineering",
      duration: "Indianapolis, IN | May, 2005",
    },
    {
      schoolName: "Purdue School of Engineering and Technology",
      subHeader: "Bachelor of Science (B.Sc.), Mechanical Engineering",
      duration: "Indianapolis, IN | Dec, 1998",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "OneGlobe LLC",
      companylogo: require("./assets/images/oneglobe.png"),
      date: "Sep 2020 - Mar 2022",
      descBullets: [
        "Contributed to the U.S. FEMA Grants management modernization project, participating in all agile ceremonies.",
        "Maintained, debugged, and tested UI features and backend services using technologies such as React, Redux, Jest, Java Spring Boot/Framework, PostgreSQL, and DynamoDB.",
        "Utilized Node to write scripts for identifying and fixing production defects in a fast-paced kanban agile environment.",
      ]
    },
    {
      role: "Cloud Software Engineer",
      company: "The College Board",
      companylogo: require("./assets/images/collegeboard.jpeg"),
      date: "Jun 2019 – Sep 2020",
      descBullets: [
        "Built, maintained and tested UI features with React, Redux and Jest.",
        "Built, maintained and tested backend services with AWS lambda, AWS Cognito, SQL, Node and Jest.",
        "Maintained and troubleshooted CI/CD pipelines with AWS code commit and deploy.",
        "Participated in all agile ceremonies (Sprint Planning, Daily Stand-up, Review and Retrospective)."
      ]
    },
    {
      role: "Full Stack Web Developer",
      company: "Freelance",
      companylogo: require("./assets/images/freelance.png"),
      date: "Nov 2017 – Jun 2019",
      descBullets: [
        "Built full stack progressive web apps using MongoDB, Express, Passport, React and Node.",
        "Collaborated with remote team members using git workflow.",
        "Continuously learned web app development technologies."
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
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  achievementsCards: [
    {
      title: "Front-End Certifications",
      subtitle: "Computer Software Engineering",
      image: require("./assets/images/FCC.png"),
      imageAlt: "FCC Logo",
      footerLink: [
        {
          name: "Certification 1",
          url: "https://www.freecodecamp.org/certification/dereje1/legacy-front-end"
        },
        {
          name: "Certification 2",
          url: "https://www.freecodecamp.org/certification/dereje1/front-end-development-libraries"
        },
      ]
    },
    {
      title: "Back-End Certifications",
      subtitle: "Computer Software Engineering",
      image: require("./assets/images/FCC.png"),
      imageAlt: "FCC Logo",
      footerLink: [
        {
          name: "Certification 1",
          url: "https://www.freecodecamp.org/certification/dereje1/legacy-back-end"
        },
        {
          name: "Certification 2",
          url: "https://www.freecodecamp.org/certification/dereje1/back-end-development-and-apis"
        },
      ]
    },
    {
      title: "Algorithms and Data Structures Certification",
      subtitle: "Computer Software Engineering",
      image: require("./assets/images/FCC.png"),
      imageAlt: "FCC Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.freecodecamp.org/certification/dereje1/javascript-algorithms-and-data-structures"
        },
      ]
    },
    {
      title: "Data Visualization Certification",
      subtitle: "Computer Software Engineering",
      image: require("./assets/images/FCC.png"),
      imageAlt: "FCC Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.freecodecamp.org/certification/dereje1/legacy-data-visualization"
        },
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "dereje.jobs@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  isHireable
};
