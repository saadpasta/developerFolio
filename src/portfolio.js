/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file

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
  title: "Hi all, I'm Rutuja",
  subTitle: emoji(
    "A passionate Cloud and DevOps Engineer passionate about cloud computing, automation, and open-source technologies. Git, GitHub, AWS, and DevOps tools while building responsive frontends."
  ),
  resumeLink: "https://drive.google.com/file/d/137YKoYvZw6woG-U04RMp4rG-UEox8v_T/view?usp=drivesdk", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/rutujagophane",
  linkedin: "https://www.linkedin.com/in/rutuja-gophane",
  gmail: "gofanerutuja2@gmail.com",
  hashnode: "https://hashnode.com/rutuja07",
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  const: skillsSection = {
    title: "What I Do",
    subTitle: "ASPIRING CLOUD INFRASTRUCTURE & DEVOPS ENGINEER",
    skills: [
      emoji(
        "⚡ Studying cloud environment essentials (AWS), system automation, and Linux administration principles"
      ),
      emoji(
        "⚡ Configuring basic network architectures, understanding routing protocols, and throughput concepts"
      ),
      emoji(
        "⚡ Developing responsive frontend interfaces and web application layouts using C, C++, and Python"
      ),
      emoji(
        "⚡ Managing structured data grids and foundational analysis workflows using SQL"
      )
    ],
    softwareSkills: [
      {
        skillName: "C",
        fontAwesomeClassName: "fab fa-cuttlefish"
      },
      {
        skillName: "C++",
        fontAwesomeClassName: "fab fa-cuttlefish"
      },
      {
        skillName: "Python",
        fontAwesomeClassName: "fab fa-python"
      },
      {
        skillName: "Linux",
        fontAwesomeClassName: "fab fa-linux"
      },
      {
        skillName: "AWS",
        fontAwesomeClassName: "fab fa-aws"
      },
      {
        skillName: "SQL",
        fontAwesomeClassName: "fas fa-database"
      }
    ],
    display: true
  }
};

/* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Shivaji University, Kolhapur",
      logo: "https://upload.wikimedia.org/wikipedia/en/b/b2/Shivaji_University_logo.png",
      subHeader: "Bachelor of Computer Science",
      duration: "June 2023 - April 2026",
      desc: "Graduated with a focus on core software fundamentals, networking, and application logic. Achieved CGPA: 8.85 (Grade: A).",
      descBullets: [
        "Acquired foundational programming skills in C, C++, Python, and Linux.",
        "Studied comprehensive network architectures and basic database management using SQL."
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

// Work Experience Section (Added placeholder to prevent export error)
const workExperiences = {
  display: false,
  experience: []
};

// Some big projects you have worked on
const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME LOCAL AND ACADEMIC PROJECTS DEVELOPED DURING GRADUATION",
  projects: [
    {
      title: "TRENDPACKS - Shopping Website",
      subtitle: "E-Commerce Web Application (Final Year Project)",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", 
      description: "Developed a comprehensive and user-friendly e-commerce shopping website as a final year graduation project. Implemented efficient product lists.",
      softwareSkills: [
        {
          skillName: "ASP.NET",
          fontAwesomeClassName: "fab fa-microsoft"
        },
        {
          skillName: "C#",
          fontAwesomeClassName: "fas fa-code"
        },
        {
          skillName: "HTML5",
          fontAwesomeClassName: "fab fa-html5"
        },
        {
          skillName: "CSS3",
          fontAwesomeClassName: "fab fa-css3-alt"
        },
        {
          skillName: "SQL Server",
          fontAwesomeClassName: "fas fa-database"
        }
      ],
      footerLink: [
        {
          name: "Project Stack: ASP.NET",
          url: "https://github.com/rutujagophane",
          icon: "fab fa-github"
        }
      ],
      display: true
    }
  ]
};

// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: "Achievements & Certifications 🏆",
  subtitle: "TECHNICAL QUALIFICATIONS AND VERIFIED TRAINING BENCHMARKS",
  achievementsCards: [
    {
      title: "AWS Cloud Practitioner Essentials",
      subtitle: "Successfully completed formal training validating foundational knowledge of cloud concepts, AWS services, security, architecture, and pricing models.",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Amazon_Web_Services_Logo.svg",
      imageAlt: "AWS Cloud Practitioner Essentials Certificate",
      footerLink: [{ name: "Certification Details", url: "https://www.mindluster.com" }]
    },
    {
      title: "Python Programming Language",
      subtitle: "Verified competency in core Python scripting methodology, syntax structure, data blocks, and foundational automation scripts.",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      imageAlt: "Python Programming Certificate",
      footerLink: [{ name: "Certificate of Completion", url: "https://cert.devtown.in/verify/1WJmeT" }]
    },
    {
      title: "MS Excel",
      subtitle: "Gained structural hands-on expertise in data organization matrices, formula executions, and spreadsheet reporting models.",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Excel_2013_logo_PNG.png",
      imageAlt: "MS Excel Certification",
      footerLink: [{ name: "Verification", url: "https://www.mindluster.com" }]
    }
  ],
  display: true
};

// Blogs Section
const blogSection = {
  title: "Blogs ✍️",
  subtitle: "SHARING TECHNICAL NOTES, CLOUD INSIGHTS, AND LINUX DISCOVERIES",
  blogs: [
    {
      url: "https://github.com/rutujagophane",
      title: "Introduction to Cloud Infrastructures",
      description: "A quick technical guide capturing standard foundational notes on cloud scaling, server roles, and automated deployments."
    },
    {
      url: "https://github.com/rutujagophane",
      title: "Getting Started with Linux Administration",
      description: "Documenting essential terminal configurations, file permissions, and directory controls vital for systems architecture."
    }
  ],
  display: true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

// Contact Section
const contactInfo = {
  title: emoji("Contact Me 📬"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9423000000",
  email_address: "gophanerutuja2@gmail.com"
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
