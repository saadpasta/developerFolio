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
  username: "Sourabh Kumar",
  title: "Hi all, I'm Sourabh",
  subTitle: emoji(
    "A Tech Enthusiast | YouTuber | Software Developer  🚀 having an experience of building SaaS application with Python / Java / Go  and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1AMYOOvZ73Fl6eDGXV0sNxXT398i6RT9B/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Sourabh-Kumar7",
  linkedin: "https://www.linkedin.com/in/sourabhkumar08/",
  gmail: "sourabh7.tech@gmail.com",
  gitlab: "https://gitlab.com/Sourabh-Kumar7",
  // facebook: "https://www.facebook.com/sourabhkumar",
  medium: "https://medium.com/@sourabhkr",
  stackoverflow: "https://stackoverflow.com/users/23549941/sourabh-kumar",
  youtube: "https://www.youtube.com/@PairProgramming101",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A TECH ENTHUSIAST WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Backend Development (C, C++, Java, Python, Go, Scala)"), // Lists all your backend languages
    emoji("⚡ Algorithm Design & Optimization"), // Added this line for your algorithm skills
    emoji("⚡ Open Source Enthusiast (Reading & Contributing)"),
    emoji("⚡ Integration Specialist (AWS, GCP, DigitalOcean)"), // Kept integration skills
    emoji("⚡ Familiar with Frontend Technologies (HTML, CSS, JavaScript)") // Added frontend familiarity
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "c++",
      fontAwesomeClassname: "fab fa-cplusplus"
    },
    {
      skillName: "c",
      fontAwesomeClassname: "fab fa-c"
    },
    {
      skillName: "golang",
      fontAwesomeClassname: "fab fa-go"
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
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
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
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "terraform",
      fontAwesomeClassname: "fab fa-terraform" // Consider using a Terraform icon if available
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Northeastern University",
      logo: require("./assets/images/northeasternLogo.jpg"),
      subHeader: "Master of Science in Information Systems",
      duration: "August 2023 - Present",
      desc: "Diving into cloud computing and advanced system design, honing expertise in cutting-edge technologies.",
      descBullets: [
        "Attained top academic standing in the inaugural semester, demonstrating commitment to excellence.",
        "Fostered a culture of collaborative learning by organizing engaging Fun-Leetcode sessions..",
        "Guided peers in mastering Git for streamlined teamwork and efficient project management."
      ]
    },
    {
      schoolName: "Savitribai Phule Pune University",
      logo: require("./assets/images/sppuLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Explored a comprehensive curriculum encompassing Software Engineering, Networking, Object-Oriented Programming, and Data Structures and Algorithms.",
      descBullets: [
        "Served as head of the coding cell for 2 years, guiding over 200 students in competitive programming.",
        "Secured the runner-up position in Debug-Time, an intercollegiate coding event organized by AIT.",
        "Excelled in table tennis and volleyball, earning the title of Best Sports Person (Junior) in the first year."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "65%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
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
      role: "Software Engineer",
      company: "",
      companylogo: require("./assets/images/druvaLogo.jpg"),
      date: "Aug 2021 – Jul 2023",
      desc: "",
      descBullets: [
        "Designed and developed a microservices for backups and restorations of Microsoft Group, SharePoint, Teams data using Phalcon.",
        "Organized 15+ sessions on Test-Driven Development (TDD), BDD, and Microservices Architecture.",
        "Led vulnerability identification efforts using Snyk tool and rectified vulnerabilities in multiple services.",
        "Developed a pip-installable state machine library utilized by 10+ microservices.",
        "Successfully resolved complex customer escalations, reducing issue count to 2-3 per month within 3 months.",
        "Reviewed and provided insights on over 50 merge requests, ensuring code quality and promoting collaboration."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "",
      companylogo: require("./assets/images/pubmaticLogo.jpeg"),
      date: "Apr 2021 – Jun 2021",
      desc: "",
      descBullets: [
        "Crafted a centralized service streamlining the deployment of ad server code across test servers. This service also automates the retrieval of essential information from ad servers, effectively reducing 20% manual verification time for team members.",
        "Explored techniques for crafting personalized automated services utilizing the Ansible Runner library in tandem with Python."
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
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Druva All Stars Award",
      subtitle:
        "Received award for excellence on the Planner App and consistently resolving complex customer escalations with exceptional solutions.",
      image: require("./assets/images/DruvaAward.png"),
      imageAlt: "All-Stars Award Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/posts/sourabhkumar08_druva-latepost-activity-7065239752148475904-7ria?utm_source=share&utm_medium=member_desktop"
        }
      ]
    },
    {
      title: "Postman API Fundamentals Student Expert",
      subtitle:
        "Completed Certification from Postman for API Fundamentals Expert",
      image: require("./assets/images/PostmanStudentExpert.png"),
      imageAlt: "Postman Student Expert Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://badgr.com/public/assertions/hLWWWJBbSI-Jb8cHOgfC5g?identity__email=kumar.sou@northeastern.edu"
        },
        {
          name: "Blog",
          url: "https://www.linkedin.com/posts/sourabhkumar08_postmanapi-studentexpert-apifundamentals-activity-7144431476959313920-_2gI?utm_source=share&utm_medium=member_desktop"
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
      url: "https://medium.com/@sourabhkr/the-power-of-many-how-distributed-systems-make-our-lives-easier-89dfaff8a08f",
      title: "The Power of Many: How Distributed Systems Make Our Lives Easier",
      description:
        "Distributed systems are the invisible heroes powering the digital world. They work behind the scenes, keeping things fast, reliable, and ever-growing. "
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
      title: "Build and Deploy Loadbalancer for serverless Applicatino",
      subtitle: "Event name with place",
      slides_url: "https://bit.ly/sk-slides",
      event_url: "https://www.facebook.com/events/12334545/"
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
    "https://podcasters.spotify.com/pod/show/sourabhk/episodes/Podcast-1--Url-Shortener-System-Design-with-Sneha-e2h7i18"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-0000000000",
  email_address: "sourabh7.tech@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "sourabh7kr", //Replace "twitter" with your twitter username without @
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
  isHireable
};
