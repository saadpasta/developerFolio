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
    "A passionate game programmer 🚀 Looking for greater challenges."
  ),
  resumeLink:
    "resume/MahsaEskandari_Resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/thedownsideup",
  linkedin: "https://www.linkedin.com/in/mahsa-esk/",
  email: "mahsa.eskandari1998@gmail.com",
  gmail: "mahsa.eskandari1998@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "GAME DEVELOPMENT PROFESSIONAL WHO WANTS TO EXPLORE EVERYTHING IN GAMES",
  skills: [
    emoji("⚡ Programming Languages: C#, C++, Python, Java"),
    emoji("⚡ Software Design: SOLID, Clean Code, MVC, ECS, DI, Observer, Service Locator, Black Board, Factory, Singleton"),
	emoji("⚡ Game Engines: Unity, Unreal Engine 5"),
    emoji("⚡ Graphics: Adobe Photoshop, Adobe After Effects, Blender, Aseprite, Krita"),
    emoji("⚡ Miscellaneous: Git, Latex")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  softwareSkills: [
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "Unreal 5",
      fontAwesomeClassname: "fa fa-gamepad"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Alberta",
      logo: require("./assets/images/university_of_alberta_logo.jpg"),
      subHeader: "Master's degree, Computer Science",
      duration: "September 2023 - Present",
     desc: "Edmonton, Alberta, Canada",
//       descBullets: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
//       ]
    },
	{
      schoolName: "University of Tehran",
      logo: require("./assets/images/University_of_Tehran_logo.png"),
      subHeader: "Bachelor of Computer Engineering",
      duration: "September 2017 - February 2022",
     desc: "Tehran, Iran",
       //descBullets: [
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
	]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Game Software Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
	{
      Stack: "C#", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
	{
      Stack: "Unity", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "C++",
      progressPercentage: "50%"
    },
	{
      Stack: "Unreal Engine",
      progressPercentage: "50%"
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
   display: true, //Set it to true to show workExperiences Section
   experience: [
     {
       role: "Technical Lead",
       company: "Medrick FZE",
       companylogo: require("./assets/images/MedrickLogo.png"),
       //date: "Feb 2023 – Sep 2023",
       desc: "I led the development of Golmorad, a popular story driven game with multiple mini-games played by over 10 million users.",
       descBullets: [
	     "Set goals, ensured smooth functioning and efficient performance of technical operations.",
         "Designed architecture, and programmed gameplay that resulted in more than 1M downloads and a rating of 4.5 stars by 80.9K reviews on Google Play.",
		 "This exposure deepened my proficiency in following software design principles, guaranteeing the creation of code that is clean, scalable, and easy to maintain.",
         "Monitored and evaluated staff progress, also improved team technical pipelines.",
		 "Recruited, interviewed, assisted, and trained new technical employee.",
		 "..."
       ]
     },
     {
       role: "Senior Game Programmer",
       company: "Medrick FZE",
       companylogo: require("./assets/images/MedrickLogo.png"),
       //date: "Aug 2022 – Sep 2023",
       desc: "As a Senior Game Developer at Medrick Studio, the largest game studio in MENA, I played a key role in developing casual mobile games that has been enjoyed by millions of users worldwide.",
	   descBullets: [
	     "Designed, developed and optimized features for the Match3 Games this included the development of interactive elements, gameplay mechanics, and user interfaces fostering a dynamic and captivating gameplay environment",
         "Improved the performace of our core gameplay by 70%.",
		 "Developed various editor tools that facitilated the development process for other team members.",
		 "..."
       ]
     }
   ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  displayonlyopensource: false, // Set false to hide this section, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
    subtitle: "SOME OF THE PROJECTS THAT I'VE HELPED TO CREATE",
  projects: [
    {
       image: require("./assets/images/DreamHome.png"),
      projectName: "Dream Home",
      projectDesc: "A recently released story-driven mobile game with a mix of various mini-games and an enchanting gamification system to keep things engaging.",
      footerLink: [
        {
          name: "Check out",
          url: "https://play.google.com/store/apps/details?id=com.relicbit.mansion&hl=en&gl=US"
        }
        //  you can add extra buttons here.
      ]
    },
	{
       image: require("./assets/images/Golmorad.png"),
      projectName: "Golmorad",
      projectDesc: "A popular match-3 game with a captivating storyline and various dynamic live-ops, enjoyed by millions of users.",
      footerLink: [
        {
          name: "Check out",
          url: "https://play.google.com/store/apps/details?id=com.medrick.match3&hl=en&gl=US"
        }
        //  you can add extra buttons here.
      ]
    },
	{
       image: require("./assets/images/NeuroCare.png"),
      projectName: "NEUROCARE",
      projectDesc: " Thesis Project: Design and implementation of a set of cognitive games to evaluate the possibility of M.C.I. (Mild Cognitive Impairment) in the elderly - Supervisor: Prof. Hadi(Manouchehr) Moradi",
      footerLink: [
        {
          name: "Check out",
          url: "https://drive.google.com/file/d/1ndmI9Hv6p0tSnXuJqL4gJfQ4GwcQE1M2/view?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
    {
       image: require("./assets/images/GalaxyShooter.png"),
      projectName: "2D Galaxy Shooter",
      projectDesc: "A Unity game project I crafted, inspired by the course: Ultimate Guide to Game Development with Unity.",
      footerLink: [
        {
          name: "Check out",
          url: "https://drive.google.com/drive/folders/1V_s9TcnBLb1CGZymCDV1Ems_1t1F4geB?usp=sharing"
        }
      ]
    },
    {
       image: require("./assets/images/MyPixelArts.png"),
      projectName: "My Pixel Arts",
      projectDesc: "As a hobby, I create pixel art from time to time.",
      footerLink: [
        {
          name: "Check out",
          url: "https://drive.google.com/drive/folders/12P0aSPDsKrXORsNgC3DDyM84lRSyU9Tz?usp=sharing"
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
      title: "Unreal Engine 5 C++ The Ultimate Game Developer Course",
      //subtitle:
      //  "",
      image: require("./assets/images/cert1.png"),
      footerLink: [
        {
          name: "Certification",
          url: "/certificates/UC-a180698e-2930-453b-850f-a02bfa4fee0a.jpg"
        }
      ]
    },
    {
	  title: "Turn Based Puzzle Game in Unreal With Blueprints & C++",
      //subtitle:
      //  "TTC is the Certificate in Teaching English to Speakers of Other Language.",
      image: require("./assets/images/cert3.png"),
      footerLink: [
        {
          name: "Certification",
          url: "/certificates/UC-bbfeea15-a057-4a79-850a-d41adc2df778.jpg"
        }
      ]
    },

    {
      title: "Unreal Engine 5 Action Adventure Game Development Course",
//      subtitle: "Completed Certifcation from Udemy",
      image: require("./assets/images/cert2.png"),
      footerLink: [
        {name: "Certification", url: "/certificates/UC-0a0f62fc-5aa8-4296-b48d-8603e18e1162.jpg"}
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
    "Want to chat about an amazing job opportunity? Feel free to drop me an email.",
  subtitle2:
    "Experienced Game Programmer & Software Engineer",
  subtitle3:
    "Mahsa Eskandari",	
  email_address: "mahsa.eskandari1998@gmail.com"
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
