/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Vivek Kasture",
  title: "Hi all, I'm Vivek",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Angular / Nodejs / Ionic and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ZhD1-xDhP_lfTz7bfCVuWkG-Wh-j6Hry/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/itsvick",
  linkedin: "https://www.linkedin.com/in/vivek-kasture",
  // gmail: "itsvick@gmail.com",
  // medium: "https://medium.com/@vivekkasture",
  stackoverflow: "https://stackoverflow.com/users/4725898/vivek-kasture",
  instagram: "https://www.instagram.com/kasturevivek",
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
    emoji("⚡ Backend work with Node.js ")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html5",
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
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
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
      skillName: "pouchDB",
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
      skillName: "electron",
      fontAwesomeClassname: "fas fa-atom"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-square"
    },
    {
      skillName: "jira",
      fontAwesomeClassname: "fab fa-jira"
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
      schoolName: "Chhatrapati Shivaji Maharaj University",
      logo: require("./assets/images/suk-logo.png"),
      subHeader: "Bachelor of Engg. in Computer Science",
      duration: "July 2011 - May 2015"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
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
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Sr.Software Engineer",
      company: "Tekdi Technologies Pvt Ltd",
      companylogo: require("./assets/images/tekdi.png"),
      date: "Jan 2016 – present",
      desc: "Worked on various exciting projects with this organization while performing various roles"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "itsvick", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/diksha-logo.svg"),
      projectName: "DIKSHA",
      projectDesc:
        "The DIKSHA platform offers teachers, students and parents engaging learning material relevant to the prescribed school curriculum. Teachers have access to aids like lesson plans, worksheets and activities, to create enjoyable classroom experiences. Students understand concepts, revise lessons and do practice exercises",
      technologies: [
        "Angular",
        "Node",
        "Electron",
        "Ionic",
        "Jasmine",
        "Jest",
        "PouchDB",
        "sqLite"
      ],
      footerLink: [
        {
          name: "Visit Portal",
          url: "https://diksha.gov.in/explore"
        },
        {
          name: "Visit Android Mobile App",
          url: "https://play.google.com/store/apps/details?id=in.gov.diksha.app"
        },
        {
          name: "Visit Desktop Application",
          url: "https://diksha.gov.in/download/desktopapp"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/easysocial.png"),
      projectName: "EasySocial",
      projectDesc:
        "Easysocial is a social media mobile application built using Ionic, Angular, where user can post, comment, create page, group, events, polls and much more",
      technologies: ["Ionic", "Angular"],
      footerLink: [
        {
          name: "Visit Playstore",
          url: "https://play.google.com/store/apps/details?id=com.techjoomla.easysocial"
        },
        {
          name: "Visit AppStore",
          url: "https://itunes.apple.com/in/app/easysocial-for-joomla/id922884839?mt=8"
        }
      ]
    },
    {
      image: require("./assets/images/blogApp-logo.webp"),
      projectName: "JTicketing",
      projectDesc:
        "It is a Joomla based mobile App for the Event organizer to manage seats and tickets. Admin can scan the ticket and check status or get report via graphical representation",
      technologies: ["Ionic", "Angular", "D3.js"],
      footerLink: [
        {
          name: "Visit Playstore",
          url: "https://play.google.com/store/apps/details?id=com.techjoomla.JTicketingPro"
        },
        {
          name: "Visit AppStore",
          url: "https://itunes.apple.com/in/app/jticketing-pro/id875256578?mt=8"
        }
      ]
    },
    {
      image: require("./assets/images/joomla.png"),
      projectName: "Joomla Article App",
      projectDesc:
        "A Joomla based application where users can create their articles and choose when to publish or unpublish. It is a Joomla based application where users can create their articles and choose when to publish or unpublish.",
      technologies: ["Ionic", "Angular"],
      footerLink: []
    },
    {
      image: require("./assets/images/bni-logo.webp"),
      projectName: "BNI Biz. Directory",
      projectDesc:
        "A Joomla based mobile application where users can use Google Doc spreadsheets to display the user’s contact details in the mobile, To fetch data easily and quickly, QR Scanner has been provided",
      technologies: ["Ionic", "Angular"],
      footerLink: [
        {
          name: "Visit Playstore",
          url: "https://play.google.com/store/apps/details?id=com.appcarvers.bni"
        },
        {
          name: "Visit AppStore",
          url: "https://itunes.apple.com/in/app/bni-biz-directory/id1107981649?mt=8"
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
      // image: require("./assets/images/googleAssistantLogo.webp"),
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
      // image: require("./assets/images/pwaLogo.webp"),
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
      url: "https://medium.com/itsvick/why-react-is-the-best-5a97563f423e",
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
      slides_url: "https://bit.ly/itsvick-slides",
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
  podcast: ["url"],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8698645680",
  email_address: "vivekkasture555@gmail.com"
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
