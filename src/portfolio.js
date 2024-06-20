/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file
import dayjs from "dayjs";
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/loading"; // Rename to your file name for custom animation

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
  username: "ChaichanaS",
  title: "Hello everyone, I'm James",
  subTitle: emoji(
    `A dedicated and passionate Full Stack Software Developer from Thailand, with ${
      Number(dayjs().format("YYYY")) - 2021
    } years of experience in building innovative web and mobile applications using JavaScript, React.js, Node.js, React Native, and various other modern libraries and frameworks. Known for being hardworking, highly enthusiastic, and committed to delivering high-quality solutions.`
  ),
  resumeLink:
    "https://drive.google.com/file/d/1KQie2ie0wg0qvmD3pWzrNw2O4j8FgyMF/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sudjairakc",
  linkedin: "https://www.linkedin.com/in/chaichana-sudjairak/",
  gmail: "sudjairak.c@gmail.com",
  gitlab: "https://gitlab.com/chaichanas",
  facebook: "https://www.facebook.com/chaichana.sudjairak",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "VERSATILE FULL STACK DEVELOPER WITH EXPERTISE IN WEB AND MOBILE APP DEVELOPMENT, EAGER TO DELIVER EXCEPTIONAL SOLUTIONS",
  skills: [
    emoji(
      `⚡ Over ${
        Number(dayjs().format("YYYY")) - 2021
      } years of experience in web app development, delivering high-quality designs.`
    ),
    emoji(
      `⚡ ${
        Number(dayjs().format("YYYY")) - 2022
      }+ years in hybrid mobile app development, ensuring seamless performance on iOS and Android.`
    ),
    emoji(
      "⚡ Full-stack capabilities with expertise in frontend, backend, and API integration."
    ),
    emoji(
      "⚡ Excellent at client management and collaborating with cross-functional teams."
    )
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
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "react-native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Burapha University, Thailand",
      logo: require("./assets/images/buuLogo.png"),
      subHeader: "Bachelor of Science, Computer Science",
      duration: "August 2017 - April 2021",
      desc: "GPA 3.31",
      descBullets: [
        "Proficient in software development and programming (A grades in Programming Fundamentals, Software Development, UI Design, Software Testing, Mobile App Development)",
        "Strong foundation in computer science and mathematics (A grades in Discrete Structures, Math for Computing, Probability & Statistics)",
        "Solid understanding of web and mobile technologies (good grades in Web Programming, Networks Programming, IoT for Smart Living)"
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
      role: "Full Stack Developer",
      company: "FIN Insurance Broker Co., Ltd.",
      companylogo: require("./assets/images/finLogo.png"),
      link: "https://www.fininsurance.co.th/",
      date: "June 2023 – Present",
      descBullets: [
        "Managed critical car insurance data and APIs, handling premium rates, insurer details, and vehicle model logic.",
        "Spearheaded the development of a comprehensive CMS for insurance-related organizational data, marketing insights, and advanced reporting features, presenting innovative ideas to the CTO.",
        "Developed and integrated a mobile app for car insurance, enhancing user engagement and accessibility alongside the CMS.",
        "Successfully implemented robust API notification systems for seamless communication with Lark Technologies Pte and LINE platforms."
      ]
    },
    {
      role: "Software Developer",
      company: "Customix Co., Ltd.",
      companylogo: require("./assets/images/customixLogo.png"),
      link: "https://www.customix.co/",
      date: "Apr 2021 – May 2023",
      descBullets: [
        "Innovated eKYC solutions, crafting a robust API (Node.js, AWS, Kong, PostgresDB), a sleek web app (Next.js, Material UI), and a versatile CMS (Next.js, React).",
        "Spearheaded the development of impactful mobile applications for Content Monetization, CCTV Mapping, and E-Commerce (React Native, WooCommerce).",
        "Engineered cutting-edge API Middleware using Golang and AWS Lambda, ensuring seamless integration and deployment with CI / CD pipelines (Jenkins, YAML)."
      ]
    },
    {
      role: "Web Developer Intern",
      company: "ClickNext Co., Ltd.",
      companylogo: require("./assets/images/clicknextLogo.png"),
      date: "Nov 2020 ‐ Mar 2021",
      desc: "Engineered a dynamic CMS tailored for Insurance Bureau and Financial Cooperative Systems, leveraging ASP.NET to streamline data management and operational efficiency."
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
  title: "Freelance Projects",
  subtitle: "SOME PROJECTS I CONTRIBUTED TO",
  projects: [
    {
      image: require("./assets/images/forumLogo.png"),
      projectName: "Prime Minister's Secretariat Question Forum System",
      descBullets: [
        "Role as a Frontend Developer",
        "Using Tech such as React.js, Ant Design",
        "Implemented a tracking system for parliamentary questions and consultations, improving transparency and efficiency for the Office of the Prime Minister's Secretariat."
      ]
    },
    {
      image: require("./assets/images/chatBroadcastLogo.png"),
      projectName: "Line OA & Facebook Chat Broadcasting",
      descBullets: [
        "Role as a Frontend Developer",
        "Using Tech such as React.js, Next.js, Material UI",
        "Created and optimized user interfaces for a broadcasting tool, enabling efficient communication via Line OA and Facebook chat."
      ]
    },
    {
      image: require("./assets/images/kpiLogo.png"),
      projectName: "KPI Platform Open API",
      descBullets: [
        "Role as a Backend Developer",
        "Using Tech such as Golang, MongoDB",
        "Developed and maintained the backend for a KPI platform, ensuring seamless integration and data handling through open APIs."
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
  display: false // Set false to hide this section, defaults to true
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

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+66-0853997206",
  email_address: "sudjairak.c@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "jchaichanah", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
