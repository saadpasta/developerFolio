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
  username: "Sankat Mochan",
  title: "Heyy, I am Mochan",
  subTitle: emoji(
    "I am a driven and enthusiastic Full Stack Software Developer with a passion for creating innovative solutions. Currently, I am a pre-final year student at IIIT Gwalior, pursuing a dual degree course in B.Tech in Information Technology and MBA."
    // "A passionate Full Stack Software Developer currently in 4th year pursuing integrated B.Tech in Information Technology and MBA from IIIT Gwalior."
    // 4having an experience of building Web applications with JavaScript / Reactjs / Nodejs / and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1fF3F0TjrR6_Mwk_xqLBJ-DxFGsNwYNHs/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/smochan",
  linkedin: "https://www.linkedin.com/in/smochan/",
  gmail: "smochan07@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@smochan07",
  stackoverflow: "https://stackoverflow.com/users/12423297/smochan",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Technologies I know",
  // subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
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

  softwareSkills: [
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws",
      image: require("./assets/images/aws.webp")
    },
    {
      skillName: "Bash",
      image: require("./assets/images/bash.png")
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt",
      image: require("./assets/images/css.png")
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-c++",
      image: require("./assets/images/c++.png")
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker",
      image: require("./assets/images/docker.webp")
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire",
      image: require("./assets/images/firebase.png")
    },
    {
      skillName: "Git",
      image: require("./assets/images/git.png")
    },
    {
      skillName: "Github",
      image: require("./assets/images/github-dark.png")
    },
    {
      skillName: "Go",
      fontAwesomeClassname: "fab fa-golang",
      image: require("./assets/images/go.png")
    },
    {
      skillName: "Heroku",
      image: require("./assets/images/heroku.webp")
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5",
      image: require("./assets/images/html5.png")
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
      image: require("./assets/images/JavaScript.png")
    },
    {
      skillName: "Jquery",
      fontAwesomeClassname: "fab fa-js",
      image: require("./assets/images/jquery.png")
    },
    {
      skillName: "Linux",
      image: require("./assets/images/linux.png")
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database",
      image: require("./assets/images/mongodb.png")
    },
    {
      skillName: "NextJS",
      fontAwesomeClassname: "fab fa-react",
      image: require("./assets/images/nextjs.png")
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node",
      image: require("./assets/images/nodejs.png")
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm",
      image: require("./assets/images/npm.png")
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python",
      image: require("./assets/images/python.webp")
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react",
      image: require("./assets/images/reactjs.png")
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass",
      image: require("./assets/images/sass.png")
    },
    {
      skillName: "SEO",
      fontAwesomeClassname: "fas fa-search",
      image: require("./assets/images/seo.png")
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database",
      image: require("./assets/images/sql.png")
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-typescript",
      image: require("./assets/images/ts.png")
    },
    {
      skillName: "TailwindCSS",
      image: require("./assets/images/tailwind.png")
    },
    {
      skillName: "Ubuntu",
      image: require("./assets/images/ubuntu.png")
    },
    {
      skillName: "Vercel",
      image: require("./assets/images/vercel.svg")
    },
    {
      skillName: "Vue",
      fontAwesomeClassname: "fab fa-vuejs",
      image: require("./assets/images/vue.png")
    },
    // {
    //   skillName: "expressjs",
    //   fontAwesomeClassname: "fab fa-node",
    //   image: require("./assets/images/expressjs.png")
    // },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institute of Information Technology and Management, Gwalior",
      logo: require("./assets/images/iiitm.jpeg"),
      subHeader: "Integrated B.Tech in Information Technology and MBA",
      duration: "August 2019 - present",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "77%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "85%"
    },
    {
      Stack: "DSA and CP",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Developer Intern",
      company: "Airblack",
      companylogo: require("./assets/images/airblack.png"),
      date: "June 2022 – July 2022",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Developed new APIs according to business needs using Node.js, Express and MongoDB.",
        "Solved 20+ bugs weekly raised by end-users related to the backend.",
        "Wrote Python scripts to modify the database for any issues or to insert new data in the database."
      ]
    },
    {
      role: "Software Developer Intern",
      company: "Jhaiho",
      companylogo: require("./assets/images/jhaiho.png"),
      date: "Nov 2021 – April 2022",
      desc: "Worked with a team of 30+ members to serve the customers who need tattoos.",
      descBullets: [
        "Developed and Widgetized multiple modular UI using ReactJS, NextJS, and Typescript.",
        "Gained experience with Website development, SEO, performance analysis, and optimizations."
      ]
    },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
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
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/univ.png"),
      projectName: "University Boradcasting App",
      projectDesc: "A platform specific for university to share information among staff and students.",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        },
        {
          name: "See code",
          url: "https://github.com/smochan/univer-broadcast-server"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Split-it",
      projectDesc: "Working on this project to develop an expense tracker app similar to Splitwise.",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        },
        {
          name: "See code",
          url: ""
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
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9983332924",
  email_address: "smochan07@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
