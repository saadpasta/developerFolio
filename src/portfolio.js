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
  username: "Umair",
  title: "Hi all, I'm Umair Mubasher",
  subTitle: emoji(
    "A passionate Full Stack Software Engineer 🚀 having experience of building Web and Mobile applications with JavaScript / ReactJs / NextJS /  NodeJs / MERN Stack / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/umairmubasher",
  linkedin: "https://www.linkedin.com/in/mumairmubasher/",
  gmail: "muhamadumair7445@gmail.com",
  medium: "https://medium.com/@umairmubasher",
  stackoverflow: "https://stackoverflow.com/users/11687498/umair-mubasher",
  facebook: "https://www.facebook.com/mumairmubasher",
  instagram: "https://www.instagram.com/mumairmubasher/",
  // gitlab: "https://gitlab.com/username",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK ENGINEER WHO CRUSHES TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon https://fontawesome.com/icons?d=gallery */

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
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
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
      schoolName: "Aamal Academy, Stanford University, California, USA",
      logo: require("./assets/images/amalAcademyLogo.jpg"),
      subHeader: "Apprenticeship Program",
      duration: "Jan 2022 - July 2022",
      desc: "Remote education startup funded by Stanford University that teaches professional skills to students and corporations",
      descBullets: [
        "Communication: Completed a competitive written application and interview process to be selected from over 4500 applicants for intensive 6-month Fellowship funded by Stanford University.",
        "Skills development: Learned skills such as communication, leadership, problem solving, teamwork, etc, that will help me make a deeper impact on the job"
      ]
    },
    {
      schoolName:
        "Punjab University College of Information Technology (PUCIT), Lahore, Pakistan",
      logo: require("./assets/images/puLogo.png"),
      subHeader: emoji("Bachelor of Science in Software Engineering 🎓"),
      duration: "July 2018 - July 2022 | CGPA: 3.23",
      desc: "Took courses about PF, OOP, Data Structures, Databases Systems, Analysis of Algorithms, Web Engineering, Enterprise Application Development, Software Design & Architecture, OOAD, SQA, ML, MC, ...",
      descBullets: [
        "Tech Skills: JavaScript/TypeScript · ReactJs · ReduxJs · Cascading Style Sheets (CSS) · Problem Solving · Front-end Development · Object-Oriented Programming (OOP) · Data Integration · Web-based Solutions · Responsive Web Design · Android Development · Bootstrap · HTML · Data Structures · Git · Visual Studio · SQL · API Development · JSON · Software Development Life Cycle (SDLC) ..."
      ]
    },
    {
      schoolName: "Punjab Group of Colleges (PGC), Lahore, Pakistan",
      logo: require("./assets/images/punjabCollege.png"),
      subHeader: "Intermediate Computer Science (ICS)",
      duration: "October 2016 - October 2018",
      desc: "Education startup funded by Stanford University that teaches professional skills to students and corporations",
      descBullets: [
        "Communication: Completed a competitive written application and interview process to be selected from over 4500 applicants for intensive 3-month Fellowship funded by Stanford University.",
        "Skills development: Investing 150 hours to develop business skills (e.g., communication, leadership, problem solving, teamwork, etc.) that will help me make a deeper impact on the job"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
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
      company: "ESketchers",
      companylogo: require("./assets/images/esketchersLogo.png"),
      date: "Sep 2022 – Present",
      desc: "Full time - Hybrid",
      descBullets: [
        "Hired as Associate Software Engineer (ASE)",
        "Skills: JavaScript · Typescript · React.js · Next.js · Redux.js · Node.js · CSS · Problem Solving · Front-end Development · Back-End Web Development · REST APIs · Data Integration · Responsive Web Design · HTML · SQL · API Development · GitHub · CI/CD · Software Development Life Cycle (SDLC)"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "AIMRS Lab - PUCIT",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "Mar 2022 – Jul 2022",
      desc: "Part time - onSite",
      descBullets: [
        "React.js · JavaScript · Redux.js · Node.js · CSS · Problem Solving · Back-End Web Development · Object-Oriented Programming (OOP) · Data Integration · MySQL · Web-based Solutions · Responsive Web Design · Software Development · Web Development · Research · HTML5 · Bootstrap · HTML · Git · SQL · API Development · GitHub · JSON"
      ]
    },
    {
      role: "Teacher Assistant",
      company: "PUCIT",
      companylogo: require("./assets/images/puLogo.png"),
      date: "Sep 2021 – Jul 2022",
      desc: "Part time - onSite",
      descBullets: [
        "Having experience in handling labs, assignments and quizzes",
        "Remained TA of OOP, DSA and Web Development Courses",
        "Research",
        "Management",
        "Leadership",
        "Coordination"
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
      imageAlt: "Google Code-In Logo",
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
      imageAlt: "Google Assistant Action Logo",
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
      imageAlt: "PWA Logo",
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
  display: true // Set false to hide this section, defaults to true
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
  title: "Reach Out to me!",
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-332-444-8888",
  email_address: "muhamadumair745@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "MUmairMubasher", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
  isHireable
};
