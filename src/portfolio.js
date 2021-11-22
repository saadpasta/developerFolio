/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Miftahul Ihsan",
  title: "Hi all, I'm Ihsan",
  subTitle: emoji(
    "A passionate Full Stack Mobile Developer 🚀 having an experience of building Web and Mobile applications with Laravel/Flutter/Kotlin/Javascript"
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1-6sqT3HeprYmZ2hnzR-c13Vn7bCE0DPp?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/IhsanElev",
  linkedin: "https://www.linkedin.com/in/miftahul-ihsan-175a80175/",
  gmail: "miftahulihsan7881@gmail.com",

  facebook: "https://web.facebook.com/profile.php?id=100005487879161",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "FULL STACK MOBILE DEVELOPER AND HAVE A WILLING TO LEARN NEW TECHNOLOGY",
  skills: [
    emoji("⚡ Develop Stunning Beatiful Mobile Application with Flutter"),
    emoji("⚡ Web Developing using Laravel"),
    emoji("⚡ Build a fast backend using go")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fas fa-code-branch"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fab fa-flutter-alt"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
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
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "UIN SULTAN SYARIF KASIM RIAU",
      logo: require("./assets/images/uinsuska.png"),
      subHeader: "Bachelor of Informatic Engineering",
      duration: "September 2017 --",
      desc: "Participated in the research and published 1 paper.",
      descBullets: [
        "Sentiment Analysis COVID19 Vaccine in Indonesia using Long Short Term Memory"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Mobile Programming", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Riau Cyber Solution",
      companylogo: require("./assets/images/rcs.png"),
      date: "Januari 2020 – Maret 2020",
      desc: "Integrating liqu.id with WHMCS to make reseller domain manager",
      descBullets: ["Experimenting with the feature"]
    },
    {
      role: "Software Engineer Intern",
      company: "Dinas PUTR Inhil",
      companylogo: require("./assets/images/dputr.png"),
      date: "September 2020-November 2020",
      desc: "Build Geographic Information System for construction"
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
  subtitle: "Some Project I Create",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Sistem Informasi Pembayaran Zakat",
      projectDesc: "Build Payment Of Zakat Swadaya Ummah"
    },
    {
      image: require("./assets/images/logo.png"),
      projectName: "Food Market",
      projectDesc: "Food Market Using Flutter And Bloc with laravel backend"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle: "Certification",

  achievementsCards: [
    {
      title: "Web Junior Pratama",
      subtitle: "Pass Competence Test Web Junior Developer BNSP",
      image: require("./assets/images/bnsp.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        }
      ]
    },
    {
      title: "Getting Started With Deep Learning",
      subtitle:
        "Certification Of Completed Getting Started With Deep Learning ",
      image: require("./assets/images/nvidia.png"),
      footerLink: [
        {
          name: "View ",
          url: "https://drive.google.com/file/d/1-8vXEKy2wwlOusKwxrFRwAANqzSCQnvR/view?usp=sharing"
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
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+6281378063014",
  email_address: "miftahulihsan7881@gmail.com.com"
};

// Twitter Section

const twitterDetails = {
  userName: "ihsan_ceper", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
