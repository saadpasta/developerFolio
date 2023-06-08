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
  username: "Alpha",
  title: "Hi, I'm Alpha",
  subTitle: emoji(
    "An Italian translator that translates open-source apps for free. I have translated many important applications for the Android modding community."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

const donationInfo = {
  title: emoji("Offer me a coffee ☕"),
  subtitle: "Any donation is appreciated as it keeps me motivated while I translate. You can donate with Kofi clicking the button below or you can contact me if you prefer to use another payment method (crypto, PayPal...)",
  link: "https://ko-fi.com/alpha4041"
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/alpha4041",
  gmail: "alph404@proton.me",
  crowdin: "https://crowdin.com/profile/alpha4041",
  telegram: "https://t.me/alph4",
  discord: "https://discordapp.com/users/907225472914567198",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "ITALIAN TRANSLATOR THAT USES THEIR TIME TO TRANSLATE APPS WITHOUT GETTING PAID",
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
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "M. Giua  scientific high school",
      logo: require("./assets/images/giua.png"),
      subHeader: "",
      duration: "September 2021 - August 2022",
      desc: "",
    },
    {
      schoolName: "Siotto Pintor classical high school",
      logo: require("./assets/images/siotto.png"),
      subHeader: "",
      duration: "September 2021 - present",
      desc: "Studying Latin and ancient Greek."
    },
    {
      schoolName: "
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
      role: "Italian translator",
      company: "Stats.fm",
      companylogo: require("./assets/images/statsfm.webp"),
      date: "2021 - present",
      desc: "Stats.fm is my biggest project. It's an app to check your Spotify statistics. I didn't translate it alone.",
      url: "https://stats.fm/"
    },
    {
      role: "Italian translator",
      company: "Rboard",
      companylogo: require("./assets/images/rboard.png"),
      date: "2021 – present",
      desc: "Rboard is an app to customize the Google Keyboard.",
      url: "https://github.com/DerTyp7214/RboardThemeManagerV3/"
    },
    {
      role: "Italian translator",
      company: "Songtube",
      companylogo: require("./assets/images/songtube.png"),
      date: "2021 - present",
      desc: "Songtube it's an app to download music from YouTube.",
      url: "https://songtube.github.io/"
    },
    {
    role: "Admin",
    company: "POPMods",
    companylogo: require("./assets/images/popmods.jpg"),
    date: "2022 - present",
    desc: "POPMods is a tech channel on Telegram. I'm an active admin.",
    url: "https://t.me/popmods/"
  },
  {
    role: "Italian translator",
    company: "PixelOS",
    companylogo: require("./assets/images/pixelos.png"),
    date: "2022 - present",
    desc: "PixelOS is a custom ROM for Android.",
    url: "https://pixelos.net"
  },
  {
    role: "Italian translator",
    company: "Inure",
    companylogo: require("./assets/images/inure.jpg"),
    date: "2023 - present",
    desc: "Inure is an app manager for Android.",
    url: "https://play.google.com/store/apps/details?id=app.simple.inure"
  },
  {
    role: "Italian community admin",
    company: "Xiaomiui",
    companylogo: require("./assets/images/xiaomiui.jpg"),
    date: "2021 - present",
    desc: "Xiaomiui is the biggest community on Telegram about Xiaomi's devices. I'm one of the admins in the Italian group.",
    url: "https://t.me/xiaomiui"
  },
  {
    role: "Italian translator",
    company: "MIUIHome",
    companylogo: require("./assets/images/miuihome.jpg"),
    date: "2021 - present",
    desc: "MIUIHome is an app to customize the official launcher of MIUI.",
    url: "https://github.com/qqlittleice/MiuiHome_R"
  }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
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
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Trinity College London GESE Grade 4",
      subtitle:
        "Graded Examination in Spoken English. Entry Level Certificate in ESOL International - Speaking and Listening (Entry 2) - CEFR Level A2.2. With Distinction.",
      imageAlt: "Trinity College London logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://example.com/"
        }
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
  subtitle:
    "Wanna request a translation or just say hi?  My Inbox is open for all.",
  email_address: "alph404@proton.me"
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  donationInfo,
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
