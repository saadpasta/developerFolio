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
  username: "Njoli Patrick",
  title: "Hi, I'm Patrick",
  subTitle: emoji(
    "An experienced Backend Engineer  🚀 with a strong passion for developing robust server-side solutions. Proficient in building scalable applications using technologies such as Node.js, Express, and Laravel, along with deployment ⛵  expertise. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1_WJDcujv292CWGye_9tUyuNuP8tFhvF2/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/njolipatrick",
  linkedin: "https://www.linkedin.com/in/njolipatrick/",
  gmail: "ogmaro@gmail.com",
  gitlab: "https://gitlab.com/ogmaro",
  medium: "https://medium.com/@ogmaro",
  stackoverflow: "https://stackoverflow.com/users/15658681/njoli-patrick",
  x: "https://x.com/njolipatrick",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Create web applications that encompass various APIs, integrations with third-party services, and databases. Driven and diligent, with a strong commitment to crafting personalized interfaces that consider distinctive requirements for accessibility, usability, and security.",
  skills: [
    emoji(
      "⚡ Develop highly secured and scalable backend infrastructure"
    ),
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
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
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
      skillName: "firestore",
      fontAwesomeClassname: "fas fa-fire"
    },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Stutern - Graduate Accelerator Program",
      logo: require("./assets/images/stutern_logo_icon.png"),
      subHeader: "Backend Development",
      duration: "September 2021 - December 2022",
      desc: "Ranked top 1% in the program. Wrote and deployed an ecommerece backend server",
      descBullets: [
        "Crafted the homepage of stutern.com using HTML, CSS, and JavaScript, greatly enhancing the website's overall design and user experience.",
        "Constructed an image processing API using typescript, executed unit tests with jasmine and used postman for documentation, enhancing the reliability and stability of the system.",
        "Designed a database schema and crafted a mini storefront API with typescript on a PostgreSQL database, resulting in increased development time.",
        "Performed integration and unit tests to test individual and large portions of the mini store API, ensuring 60% test coverage throughout the system which helped identify bugs, which were fixed.",
        "Worked on a frontend mentor challenge using JavaScript to build a tip calculator, allowing individuals to calculate the tip they can contribute and enhancing the user experience.",
        "Collaborated with a front-end developer to build an ecommerce book store using NodeJs, Postgres. We hosted it on Heroku and later migrated it to a railway server, increasing server uptime by 70%."
      ]
    },
    {
      schoolName: "Modibbo Adama University of Technology, Yola",
      logo: require("./assets/images/new.png"),
      subHeader: "Bachelor in Electronic Technology",
      duration: "January 2011 - April 2017",
      desc: " ",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "89%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Engineer",
      company: "Beezop",
      companylogo: require("./assets/images/beezop-logo.png"),
      date: "October 2022 – August 2023",
      desc: "Build a business that runs like a well-oiled machine. Train new hires faster, delegate confidently, reduce errors, and achieve maximum consistency.",
      descBullets: [
        "Overhauled company’s existing notification micro service to handle 100% of all notifications.",
        "Implemented a RESTful API for the company's SAAS platform, resulting in a 40% increase in sales due to improved user experience.",
        "Designed a complex import feature using excel sheet as input file to help users import in bulk documents to drive companies software adoption rate.",
        "Collaborated with cross-functional teams to integrate third-party APIs and platforms, resulting in a seamless user experience and increased customer satisfaction by 60%",
        "Participated in Agile development processes and Scrum meetings, resulting in a 30% increase in project completion rate and a 15% reduction in project costs"
      ]
    },
    {
      role: "Backend Engineer",
      company: "Revent Technologies",
      companylogo: require("./assets/images/revent.jpeg"),
      date: "January 2023 – March 2023",
      desc: "Technology solution provider of choice unlocking tangible business values and their potential for growth.",
      descBullets: [
        "Designed and implemented a scalable, high-performance Node.js API using Javascript that improved the overall speed and reliability of the client’s financial infrastructure web application by 60%.",
        "Lead and managed a team that finished a project utilizing advanced generative AI tools such as OpenAI, Whisper, and AssemblyAI, creating a cutting-edge and innovative solution.",
        "Led the development of a MySQL database system, streamlining data management and increasing data processing speed by 50%.",
        "Worked with a team of highly talented engineers to implement client’s financial web application as a microservice by integrating from other services.",
        "Improved overall code quality and efficiency through regular code reviews and collaboration with other developers, resulting in a 25% decrease in bugs and support tickets.",
        "Created and maintained documentation for internal APIs, resulting in a 50% increase in frontend developers productivity due to improved understanding of the system.        "
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "HNG",
      companylogo: require("./assets/images/hng.jpeg"),
      date: "Jan 2015 – Sep 2015",
      desc: "The HNG Internship is an ambitious attempt to change the way education is done in Africa. It is the bridge between learning to code and becoming the best in the world.",
      descBullets: [
        "Established project repositories to facilitate collaboration among developers and simplify the development process, leading to a more efficient and effective project outcome.",
        "Lead and managed a team that finished a project utilizing advanced generative AI tools such as OpenAI, Whisper, and AssemblyAI, creating a cutting-edge and innovative solution.",
        "Participated in the development of key authentication features such as Google Oauth, Reset Password and refresh token feature for both frontend and mobile usage, enhancing the security and usability of the system.",
        "Played a crucial role in the system design process by creating system interaction diagrams, product requirement documents(PRD), and database schema, contributing to the well-planned and executed project."
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
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+2348031370465",
  email_address: "ogmaro@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "njolipatrick", //Replace "twitter" with your twitter username without @
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
