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
  username: "Rutuja Gophane",
  title: "Cloud & DevOps Enthusiast",
  subTitle: emoji(
     I'm Rutuja Gophane, an aspiring Linux and DevOps Engineer passionate about cloud computing, automation, and open-source technologies. I am currently learning Linux, Git, GitHub, AWS, and DevOps tools while building hands-on projects and technical blogs. My goal is to develop practical skills in cloud and DevOps engineering and contribute to innovative technology solutions.),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rutujagophane",
  linkedin: "https://www.linkedin.com/rutuja-gophane",
  Hashnode:  "https://www.hashnode.com/rutujaa07"
  gmail: "gophanerutuja2@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Aspiring Linux & DevOps Engineer passionate about cloud computing, automation, and open-source technologies.",
  subTitle: "I am currently learning Linux, Git, GitHub, AWS, and DevOps tools while building hands-on projects and technical blogs. My goal is to grow as a Cloud and DevOps Engineer.",
  skills: [
    emoji(
      Linux Administration
✔️ Git & GitHub
✔️ Bash Scripting
✔️ AWS Fundamentals
✔️ Networking Basics
✔️ Technical Blogging
✔️ Problem Solving
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "AWS",
      fontAwesomeClassName: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassName: "fab fa-docker"
    },
    {
      skillName: "Linux",
      fontAwesomeClassName: "fab fa-linux"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Shivaji University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "June 2023 - april 2026",
      desc: "A modern Trendpack web project showcasing responsive design and frontend development skills.",
      descBullets: [
       " Studied Advanced Computer Networking protocols, network architecture, and security concepts."
​       "Gained hands-on experience in cloud deployment, virtualization, and Linux administration."
​       "Participated in workshops and completed technical lab assignments on Cisco Networking platforms.
      ]
    },
    
// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cloud Computing / AWS", 
      progressPercentage: "85%" 
    },
    {
      Stack: "Computer Networking", 
      progressPercentage: "80%" 
    },
    {
      Stack: "Programming & Linux", 
      progressPercentage: "75%" 
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF THE COOL PROJECTS DEVELOPED BY ME",
  projects: [
    {
      image: require("./assets/images/trendpacks.png"), 
      projectName: "Trendpacks E-commerce UI/UX",
      projectDesc: "A modern, premium retail e-commerce web platform designed for premium bags with a highly responsive user experience and clean checkout forms.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://your-trendpacks-link.vercel.app" 
        }
      ]
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

achievementsCards: [
    {
      title: "AWS Cloud Practitioner Essentials",
      subtitle: "Successfully completed the AWS Cloud Practitioner Essentials course, validating fundamental knowledge of cloud concepts, AWS services, security, architecture, and pricing models.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "AWS Cloud Practitioner Essentials Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.mindluster.com"
        }
      ]
    },
    {
      title: "Python and Artificial Intelligence Bootcamp",
      subtitle: "Successfully completed a 7-days intensive bootcamp on Python programming and Artificial Intelligence concepts, organized by DevTown in collaboration with Google Developer Student Clubs (GDSC KIIT Chapter) and AWS Community Builders.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Python and AI Bootcamp Certificate",
      footerLink: [
        {
          name: "Certificate of Completion",
          url: "https://cert.devtown.in/verify/1WJmeT"
        }
      ]
    },
    {
      title: "Python Programming Language",
      subtitle: "Completed a comprehensive course focusing on Python programming foundations, syntax, data structures, and foundational coding principles.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Python Programming Language Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.mindluster.com"
        }
      ]
    },
    {
      title: "Launched 'Linux Learning Hub' Blog",
      subtitle: "Authored and published technical content to help beginners understand operating system fundamentals. Featured post: 'Getting Started with Linux: Essential Commands Every Beginner Should Know' focused on Cloud and DevOps prerequisites.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Linux Learning Hub",
      footerLink: [
        {
          name: "Read Blog Post",
          url: "https://your-linux-hub-link.vercel.app"
        }
      ]
    }
  ]
// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogsCards: [
  {
    title: "Getting Started with Linux: Essential Commands Every Beginner Should Know",
    subtitle:
      "Linux is one of the most important operating systems used in Cloud Computing, DevOps, and software development. This guide covers foundational commands every beginner needs.",
    date: "Jan 15, 2026",
    readTime: "2 min read",
    image: require("./assets/images/linuxBlog.webp"), 
    imageAlt: "Linux Learning Hub Blog Post",
    url: "https://your-linux-hub-link.vercel.app" 
  }
]

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
  email_address: "gophanerutuja@gmail.com.com"
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
  isHireable,
  resumeSection
};
