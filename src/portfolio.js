/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mahsa Eskandari-Ghadi",
  title: "Hi all, I'm Mahsa",
  subTitle: emoji(
    "A passionate student🚀 Having Experience in Game Development."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1mj7p_dyyM5XSij_ahDyVyECq1QuTNSnu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/thedownsideup",
  linkedin: "https://www.linkedin.com/in/mahsa-esk/",
  email: "mahsa.eskandari77@ut.ac.ir",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "GAME DEVELOPMENT ENTHUSIAST WHO WANTS TO EXPLORE EVERYTHING IN GAMES",
  skills: [
    emoji(
      "⚡ Programming Languages: Python, C/C++, C#, SQL (MySQL), Java, HTML/CSS, R, Verilog"
    ),
    emoji("⚡ Programming Libraries: Numpy, Pandas, Seaborn, NLTK, SKlearn, Pytorch, Tensorflow, Keras"),
    emoji("⚡ Game Engines: Unity"),
    emoji("⚡ Graphics: Photoshop, Adobe After Effects, Krita, Blender"),
    emoji("⚡ Miscellaneous: Latex, Word, Excel, PowerPoint, Jupyter Notebook, Arduino, Proteus, ModelSim, MultiSim, Quartus, Multiple Music Instruments")
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
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
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
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Tehran",
      logo: require("./assets/1200px-University_of_Tehran_logo.svg.png"),
      subHeader: "Computer Engineering Undergraduate Student",
      duration: "September 2017 - now",
      desc: "Working on My Thesis Project",
//       descBullets: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
//       ]
    }]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Unity Programmer", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Python Programmer",
      progressPercentage: "70%"
    },
    {
      Stack: "Teaching",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
//   display: true, //Set it to true to show workExperiences Section
//   experience: [
//     {
//       role: "Software Engineer",
//       company: "Facebook",
//       companylogo: require("./assets/images/facebookLogo.png"),
//       date: "June 2018 – Present",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       descBullets: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
//       ]
//     },
//     {
//       role: "Front-End Developer",
//       company: "Quora",
//       companylogo: require("./assets/images/quoraLogo.png"),
//       date: "May 2017 – May 2018",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     },
//     {
//       role: "Software Engineer Intern",
//       company: "Airbnb",
//       companylogo: require("./assets/images/airbnbLogo.png"),
//       date: "Jan 2015 – Sep 2015",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     }
//   ]
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
    subtitle: "SOME OF THE PROJECTS THAT I HELPED TO CREATE",
  projects: [
    {
//       image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "NEUROCARE",
      projectDesc: " Thesis Project: Design and implementation of a set of cognitive games to evaluate the possibility of M.C.I. (Mild Cognitive Impairment) in the elderly - Supervisor: Prof. Hadi(Manouchehr) Moradi",
      footerLink: [
        {
          name: "Get Files",
          url: "https://drive.google.com/file/d/1ndmI9Hv6p0tSnXuJqL4gJfQ4GwcQE1M2/view?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
    {
//       image: require("./assets/images/nextuLogo.webp"),
      projectName: "2D Galaxy Shooter",
      projectDesc: "Unity game I got started with in the course: Ultimate Guide to Game Development with Unity",
      footerLink: [
        {
          name: "Get Files",
          url: "https://drive.google.com/drive/folders/1V_s9TcnBLb1CGZymCDV1Ems_1t1F4geB?usp=sharing"
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
      title: "3rd Prize in AYPT",
      subtitle:
        "The Austrian Young Physicists Tournament is a team-oriented physics competition among teams of secondary school students. During the tournament the students present their solutions to scientific problems which they have prepared over several months. Their solution is criticized during the course of the tournament by other students and their performance is graded by a jury consisting of experts in the field of physics.",
      image: require("./assets/images/cert1.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1EUJaOPJD9RcaF7DpqLCV8YjK25C0JubM/view?usp=sharing"
        },
        {
          name: "AYPT Website",
          url: "https://www.aypt.at/new/index_en.html#thisyear"
        }
      ]
    },
    {
      title: "Teacher Training Course (TTC)",
      subtitle:
        "TTC is the Certificate in Teaching English to Speakers of Other Language.",
      image: require("./assets/images/cert3.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1CHrRD1hVJ-h2niKzDoxYfvg87NG6s82C/view?usp=sharing"
        }
      ]
    },

    {
      title: "Udemy: A Beginner's Guide to Machine Learing with Unity",
      subtitle: "Completed Certifcation from Udemy",
      image: require("./assets/images/cert2.png"),
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1h3rAGWKi1nSQ0knGO_xQjSXVx_ZhTQ5w/view?usp=sharing"}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "I almost always reply",
  email_address: "mahsa.eskandari77@ut.ac.ir"
};

// Twitter Section

const twitterDetails = {
//   userName: "twitter", //Replace "twitter" with your twitter username without @
//   display: true // Set true to display this section, defaults to false
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
