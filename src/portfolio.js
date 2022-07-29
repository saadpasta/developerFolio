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
  username: "Sakshi Subedi",
  title: "Hi all, I'm Sakshi",
  subTitle: emoji(
    "A highly motivated person who is curious about exploring new technologies and a result-driven Software Engineer with a never-give-up attitude. I have 3 years of Full Stack Software Development experience in building web applications using Java / React / Node.js and some other cool libraries and frameworks. I am consistently quick to search for streamlining. I want to be a part of a firm, that stimulates healthy competition, offers opportunities for growth, enriches the experience, creates constant value addition, and learns and be a part of an excellent team."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1UjCuE_SVttVD1K8FaGPYYHPWmCKi9zyf/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sakshisubedi",
  linkedin: "https://www.linkedin.com/in/sakshisubedi/",
  gmail: "sakshisubedi@gmail.com",
  gitlab: "", //"https://gitlab.com/saadpasta",
  facebook: "", //"https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@sakshisubedi",
  stackoverflow: "", //"https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "",
  skills: [
    emoji(
      "⚡ Developing scalable end-to-end web applications using Java, React, Node.js, etc."
    ),
    emoji(
      "⚡ Building various developer productivity tools and microservices to reduce the delivery time of projects in our team."
    ),
    emoji(
      "⚡ Debugging critical production issues and significantly reducing latency by optimizing queries, caching data on the website, and performing end-to-testing."
    ),
    emoji(
      "⚡ Integrating third party services such as GCP / AWS / Firebase / Getstream / ML models."
    ),
    emoji(
      "⚡ Building automation scripts in Cloud Functions for event-driven operations in a Serverless manner."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    // {
    //   skillName: "C++",
    //   fontAwesomeClassname: "fab fa-cplusplus"
    // },
    {
      skillName: "Python",
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
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    // {
    //   skillName: "Typescript",
    //   fontAwesomeClassname: "fab fa-ts"
    // },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "angularjs",
      fontAwesomeClassname: "fab fa-angular"
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
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "gcp",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    // {
    //   skillName: "git",
    //   fontAwesomeClassname: "fas fa-git-alt"
    // },
    // {
    //   skillName: "kafka",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "redis",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
    // {
    //   skillName: "swagger",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "terraform",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Calfornia San Diego",
      logo: require("./assets/images/ucsdLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2022 - June 2024",
      desc: "",
      descBullets: [
        "Coursework: Principles of Computer Architecture, Recommender Systems and Web Mining."
      ]
    },
    {
      schoolName: "(V.E.S.I.T) University of Mumbai",
      logo: require("./assets/images/muLogo.png"),
      subHeader: "Bachelor of Engineering in Computer Engineering",
      duration: "August 2015 - May 2019",
      desc: "Ranked 2nd in the Computer Engineering department.",
      descBullets: [
        "CGPA: 9.64/10",
        "Coursework: Data Structures, Analysis of Algorithms, Object Oriented Programming Methodology, Database Management  Systems, Structured Programming Approach, Soft Computing, Software Engineering, Computer Organization and Architecture, Artificial Intelligence, Soft Computing."
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
      role: "Software Engineer 2",
      company: "PayPal",
      companylogo: require("./assets/images/paypalLogo.png"),
      date: "July 2022 – August 2022",
      desc: "",
      descBullets: [
        "Developed tools and platforms intended to aid in fault detection as well as issue communication, tirage, and resolution for PayPal products using React, Java, and Node.js.",
        "Responsible for minimizing the impact of bad change releases by validating changes prior to and during releases."
      ]
    },
    {
      role: "Full Stack Software Engineer",
      company: "Paytm Insider",
      companylogo: require("./assets/images/paytmInsiderLogo.png"),
      date: "June 2021 – July 2022",
      desc: "",
      descBullets: [
        "Accountable for an application development including debugging critical production issues and significantly reducing latency by optimizing queries, caching data on the website, and performing end-to-testing.",
        "Developed a centralized community platform in the Paytm Money app for stock traders and investors to communicate where they publish updates, comment on, and ask questions about financial markets’ performance.",
        "The application is scalable enough to handle millions ofrequests. It saved traders and investors time to respond to emails and increased operational efficiency by 50%-60% using Java, Node.js, React, etc."
      ]
    },
    {
      role: "Senior Software Developer",
      company: "Quantiphi",
      companylogo: require("./assets/images/quantiphiLogo.png"),
      date: "July 2019 – June 2021",
      desc: "",
      descBullets: [
        "Spearhead end-to-end web development using React, Angular, Java, and Node.js for numerous client projects and cultivated expertise with GCP.",
        "Integrated an application with third-party APIs, and ML models, and built automation scripts in Cloud Functions for event-driven operations in a Serverless manner using Python.",
        "Designed database schemas for relational and non-relational databases.",
        "Also, collaborated with internal teams, including UI/UX designers and QA testers, and mentored freshers with Node.js."
      ]
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
  title: "Projects",
  subtitle: "SOME PERSONAL AND COMPANIES PROJECTS",
  projects: [
    {
      image: "", //require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Covid Application",
      projectDescBullets: [
        "Covid Application to tracker count of COVID cases across globe and find vaccination centres in India using either pin code or by selecting district."
      ],
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/sakshisubedi/Covid"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: "",
      projectName: "Portfolio Tracker",
      projectDescBullets: [
        "API service for portfolio tracking that allows adding, removing, and modifying trades as well as performing simple return calculations."
      ],
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://nextu.se/"
        // }
        {
          name: "Github Link",
          url: "https://github.com/sakshisubedi/portfolio-tracker"
        }
      ]
    },
    {
      image: "",
      projectName: "Taggit Platform",
      projectDescBullets: [
        "Developed a web-based annotation tool on top of the available open-source software to perform de-identification, synthetic insertion, and extracting key/value pairs from the de-identified documents.",
        "Improved operational efficiency to save up to 5-6 hours of a tagger’s manual effort by automating the pipeline and leveraged GCP services with ~99% accuracy of masking the personally identifiable information."
      ],
      footerLink: []
    },
    {
      image: "",
      projectName: "SBA-PPP Loan Application Portal",
      projectDescBullets: [
        "Developed a web application portal with the integration of Cloud Document AI to automate the processing of loan applicants’ documents and reduce the burden of the loan underwriter by only validating it.",
        "Saved agent’s time and ensured timely delivery of small business assistance and increased throughput from 60%-70% by automation ensuring business continuity, and employee safety during the COVID-19 crisis."
      ],
      footerLink: []
    },
    {
      image: "",
      projectName: "Google Retail Demo",
      projectDescBullets: [
        "Built a scalable microservice forthe beauty and retail industry that recommends the product based on the user’s youtube search history, similar purchased, and frequently bought items demonstrating the power of GCP services.",
        "Reduced memory consumption of the micro-services by 75% through code optimization."
      ],
      footerLink: []
    },
    {
      image: "",
      projectName: "U-Service Tool",
      projectDescBullets: [
        "Created a tool that provisions read-only access to the data present in the BigQuery data lake to other projects using shared datasets and authorized views.",
        "The application holds data of ~200 customers from their older environment and ensures both the platforms are in sync with each other by facilitating various access control and administrative tasks to preserve the integrity of data and for the overall security of the customer applications."
      ],
      footerLink: []
    },
    {
      image: "",
      projectName:
        "Drought Prediction and River Network Optimization in Maharashtra Region",
      projectDescBullets: [
        "Developed a web application that forecasted the onset of drought in the Marathwada region of Maharashtra and provided cost-effective ways to re-route the natural water sources.",
        "Drought prediction is done using a Deep Belief Network (DBN), and drought mitigation is done with a Multi-Swarm Optimization technique that provides a rerouted path. The DBN model's accuracy is 0.04469 for the root mean square and 0.00207 for the mean absolute error."
      ],
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters !",

  achievementsCards: [
    {
      title: "Google Cloud | Associate Cloud Engineer",
      subtitle:
        "Completed Certification for Associate Cloud Engineer conducted by Google Cloud",
      image: require("./assets/images/gcpLogo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credential.net/84910158-dec8-4a24-a6a8-e8a5fec3bdea"
        }
      ]
    },
    {
      title: "Big Data Analytics and Machine Learning",
      subtitle:
        "Successfully completed Big Data Analytics and Machine Learning Intensive 30 Day Workshop conducted by MIT FABLAB, notemybook and riidl",
      image: require("./assets/images/riidlLogo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1x5lBxaAN00hSrIluMhvWgy5apZRdmkdV/view?usp=sharing"
        }
      ]
    },

    {
      title: "Rising Star - Ace of the Initiative award",
      subtitle:
        "Awarded the Rising Star - Ace of the Initiative award at Quantiphi Inc. for solving problem statements within very stringent timelines.",
      image: require("./assets/images/quantiphiLogo.png"),
      footerLink: [
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1g8RaGspI1OeME5qTn0IpkF_0ncpjNY8S/view?usp=sharing/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Publications Section
const publicationSection = {
  title: "Publications",
  subtitle: "",
  publications: [
    {
      image: "", //require("./assets/images/saayaHealthLogo.webp"),
      publicationName:
        "Drought Prediction and River Network Optimization in Maharashtra Region",
      publicationDesc:
        "Author: Sakshi S, Krutika P, Girisha N, Saili K, Priya R, “Drought Prediction and River Network Optimization in Maharashtra Region”. SPRINGER, Advances in Computing and Data Sciences Series, 2019.",
      footerLink: [
        {
          name: "View Publication",
          url: "https://link.springer.com/chapter/10.1007/978-981-13-9942-8_37"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "Curated some technical resolutions for the challenges I faced.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description: ""
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
    "Discuss a project or have wonderful job opportunities? My Inbox is open for all.",
  number: "+91-7045387638",
  email_address: "sakshisubedi@gmail.com"
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
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  publicationSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
