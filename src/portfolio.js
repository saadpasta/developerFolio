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
  username: "Thomas Fallon",
  title: "Hi all, I'm Thomas",
  subTitle: emoji(
    "A passionate, reliable Front-End Software Engineer at DepositLink 🚀 Having experience building Web and Mobile applications with HTML5 / CSS / SASS / Bootstrap / ASP.NET / Blazor / JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1PsmURmY97-W9g-5HzwAX-vm3Y3h_ytWNPB3Rhcm-AIw/edit", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/TomFallon9",
  linkedin: "https://www.linkedin.com/in/thomas-fallon9/",
  gmail: "TomFallon9@gmail.com",
  facebook: "https://www.facebook.com/tom.fallon.5",
 
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do...",
  subTitle: "",
  skills: [
    emoji(
      "⚡  Front-End Lead at DepositLink."
    ),
    emoji(
      "⚡  Create beautiful consumer-facing products that are interacted with by over 22,000 Users per month!"
    ),
    emoji("⚡ Build reusable code and libraries for future use."),
    emoji("⚡ Ensure the technical feasibility of UI/UX designs."),
    emoji(
      "⚡ Optimize application for maximum speed and scalability."
    ),
    emoji(
      "⚡ Customized design & experience for some the leading names in the real estate-industry."
    ),
    emoji(
      "⚡ Apply and understand SEO principles."
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
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-microsoft"
    }  
  ],
  display: true // Set false to hide this section, defaults to true
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "HTML / CSS / SASS / JavaScript / React", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Accessibility/Semantic Markup",
      progressPercentage: "100%"
    },
    {
      Stack: "Agile/Scrum", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Communication/Team Player",
      progressPercentage: "100%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "UI/UX Engineer",
      company: "DepositLink",
      companylogo: require("./assets/images/dllogo.png"),
      date: "Present",
      desc: " ",
      descBullets: [
        "Build out functional, appealing web and mobile-based components based on usability and visual aesthetics.",
        "Owned and driven the development of complex projects and feature areas.",
        "Contribute to the setting of high performance, front-end frameworks and standards across the application.",
        "Provide website maintenance, bug fixing, and enhancements.",
        "Attend daily stand-up with engineering teams across the globe.",
        "Mentor and assign tasks to other front-end developers on the team."

      ]
    },
    {
      role: "Senior Records Analyst",
      company: "Worcester Registry of Deeds",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false// Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects/Features",
  subtitle: "",
  projects: [
    
    {
      image: require("./assets/images/dlpaypink.png"),
      projectName: "DepositLink Pay",
      projectDesc: "Customized Instant Pay Feature. The industry leading easiest way to make a digital real-estate transaction. Developed the entire front end for the newly launched product. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://demo.depositlink.com/pay/mac-jones"
        }
      ]
    },
    {
      image: require("./assets/images/depositlink1.png"),
      projectName: "DepositLink UI/UX Overhaul",
      projectDesc: "UI/UX Overhaul. Completely rebuilt Tables, Forms, Buttons, Icons, Images, Layout, Dropdowns, Videos, Logos, and overall experience.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://demo.depositlink.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/paymarket.png"),
      projectName: "Marketing Homepage",
      projectDesc: "Marketing for DL-Pay. All of the details for the workflow and streamlined experience of the newly launched products for Agents and Title Companies.                  ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://demo.depositlink.com/pay/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/title.png"),
      projectName: "Inman Connect Email",
      projectDesc: "Featured Marketing HTML Email / Webpage at Inman Connect ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://demo.depositlink.com/"
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
  title: emoji("Press Releases/News 📰"),
  subtitle:
    "Some of the work I've done featured in articles, news outlets, marketing videos and case studies. Check it out!!",

  achievementsCards: [
    {
      title: "DepositLink Pay for Title Co.",
      subtitle:
        "DepositLink Pay provides brokers and title companies with an easy way to eliminate paper checks",
      image: require("./assets/images/images.png"),
      footerLink: [
        {
          name: "View Article",
          url: "https://www.yahoo.com/now/depositlink-pay-provides-brokers-title-150400207.html"
        }
      ]
    },
    {
      title: "DepositLink Pay for Agents",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/images.png"),
      footerLink: [
        {
          name: "View Article",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "DepositLink Growth 2022",
      subtitle: "Dramatic Growth at DepositLink for  2022",
      image: require("./assets/images/images.png"),
      footerLink: [
        {name: "View Article", url: ""}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Press Releases/News",
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
  display:false // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of New Hampshire",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Full-Stack Web Development Certificate",
      duration: "",
      desc: "",
      descBullets: [
        
      ]
    },
    {
      schoolName: "Worcester State University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Urban Studies",
      duration: "",
      desc: "",
      descBullets: []
    }
  ]
};


// Podcast Section

const podcastSection = {
  title: emoji("fantastic 🏙️"),
  subtitle: "A little music I enjoy while coding 🎷 🎧  Thanks for stopping by! ",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://www.youtube.com/embed/H89A4Z6HiFs?autoplay=1"  
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "1-508-596-0900",
  email_address: "TomFallon9@gmail.com"
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
  blogSection,
  podcastSection,
  contactInfo,
 
};
