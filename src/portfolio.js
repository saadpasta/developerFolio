/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Julius Bartolome",
  title: "Hi all, I'm Julius",
  subTitle: emoji(
          "A passionate Full Stack Software Developer 🚀 having an experience of building Automation workflows, Web applications, and Cloud infrastructure  with .NET / JavaScript / Reactjs / Nodejs / Python / Docker / Kubernetes and some other cool libraries and frameworks."
  ),
//  resumeLink:
//    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/juliusbartolome",
  linkedin: "https://www.linkedin.com/in/juliusbartolome/",
  gmail: "juliusbartolome14@gmail.com",
  facebook: "https://www.facebook.com/juliusphilipbartolome",
  stackoverflow: "https://stackoverflow.com/users/3140305/juliusbartolome",
  //  medium: "https://medium.com/@saadpasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO BUILD SOFTWARE THAT MAKES AN IMPACT ON OTHERS LIVES",
  skills: [
    emoji("⚡ Develop efficient and highly scalable apps"),
    emoji("⚡ Certified DevOps Engineer for your CI/CD needs"),
    emoji("⚡ Third-party Service integrations"),
    emoji("⚡ Automate workflows with latest tools available in the market"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "gcp",
      fontAwesomeClassname: "fab fa-google"
    },
    {
        skillName: "nodejs",
        fontAwesomeClassname: "fab fa-node"
    },
    {
        skillName: "python",
        fontAwesomeClassname: "fab fa-python"
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
        skillName: "windows",
        fontAwesomeClassname: "fab fa-windows"
    },
    {
        skillName: "mac",
        fontAwesomeClassname: "fab fa-apple"
    },
    {
        skillName: "linux",
        fontAwesomeClassname: "fab fa-linux"
    },
    {
        skillName: "ubuntu",
        fontAwesomeClassname: "fab fa-ubuntu"
    },
    {
        skillName: "rhel",
        fontAwesomeClassname: "fab fa-redhat"
    },
    {
        skillName: "jenkins",
        fontAwesomeClassname: "fab fa-jenkins"
    },
    {
        skillName: "docker",
        fontAwesomeClassname: "fab fa-docker"
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
        skillName: "angular",
        fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
        skillName: "markdown",
        fontAwesomeClassname: "fab fa-markdown"
    },
    {
        skillName: "git",
        fontAwesomeClassname: "fab fa-git"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "St. John Technological College of the Philippines",
      logo: require("./assets/images/sjtcpLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "June 2009 - March 2013",
      desc: "Participated in the research of Grading System Web App for our own school to improve transparency and trust.",
      descBullets: [
        "Best in Programming 2013 Award"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Workflow Automation",
      progressPercentage: "90%"
    },
    {
        Stack: "Cloud Development",
        progressPercentage: "85%"
    },
    {
        Stack: "Frontend Development", //Insert stack or technology you have experience in
        progressPercentage: "70%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements and Certifications 🏆 "),
  subtitle:
    "Achievements,Certifications and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "DevOps Engineer Expert",
      subtitle: "Earning the DevOps Engineer Expert certification demonstrates the ability to combine people, process, and technologies to continuously deliver valuable products and services that meet end user needs and business objectives. DevOps professionals streamline delivery by optimizing practices, improving communications and collaboration, and creating automation.",
      image: require("./assets/images/msDevopsEngineerExpert.webp"),
      imageAlt: "Microsoft Certified: DevOps Engineer Expert",
      footerLink: [
        {
          name: "Certification",
            url: "https://www.credly.com/badges/81b071f0-ca78-4e9b-97ab-c06000869dd1/public_url"
        }
      ]
    },
    {
      title: "Azure Developer Associate",
      subtitle: "Earning Azure Developer Associate certification validates the skills and knowledge to design, build, test, and maintain cloud applications and services on Microsoft Azure. Candidates participate in all phases of cloud development from requirements definition and design, to development, deployment, and maintenance.",
      image: require("./assets/images/msAzureDeveloperAssociate.webp"),
      imageAlt: "Microsoft Certified: Azure Developer Associate",
      footerLink: [
        {
          name: "Certification",
            url: "https://www.credly.com/badges/6b5a1236-0fe0-488e-abc6-8caaea7e5695/public_url"
        }
      ]
    },
    {
      title: "MCSA: Web Applications",
      subtitle: "Earners of the MCSA: Web Applications certification have demonstrated the skills required to implement modern web apps. They are qualified for a position as a web developer or web administrator.",
      image: require("./assets/images/mcsaWebApplications.webp"),
      imageAlt: "MCSA: Web Applications",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/da952cb9-db27-4edb-9246-c1768329d687/public_url"
        }
      ]
    },
    {
        title: "MCSA: SQL 2016 Database Development",
        subtitle: "Earners of the MCSA: SQL 2016 Database Development certification have demonstrated the skills required to build and implement databases across organizations. They are qualified for a position as a database developer.",
        image: require("./assets/images/mcsaSql2016DatabaseDevelopment.webp"),
        imageAlt: "MCSA: SQL 2016 Database Development",
        footerLink: [
            {
                name: "Certification",
                url: "https://www.credly.com/badges/d442df59-05be-43ef-a196-43b1b92b4076/public_url"
            }
        ]
    },
    {
        title: "Certified SAFe® 4 Practitioner",
        subtitle: "A Certified SAFe 4 Practitioner (SP) is a SAFe team member professional responsible for using Scrum, Kanban, and XP in a SAFe environment. Key areas of responsibility include planning Program Increments and iterations, breaking requirements into stories, developing incrementally with built-in quality, demoing value at a team and program level, and problem solving impediments to drive relentless improvement.",
        image: require("./assets/images/certifiedSafe4Practitioner.webp"),
        imageAlt: "Certified SAFe® 4 Practitioner",
        footerLink: [
            {
                name: "Certification",
                url: "https://www.credly.com/badges/3f6a7b8c-4ca2-43ee-acaa-01a60548fc8b/public_url"
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
  number: "+63 999 492 3605",
  email_address: "juliusbartolome@hotmail.ph"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
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
