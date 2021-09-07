/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Carmelo Fiorello",
  title: "Hi all, I'm Carmelo",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Angular / Nodejs / Ionic and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1odq1nIJHrXgcfjuE3mn_j-SE7o3bxgxZ/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

const greetingIta = {
  username: "Carmelo Fiorello",
  title: "Ciao, sono Carmelo",
  subTitle: emoji(
    "Un appassionato Full Stack Software Developer 🚀 con esperienza nello sviluppo di applicazioni Web e Mobile con JavaScript / Angular / Nodejs / Ionic e tante altre fantastiche librerie e frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1odq1nIJHrXgcfjuE3mn_j-SE7o3bxgxZ/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dj-fiorex",
  linkedin: "https://www.linkedin.com/in/carmelo-fiorello-7140b268/",
  gmail: "carmelofiorello@gmail.com",
  gitlab: "https://gitlab.com/carmelo.fiorello",
  facebook: "https://www.facebook.com/carmelo.fiorello",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
    emoji(
      "⚡ VR/AR and games development with Unity game engine"
    ),
    emoji(
      "⚡ Microcontroller and sensors development"
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
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
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
    },
    {
      skillName: "arduino",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "unity",
      fontAwesomeClassname: "fab fa-unity"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};


const skillsSectionIta = {
  title: "Cosa faccio",
  subTitle: "FULL STACK DEVELOPER CON LA PASSIONE PER OGNI TECH STACK",
  skills: [
    emoji(
      "⚡ Sviluppo front-end altamente interattivo per le tue applicazioni web e mobili"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) e SPA Stacks"),
    emoji(
      "⚡ Integrazione con i principali servizi di terze parti come Firebase/ AWS / Digital Ocean"
    ),
    emoji(
      "⚡ Sviluppo applicazioni VR/AR e giochi con il Game Engine Unity"
    ),
    emoji(
      "⚡ Sviluppo applicazioni embedded per microcontrollori, IOT e sensoristica avanzata"
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
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
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
    },
    {
      skillName: "unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "arduino",
      fontAwesomeClassname: "fas fa-microchip"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Politecnico di Milano",
      logo: require("./assets/images/Logo_Politecnico_Milano.png"),
      subHeader: "Computer Science",
      duration: "September 2013 - April 2017",
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
      Stack: "Web Technologies", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Arduino/Microcontroller",
      progressPercentage: "80%"
    },
    {
      Stack: "AR/VR",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Waterjug S.L.",
      companylogo: require("./assets/images/logo_waterjug-1.png"),
      date: "",
      desc: "AR/VR development, dashboard and mobile applications"
    },
    {
      role: "Software Engineer",
      company: "Lattes Editori S.R.L.",
      companylogo: require("./assets/images/lattes_logo_circle.jpg"),
      date: "",
      desc: "Development of a virtual reality applications",
      descBullets: [
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Software Engineer",
      company: "Haptica S.R.L",
      companylogo: require("./assets/images/logo-haptica-1.jpg"),
      date: "",
      desc: "Microcontroller and advanced sensors development"
    },
    {
      role: "Software Engineer",
      company: "Francy Solutions",
      companylogo: require("./assets/images/francy_logo.png"),
      date: "",
      desc: ".NET Core and .NET Framework development"
    },
  ]
};


const workExperiencesIta = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Waterjug S.L.",
      companylogo: require("./assets/images/logo_waterjug-1.png"),
      date: "",
      desc: "Sviluppo applicazioni AR/VR, dashboard amministrazione e applicazioni per dispositivi mobili"
    },
    {
      role: "Software Engineer",
      company: "Lattes Editori S.R.L.",
      companylogo: require("./assets/images/lattes_logo_circle.jpg"),
      date: "",
      desc: "Sviluppo applicazioni VR/AR con dashboard di amministazione",
      descBullets: [
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Software Engineer",
      company: "Haptica S.R.L",
      companylogo: require("./assets/images/logo-haptica-1.jpg"),
      date: "",
      desc: "Sviluppo software per microcontrollori e sensoristica avanzata"
    },
    {
      role: "Software Engineer",
      company: "Francy Solutions",
      companylogo: require("./assets/images/francy_logo.png"),
      date: "",
      desc: "Sviluppo applicazioni con .NET Core and .NET Framework"
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/moma.webp"),
      projectName: "M.O.M.A. Visual",
      projectDesc: "VR companion application for the M.O.M.A. Visual school book",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.latteseditori.it/catalogo/m-o-m-a-visual"
        },
        {
          name: "Download App IOS",
          url: "https://apps.apple.com/us/app/m-o-m-a-visual/id1502287280"
        },
        {
          name: "Download App Android",
          url: "https://play.google.com/store/apps/details?id=it.latteseditori.momavisual"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const bigProjectsIta = {
  title: "I miei progetti",
  subtitle: "ALCUNE AZIENDE E STARTUPS CHE HO AIUTATO PER CREARE LE LORO TECNOLOGIE",
  projects: [
    {
      image: require("./assets/images/moma.webp"),
      projectName: "M.O.M.A. Visual",
      projectDesc: "Applicazione VR a supporto del libro M.O.M.A. Visual",
      footerLink: [
        {
          name: "Visita il sito",
          url: "https://www.latteseditori.it/catalogo/m-o-m-a-visual"
        },
        {
          name: "Scarica l'app per IOS",
          url: "https://apps.apple.com/us/app/m-o-m-a-visual/id1502287280"
        },
        {
          name: "Scarica l'app per Android",
          url: "https://play.google.com/store/apps/details?id=it.latteseditori.momavisual"
        }
        //  you can add extra buttons here.
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
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+39-3348795535",
  email_address: "carmelofiorello@gmail.com"
};

const contactInfoIta = {
  title: emoji("Contattami ☎️"),
  subtitle:
    "Vuoi discutere di un progetto con me o solamente dirmi ciao? La mia mail è aperta a tutti.",
  number: "+39-3348795535",
  email_address: "carmelofiorello@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "CarmeloFiorello", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  greetingIta,
  socialMediaLinks,
  skillsSection,
  skillsSectionIta,
  educationInfo,
  techStack,
  workExperiences,
  workExperiencesIta,
  openSource,
  bigProjects,
  bigProjectsIta,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  contactInfoIta,
  twitterDetails
};
