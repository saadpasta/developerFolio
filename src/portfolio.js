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
  username: "Hamza Asjid",
  title: "Hi all, I'm Muhammad Hamza Asjid",
  subTitle: emoji(
    "Yo, meet your coding guru and the brains behind Team Meg Corporation, straight outta Pakistan! I'm the rebel dev who's got Google on speed dial. Crushing it with React JS, slaying Machine Learning dragons in Python, and Node Js? It bows down to my command. Oh, did I mention? I'm just a 17-year-old college student, proving that age is just a number in the digital cosmos. I'm not just a coder; I'm the swagger-filled commander of the digital universe. 🚀💻"
  ),
  resumeLink:
    "#", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Developed AI models reminiscent of MegAI, showcasing a mastery in the realm of artificial intelligence"
    ),
    emoji("⚡ Developed kick-ass APIs, leveling up the game for well-known industries in the coding arena"),
    emoji(
      "⚡ Incorporated human simulation with a coding twist, blending virtual and real-world dynamics seamlessly"
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
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Army Public School",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Completed Matriculation",
      duration: "September 2012 - April 2023",
      desc: "Steered clear of participation—let's just say that school isn't exactly my scene. 🚶‍♂️",
      descBullets: [
        "Navigated through school without much participation; my vibe is beyond the classroom walls.",
        "Chose to stay on the sidelines at school, my interests reaching far beyond its confines."
      ]
    },
    {
      schoolName: "Punjab Group of Colleges",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Currently Doing ICS",
      duration: "September 2023 - Now",
      desc: "Juggling priorities and struggling to make it to college – life's a bit of a balancing act right now. ⏳📚",
      descBullets: ["Yeah! Yar tune prh lia ha na college nahi jata itna ab aur kia janana tu ne⏳"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "NLP/Natural Process Learning", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Front/Backend Web Development",
      progressPercentage: "85%"
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
      role: "API Prov",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2023 – Present",
      desc: "Extending the reach of my AI APIs to Facebook, seamlessly weaving them into the intricate fabric of their Meta chatbots",
    
    },
    {
      role: "API Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "July 2023 – Sep 2023",
      desc: "Quora has also jumped on board, leveraging the prowess of my AI APIs to enhance and elevate the intelligence of their platform. It's a collaboration that's rewriting the rules of digital interaction. 🚀💬"
    },

    {
      role: "Dashboard Engineer",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2024 – Now",
      desc: "Recently joined forces with Airbnb, and now, donning the Google badge, I'm on a mission to revolutionize and uplift their AI Management Dashboard, pushing the boundaries of what's possible in the realm of digital innovation. 🌐✨ "
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
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Provided My Dashboard NLP APIs",
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
      projectDesc: "Helping them with my brain.js projects.",
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
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google's Cloud AI Engineer",
      subtitle:
        "First Google Cloud Remote Developer in Pakistan, currently working on the exciting Gemini Project. Out of 40 devs in the Google Remote team, I'm bringing innovation right from here. ",
      image: require("https://i.ibb.co/ctW1R30/msoss-0-1660232236133.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "#"
        },
        {
          name: "Award Letter",
          url: "#"
        },
        {
          name: "Google Cloud-Blog",
          url: "#"
        }
      ]
    },
    {
      title: "Google Bard Optimizer",
      subtitle:
        "Enhanced the capabilities of Google Bard AI by integrating my cutting-edge chatbot, MegAI, bringing a futuristic touch to the conversation game",
      image: require("https://i.ibb.co/GTBFkbp/images.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "#"
        }
      ]
    },

    {
      title: "OpenAI Contributer",
      subtitle: "Played a role in OpenAI's humor conversation by making my own unique contributions",
      image: require("https://i.ibb.co/sJRGX3C/Open-AI-Logo-svg.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "#"
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
      url: "#",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "#",
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
  subtitle: "Comming SOON!",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92 3071249630",
  email_address: "contacthamza@teammeg.online"
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
