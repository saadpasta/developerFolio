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
  username: "Chau Anh",
  title: "Hi all, I'm Chau Anh",
  subTitle: emoji(
    "As a motivated web developer having a valid skills set of web development,  I'm passionate about continuous learning, collaboration, and sustainable development"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1McW4Hff8pyuD3A9iit8tk6HCeqIFgHkz/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nguyenkieuchauanh0908",
  linkedin: "https://www.linkedin.com/in/nkcanh",
  gmail: "nkieuchauanh@gmail.com",
  facebook: "https://www.facebook.com/share/g3zFCf2LrJ4iVLYY/?mibextid=qi2Omg",
  medium: "https://medium.com/@nkieuchauanh",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Tech Stack",
  subTitle: "Crafting Solutions with Modern Tech, Powered by Innovation",
  skills: [
    // emoji(
    //   "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    // ),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
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
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "HCMC University of Technology and Education",
      logo: require("./assets/images/uteLogo.png"),
      subHeader: "Bachelor of Information Technology",
      duration: "September 2020 - April 2024",
      descBullets: [
        "GPA: 8.55/10 (3.39/4)",
        "Five Merits Students in 2023 and 2024",
        "Encouragement Scholarship for Top 5 GPA students"
        // "The Head of Organizing Team of HCMC English Speaking Club",
        // "Project leader of EOC 2022 and 2023 (English Olympic Contest)"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Developer",
      company: "Graduation Thesis",
      companylogo: require("./assets/images/portrait.jpg"),
      date: "Oct 2023 – Aug 2024",
      desc: "Rental Hub Platform For Finding & Renting Apartments",
      descBullets: [
        // "Building user-friendly, maintainable, and scalable UI components",
        // "Building a social forum with real-time chat and notifications using socket.io",
        // "Improving the security with JWT tokens, two-way authentication, Google authentication, and citizen cardidentification"
      ]
    },
    {
      role: "On Job Training Front-end Developer",
      company: "FPT Software",
      companylogo: require("./assets/images/fptLogo.png"),
      date: "Oct 2023 – Jan 2024",
      descBullets: [
        // "Designing, implementing, and improving scalable and reusable UI components for the internal task management website using Angular",
        // "Building and improving maintainable and scalable UI components for internal management dashboard and optimizing the current UI  using Angular"
      ]
    },
    {
      role: "Full-stack Web Developer Intern",
      company: "UPTECH",
      companylogo: require("./assets/images/uptechLogo.png"),
      date: "June 2023 – Sep 2023",
      descBullets: [
        // "Designing, implementing, and improving scalable and reusable UI components for the client's website using React",
        // "Managing and maintaining the MongoDB database",
        // "Designing and implement restful API using ExpressJS"
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
  title: emoji("Achievements"),
  subtitle: "",

  achievementsCards: [
    {
      title: "Bosch Activator Scholarship Program 2023",
      subtitle:
        "Top 10 Final of Bosch Activator Scholarship Program for Female Leaders",
      image: require("./assets/images/boschLogo.jpg"),
      imageAlt: "Bosch Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1ruWEc8h5Hs40Ldrutc8QuDIyJiyhNGJt/view?usp=sharing"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Jabil Scholarship Program 2024",
      subtitle:
        "Competing with over 800 candidates to be in the top 30 Jabil Ambassadors receiving the scholarship",
      image: require("./assets/images/jabilLogo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/15rUfBw3khC_NZj5jZSSwJQvXLQaUOdRB/view?usp=sharing"
        }
      ]
    },
    {
      title: "ACWS Program",
      subtitle:
        "Being awarded with AmCham Women In Engineering Scholarship Program 2 times (2022 & 2023)",
      image: require("./assets/images/amchamVnLogo.webp"),
      imageAlt: "AmCham Viet Nam Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/15DP2tdX1ImqSwV_-NnGYyhBxVpB7XK_o/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const certSection = {
  title: emoji("Languages"),
  subtitle: "",

  achievementsCards: [
    {
      title: "Vietnamese",
      subtitle: "First language",
      image: require("./assets/images/nationalFlag.jpg"),
      imageAlt: "Vietnamese Flag",
      footerLink: []
    },
    {
      title: "English",
      subtitle: "IELTS 7.5 issued by British Council Vietnam",
      image: require("./assets/images/britishCounciiLogo.png"),
      imageAlt: "British Council Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1c2EjxCeF5cQm9idKJLGVTJt2Y0DG1D4U/view?usp=sharing"
        }
      ]
    },
    {
      title: "Japanese",
      subtitle: "JLPT N4 issued by The Japan Foundation",
      image: require("./assets/images/japanFoundationLogo.png"),
      imageAlt: "Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1cYGzGk0322SXXLO37Tw5-HP9c_ofMKVE/view?usp=sharing"
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
    // {
    //   url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
    //   title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
    //   description:
    //     "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    // },
    // {
    //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description:
    //     "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    // }
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

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+(84) 913935810",
  email_address: "nkieuchauanh@gmail.com"
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
  certSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
