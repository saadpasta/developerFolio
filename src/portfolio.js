/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 3000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Faruk Aygun",
  title: "Hi all, I'm Faruk",
  subTitle: emoji(
    "A passionate Game / Backend Developer 🚀 having an experience of game / backend development with C# & .NET core and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://www.canva.com/design/DAFtB9IT8nE/T03U41Weil-zP1-68fIVaw/edit?utm_content=DAFtB9IT8nE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/farukaygun",
  linkedin: "https://www.linkedin.com/in/farukaygun/",
  gmail: "farukaygun@outlook.com.tr",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "GAME / BACKEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly fun games!"
    ),
    emoji("⚡ Innovative Progressing Games"),
    emoji(
      "⚡ Integration of third party services such as Unity Game Services / Firebase / Photon Fusion."
    ),
    emoji("⚡ Developing powerful and effective backend applications with .NET Core.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "Photon Fusion",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "Unity Game Services",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "VContainer DI",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: ".NET Core",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Entity Framework",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
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
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Yalova University",
      logo: require("./assets/images/YalovaLogo.png"),
      subHeader: "Bachelor Degree of Computer Science",
      duration: "September 2015 - December 2022",
      desc: "",
      descBullets: [

      ]
    },
    {
      schoolName: "Anadolu University",
      logo: require("./assets/images/AnadoluLogo.png"),
      subHeader: "Studying Management Information Systems",
      duration: "October 2023 - Present",
      desc: "",
      descBullets: [

      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Game Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "80%"
    },
    {
      Stack: "Android Development",
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
      role: "Game Developer",
      company: "NG Software and Consultancy Co.",
      companylogo: require("./assets/images/ngss-logo-2.png"),
      date: "January 2023 – Present",
      desc: "As a game developer, we develop mobile games with Unity. We developed 5 mobile games currently.",
      descBullets: []
    },
    {
      role: "Game Developer Intern",
      company: "Nitra Games Software Ltd. Co",
      //companylogo: require(""),
      date: "August 2022 – September 2022",
      desc: "I developed a wrapper and integrated part of the Bullet3 physics library into the Glist Engine game engine."
    },
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
  title: "Works",
  subtitle: "GAMES AND APPLICATIONS I WORKED ON",
  projects: [
    {
      // image: require("./assets/images/"),
      projectName: "Word Expedition",
      projectDesc: "Word expedition is the last game we are currently developing. It is a 1v1 multiplayer competitive mobile word puzzle game. The game is currently in the development stage, and I am involved in the project as a Game Developer. We utilize technological tools such as Photon Fusion, Cloud Code, Cloud Save, Economy, Leaderboards, Push Notifications, and more within the Unity Game Services for the project.",
    },
    {
      image: require("./assets/images/bar-control-icon.png"),
      projectName: "Bar Control",
      projectDesc: "Bar Control is a hypercasual mobile game. I worked on the project as a Game Developer, utilizing Unity Game Services' Cloud Code, Cloud Save, Economy, Leaderboards, Push Notifications, and other technological features.",
      footerLink: [
        {
          name: "Bar Control",
          url: "https://play.google.com/store/apps/details?id=com.xnggames.barcontrol"
        }
      ]
    },
    {
      image: require("./assets/images/ic_launcher_round.png"),
      projectName: "Catch Me!",
      projectDesc: "Catch Me! is a hypercasual mobile game. I worked on the project as a Game Developer, utilizing Unity Game Services' Cloud Code, Cloud Save, Economy, Leaderboards, Push Notifications, and other technological features.",
      footerLink: [
        {
          name: "Google Play",
          url: "https://play.google.com/store/apps/details?id=com.xnggames.catchme"
        }
      ]
    },
    {
      image: require("./assets/images/ZombieGameIconPixelOk.png"),
      projectName: "Zombie Runner",
      projectDesc: "Zombie Runner is an action-packed endless running game where players kill zombies while running. I worked on the project as a Game Developer, incorporating technological features such as Cloud Save and Economy from Unity Game Services.",
      footerLink: [
        {
          name: "Zombie Runner",
          url: "https://play.google.com/store/apps/details?id=com.NGSS.ZombieRunner"
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
      title: "Game and Application Academy: Game Development with Unity",
      subtitle:
        "Google Turkey, in collaboration with the Entrepreneurship Foundation and T3 Innovation Center, has successfully implemented the Game and Application Academy with the support of the Ministry of Industry and Technology and the Presidency Digital Transformation Office. The scholarship recipient has successfully completed a total of 46 hours of training, consisting of 218 instructional videos, titled \"Introduction to Game Development with Unity\" and \"Specialization in Game Development with Unity\", along with the relevant assessment exams, thanks to the support provided.",
      image: require("./assets/images/GameAndApplicationAcademyLogo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://verified.sertifier.com/en/verify/89128009161108/"
        },
      ]
    },
    {
      title: "Game and Application Academy: Technology Entrepreneurship",
      subtitle:
        "In collaboration with the Entrepreneurship Foundation and T3 Innovation Center, Google Turkey has successfully implemented the Game and Application Academy with the support of the Ministry of Industry and Technology and the Presidency Digital Transformation Office. The scholarship recipient has successfully completed the 11-hour Technology Entrepreneurship Training Program, consisting of 73 instructional videos, along with the relevant assessment exams. The Technology Entrepreneurship Training Program covers topics such as entrepreneurship, law, human resources, and finance within its curriculum.",
      image: require("./assets/images/GameAndApplicationAcademyLogo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://verified.sertifier.com/en/verify/07815939306130/"
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
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "farukaygun@outlook.com.tr"
};

// Twitter Section

const twitterDetails = {
  userName: "frkaygun", //Replace "twitter" with your twitter username without @
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
