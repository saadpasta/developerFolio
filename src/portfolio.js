/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Raza Khalid",
  title: "Hello, I'm Raza Khalid",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Redux and some other cool libraries and frameworks."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Raza-Khalid",
  linkedin: "https://www.linkedin.com/in/razaskhalid/",
  gmail: "razakhalid69@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "PASSIONATE FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for web and mobile applications"
    ),
    emoji("⚡ Develop full stack applications using stacks like MERN and PERN")
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
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
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
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
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
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
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
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
      schoolName: "Eleanor Roosevelt High School",
      logo: require("./assets/images/erhs.jpeg"),
      subHeader: "High School Diploma",
      duration: "September 2016 - April 2019",
      desc: "Participated in the Future Developers Club and worked on small web applications a long the Software Engineering team",
      descBullets: [
        "Played soccer for Boys Varsity Team",
        "Member of Badminton Club"
      ]
    },
    {
      schoolName: "Prince Geroges Community College",
      logo: require("./assets/images/pgcc.png"),
      subHeader: "Associates of Information Technology",
      duration: "September 2019 - Present",
      desc: "One of the best community colleges for tech majors. Took courses about Software Engineering, Web Security, Operating Systems, A Plus, Network Plus, "
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "General Assembely",
      logo: require("./assets/images/assem.png"),
      subHeader: "Certificate of Software Engineerign Immersive",
      duration: "July 26, 2021 - October 18, 2021",
      desc: "One of the most challenging Software Engineering Bootcamp. Learned many different technologies such as HTML, CSS, JavaScript, React.js, Bootstrap, Material UI, Tailwindcss, PostgreSQL, Sequelize, Express.js, Node.js, and Python "
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "68%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "71%"
    },
    {
      Stack: "Programming",
      progressPercentage: "57%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Network Analyst",
      company: "MTA",
      companylogo: require("./assets/images/mta.png"),
      date: "Jan 2020 – July 2021",
      desc: "Responsibly installed softwares, Troubleshooted network errors, Configured Network Devices, Planned Network topologies according to business requirement  "
    },
    {
      role: "Front Desk",
      company: "COGx",
      companylogo: require("./assets/images/coggx.png"),
      date: "Feb 2018 – Aug 2018",
      desc: "Professionally greeted clients, meticulously conducted inventory and stored files/reports, and methodically ordered supplies and scheduled client appointments."
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
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
  // subtitle: "SOME OF THE PROJECTS I BUILD",
  projects: [
    {
      image: require("./assets/images/soccer.png"),
      projectName: "GAME START",
      projectDesc:
        "GameStart is an e-commerce, fully functional, intuitive, engaging full-stack application in which users can browse games, learn about their new games, sell/trade their game inventory, and add various games to their cart. This web application leverages the PERN stack",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://peaceful-everglades-79165.herokuapp.com/"
        }
        //////////////////////////  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/weather.png"),
      projectName: "Weather App",
      projectDesc:
        "Weather app is a simple to use app that lets you see the weather for your current location utilizing the third party API, Moreover it lets you add a comment under the weather so you can remember the memorable moment you had while enjoying the weather.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://weathertalk.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/rock.png"),
      projectName: "Rock-Paper-Scissors",
      projectDesc:
        "Play this Super Simple and Fun game with computer and never be alone again. Click on the weapon of your choice and lets see what the computer decides to bring up against you, HAVE FUN!!.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://u4-lab-vue-rock-paper-scissor.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/among.png"),
      projectName: "Jump It",
      projectDesc:
        "JUMP IT!!! A simple yet super entertaining game to play. Your goal is to save Among (character of our game) from getting hit by the blocks. Simply press the up arrow key to jump.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://jump-it.vercel.app/game.html"
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
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

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
  subtitle: "Feel free to contact me anytime.",
  number: "240-704-4482",
  email_address: "razakhalid69@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
