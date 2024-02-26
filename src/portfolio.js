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
  username: "Hassan Mehdi",
  title: "Hi, I'm Hassan",
  subTitle: emoji(
    "A Self-motivated, creative & passionate python developer, I weave the threads of Computer Science in the realms of Computer Vision, AI and RESTful APIs"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1YoiZIZouYp171q1dhowDFsVftbzWGQEf/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/DevHassanMehdi",
  linkedin: "https://www.linkedin.com/in/devhassanmehdi/",
  gmail: "hassanmehdi510@gmail.com",
  twitter: "https://twitter.com/DevHassanMehdi",
  facebook: "https://www.facebook.com/devhassanmehdi/",
  instagram: "https://www.instagram.com/devhassanmehdi/",
  // kaggle: "https://gitlab.com/saadpasta",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "A VERSATILE PYTHON TECHNOLOGIST WHOS SKILLSET ENCOMPASSES A MULTITUDE OF TECHNOLOGIES AND PROGRAMMING LANGUAGES",
  skills: [
    emoji("⚡ Develope AI Powered IoT-based solutions"),
    emoji("⚡ Develope AI models using ML, DL principles"),
    emoji("⚡ Integrate AI in custom software solutions and APIs"),
    emoji("⚡ Design strong APIs that support mobile and desktop clients")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
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
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
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
      schoolName: "IQRA NATIONAL UNIVERSITY",
      logo: require("./assets/images/inuLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "February 2019 - February 2023",
      desc: "Graduated as the topper of my batch, with a CGPA of 3.78 out of 4.0",
      descBullets: [
        "Artificial Intelligence, Data Mining, Information Security",
        "Programming Fundamentals, Object Oriented Programming, Modern Programming, Visual Programming, Internet Programming, Microprocessors and Assembly Language, Database Systems",
        "Calculus, Differential Equations, Linear Algebra, Theory of Automata, Discrete Structures, Data Structures, Design and Analysis of Algorithms, Statistics",
        "Software Engineering, Object Oriented Analysis and Design",
        "Digital Image Processing, Computer Graphics, Human Computer Interaction",
        "C++, C#, Java, Python, JavaScript, PHP, HTML, CSS, MATLAB, SQL, GIT"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",
      progressPercentage: "95%"
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Computer Vision, Machine Learning & Deep Learning",
      progressPercentage: "85%"
    },
    {
      Stack: "Data Science and Analytics",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Team Lead - Backend / Data Science",
      company: "Ri Software",
      companylogo: require("./assets/images/riLogo.jpeg"),
      date: "April 2023 – February 2024",
      desc: "At a Ukrainian-based software company, I led a team of back-end developers and data scientists, focusing on creating custom software solutions and algorithms that help businesses grow. During this time, I",
      descBullets: [
        "Collaborated closely with relevant stakeholders to ensure timely delivery of high-quality products",
        "Managed frequent code deployments without causing downtime",
        "Conducted thorough code reviews and provided constructive feedback to team members",
        "Designed and implemented efficient back-end components to optimize application performance",
        "Integrated advanced machine learning and deep learning algorithms into our offerings",
        "Analyzed data and identified opportunities for improvement.",
        "Created robust APIs supporting mobile and desktop clients",
        "Worked alongside cross-functional teams to establish project goals and deliverables"
      ]
    },
    {
      role: "Jr. Web Developer",
      company: "NetChain Media",
      companylogo: require("./assets/images/netchainLogo.png"),
      date: "January 2022 – Jan 2023",
      desc: "At a UK-based software company, I contributed to build and maintain resilient and functional websites. I",
      descBullets: [
        "Assisted with the creation of websites and updating existing websites and web applications",
        "Worked under the supervision of senior developers, assisted with coding, testing, design adjustments, and client reviews",
        "Resolved escalated customer issues independently and was part of development on large product initiatives",
        "Paired with other developers as well as collaborated with designers, product managers, and other stakeholders",
        "Contributed to building and maintaining websites that were resilient and functional",
        "participated in code reviews and provided feedback to other developers"
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
  subtitle:
    "AS A DILIGENT COMPUTER SCIENTIST, I HAVE BEEN INVOLVED IN SEVERAL IMPACTFUL PROJECTS, INCLUDING",
  projects: [
    {
      image: require("./assets/images/riLogo.jpeg"),
      projectName: "Ri Software",
      projectDesc:
        "RI Software is an innovative business management solution that enables small businesses to not only showcase and sell their products and services but also gain valuable insights through integrated AI algorithms, fostering growth and success",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ri-software.com.ua"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Driving Negligence Dissuager System",
      projectDesc:
        "DNDS is a vehicle safety recommendation system that can be fitted in all kinds of vehicles. The system detects drivers' drowsiness, lane lines, lane deviation, and objetcs like other vehicles, animals and pedestrians etc. The system alerts the driver if necessory to get them to focus on the raod and avoid mishaps",
      footerLink: [
        {
          name: "Visit Project Repository",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Busses to Cars Ad Distribution System",
      projectDesc:
        "BCADS is an advertisment distribution system that uses Vehicle Area Networks(VANETS) to distribute ads from busses with pre-determined rute to other cars",
      footerLink: [
        {
          name: "Visit Project Repository",
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
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
  isHireable
};
