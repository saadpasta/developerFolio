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
  username: "Saad Rasheed",
  title: "Hi all, I'm Saad",
  subTitle: emoji(
    "A Data Scientist & Full Stack Web Developer 🚀 I turn your DATA into STORIES and build web solutions that make them come alive."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Dg1QJrn_UdeZW0mX3kW-Hn_zXN85j4fT/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadrasheeddev",
  linkedin: "https://www.linkedin.com/in/saadrasheeddev/",
  gmail: "saadrasheeddev@gmail.com",
  kaggle: "https://www.kaggle.com/saadrasheed20",
  facebook: "https://www.facebook.com/saadrasheed20",
  medium: "https://medium.com/@saadrasheeddev",

  // gitlab: "https://gitlab.com/saadpasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "PASSIONATE DATA SCIENTIST WHO LOVES TO UNCOVER INSIGHTS FROM DATA AND SOLVE COMPLEX PROBLEMS WITH AI",
  skills: [
    emoji(
      "⚡ Develop end-to-end machine learning models, from data wrangling to deployment"
    ),
    emoji(
      "⚡ Build powerful data visualizations to uncover trends and insights"
    ),
    emoji(
      "⚡ Leverage AI techniques to create intelligent solutions for complex problems"
    ),
    emoji(
      "⚡ Develop and deploy cloud-based machine learning solutions using AWS, GCP, or Azure"
    ),
    emoji(
      "⚡ Integration of third-party APIs and services like AWS, Google Cloud, or custom-built AI models"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "fas fa-table"
    },
    {
      skillName: "NumPy",
      fontAwesomeClassname: "fas fa-square-root-alt"
    },
    {
      skillName: "Scikit-learn",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Google Cloud",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Airflow",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "Jupyter",
      fontAwesomeClassname: "fas fa-book"
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of London",
      logo: require("./assets/images/uolLogo.png"),
      subHeader: "BSc Computer Science (Hons)",
      duration: "October 2021 - September 2024"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
    // {
    //   schoolName: "Whales College",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Science", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "80%"
    },
    {
      Stack: "Data Engineering",
      progressPercentage: "75%"
    },
    {
      Stack: "Cloud Computing",
      progressPercentage: "70%"
    },
    {
      Stack: "Deep Learning",
      progressPercentage: "65%"
    },
    {
      Stack: "Programming (Python, SQL, etc.)",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Machine Learning Engineer",
      company: "Zaavia",
      companylogo: require("./assets/images/zaaviaLogo.png"),
      date: "September 2023 – Present",
      desc: "Enabling Stakeholders to Take Informed Blood Banking Decisions",
      descBullets: [
        "Developing End-to-End Data Pipeline for OLAP Databases",
        "Leveraging OLAP for research analysis and predictive analysis to optimize blood product inventory management"
      ]
    },
    {
      role: "Data Curator Intern",
      company: "VisaBridge",
      companylogo: require("./assets/images/visabridgeLogo.png"),
      date: "September 2023 – December 2023",
      desc: "Aiming to help people migrate for better opportunities",
      descBullets: [
        "Scraped data for 75+ countries, including visa requirements, high-paying professions, living expenses, and opportunities.",
        "Transformed data into a consistent format for seamless country comparisons."
      ]
    }
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
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
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
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
      image: require("./assets/images/nextuLogo.webp"),
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
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Applied Data Science Lab",
      subtitle:
        "Learned and Implemented core concepts of Data Science from Basic to Advance",
      image: require("./assets/images/ads_badge.png"),
      imageAlt: "Applied Data Science Lab",
      footerLink: [
        {
          name: "Credly Badge",
          url: "https://www.credly.com/badges/e54b2401-b2b9-4b44-9f5e-a1f59702777d/public_url"
        },
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1aM0GBJZZOy6fMk7q3XOzyd9TqRy6r-pg/view?usp=sharing"
        }
      ]
    },
    {
      title: "IBM Data Science Specialization",
      subtitle:
        "Completed a series of 10 Courses comprised of advanced concepts and a Capstone Project",
      image: require("./assets/images/ibm_badge.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Capstone Project",
          url: "https://github.com/saadrasheeddev/IBM-Data-Science-Capstone"
        },
        {
          name: "Credly Badge",
          url: "https://www.credly.com/badges/822129a4-3cf6-4f65-ac76-671c7b996d81/public_url"
        },
        {
          name: "Certificate",
          url: "https://coursera.org/share/f624df220cbd0abf2514f6802387acf3"
        }
      ]
    }

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
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

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-3322468679",
  email_address: "saadrasheeddev@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
  isHireable,
  resumeSection
};
