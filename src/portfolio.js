
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Bradley Herrin",
  title: "Bradley C. Herrin",
  subTitle: "North Carolina State University Computer Science Alumni.  IBM Master Inventor.  A Software Engineer responsible for hosting large Enterprise Web Applications, building DevOps Pipelines, and leading CyberSecurity/Compliance programs."
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/bradleycherrin",
  linkedin: "https://www.linkedin.com/in/bradleycherrin1/",
  //twitter: "https://twitter.com/bradleycherrin",
  medium: "https://www.medium.com/@bradleycherrin",
  stackoverflow: "https://stackoverflow.com/users/9061047/bradley-c-herrin"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "Keyboard Equity...",
  subTitle: "Languages, Tools, Systems",
  skills: [
    emoji("⚡ Develop highly available Continuous Integration/Deployment pipelines"),
    emoji("⚡ SRE Building for 99.9999 availability"),
    emoji("⚡ Develop software integrations that meet ISO 27k/FEDRAMP requirements"),
    emoji("⚡ Infrastructure as code all day everyday"),
    emoji("⚡ Python")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  programmingSkills: [
    {
      skillName: "ansible",
      fontAwesomeClassname: "fab fa-adn"
    },
    {
      skillName: "bash",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "groovy",
      fontAwesomeClassname: "fas fa-code"
    },
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
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
  ],

  softwareTools: [
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "IBM cloud",
      fontAwesomeClassname: "fa fa-cloud"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

//const techStack = {
//  viewSkillBars: true, //Set it to true to show Proficiency Section
//  experience: [
//    {
//      Stack: "DevOps",  //Insert stack or technology you have experience in
//      progressPercentage: "90%"  //Insert relative proficiency in percentage
//    },
//    {
//      Stack: "Backend",
//      progressPercentage: "70%"
//    },
//    {
//      Stack: "Programming",
//      progressPercentage: "60%"
//    }
//  ]
//};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "IBM Cloud - Senior Software Engineer",
      company: "IBM",
      companylogo: require("./assets/images/ibmLogoNew.png"),
      date: "November 2018 – Present",
      desc: "Architecture, Software Engineering, DevOps, Site Reliability Engineering, Security for IBM Internal Software Tools and CI/CD Systems worldwide. We build systems at scale with 24x7x365 reliability. Working with rockstar Software & Site Reliability Engineers.",
      descBullets: [
        "Building, Hosting, Running the IBM CI/CD Delivery Pipeline around the Globe",
        "Focused on four 9s of availabilty with 100s in sight",
        "Working with IBM Cloud SRE Platform and DevOps Services teams"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "bradleycherrin", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Awards and Achievements 🏆 "),
  subtitle: "Awards and Achievements from the hard work over the years!",

  achivementsCards: [
    {
      title: "NC State Computer Science Outstanding Young Alumni Award",
      subtitle: "Professional Achievement (e.g. senior leadership, strategic impact, technical innovation, etc.), Entrepreneurship (e.g. business founder, industry disruption, economic stimulation, etc.), Community and/or Public Service (e.g. United Way, Red Cross, Habitat for Humanity, etc.), Service to the Computer Science Discipline (e.g. research, patents, technical publications, books, special recognition by professional organizations such as ACM or IEEE, etc.)",
      image: require("./assets/images/nc-state.png"),
      footerLink: [
        { name: "2019 Award", url: "https://www.csc.ncsu.edu/news/2275" }
      ]
    },
    {
      title: "IBM Master Inventor Award",
      subtitle: "The Master inventor badge is given to employees who have mastered the patent process, mentored broadly, added value to IBM's portfolio and demonstrated sustained innovation leadership and service.",
      image: require("./assets/images/master-inventor.png"),
      footerLink: [
        { name: "2018 Award", url: "https://www.youracclaim.com/badges/f71bd0b7-3f92-4377-81ad-66e0c125667c/embedded" },
        { name: "Information", url: "https://en.wikipedia.org/wiki/IBM_Master_Inventor"}
      ]
    },
    {
      title: "The President's Volunteer Service Award",
      subtitle: "The President’s Volunteer Service Award recognizes individuals, families, and groups that have achieved a certain standard – measured by the number of hours of service during a 12-month period or cumulative hours earned over the course of a lifetime.  Awards are given to youth ages 14 and under who have completed 50 or more hours of volunteer service; to individuals 15 and older who have completed 100 or more hours; and to families or groups who have completed 200 or more hours. Lifetime achievement is recognized with a special President's Call to Service Award, which honors those who have provided more than 4,000 hours of service during the course of their lifetime.",
      image: require("./assets/images/cncs_white1.png"),
      footerLink: [
        { name: "2014 Award", url: "https://www.nationalservice.gov/special-initiatives/presidents-volunteer-service-award" },
        { name: "Information", url: "https://www.nationalservice.gov/special-initiatives/presidents-volunteer-service-award" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs/Publishings",
  subtitle: "My Publishings from throughout my Software Engineering experiences",

  blogs: [
    {
      url: "https://www.ibm.com/devops/method/experience/code/bradley_herrin_jenkins_for_building_bluemix_services",
      title: "Building Bluemix and Cloud Foundation Services by using Jenkins published by IBM",
      description: "Deploying to IBM Cloud with Jenkins"
    },
    {
      url: "http://research.microsoft.com/pubs/146635/parnin2011jga.pdf",
      title: "Java Generics Adoption: How New Features are Introduced, Championed, or Ignored published by ACM & Microsoft",
      description: "Proceedings of the International Working Conference on Mining Software Repositories.  Report on the first empirical investigation into how Java generics have been integrated into open source software by automatically mining the history of 20 popular open source Java programs, traversing more than 500 million lines of code in the process"
    }
  ]
};


// Patents Sections

const patentsSection = {
  title: "Patents",
  subtitle: emoji("To invent, you need a good imagination and a pile of junk. — Thomas A. Edison 💡"),

  patents: [
    {
      url: "http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=0&f=S&l=50&TERM1=Herrin-Bradley-C&FIELD1=&co1=AND&TERM2=&FIELD2=&d=PG01",
      title: "PreGrant Patent Applications",
      description: "Waiting on a number..."
    },
    {
      url: "http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=0&f=S&l=50&TERM1=Herrin-Bradley-C&FIELD1=INNM&co1=AND&TERM2=&FIELD2=&d=PTXT",
      title: "Granted Patent Applications",
      description: "Issued Patents"
    }
  ]
};

const contactInfo = {
  title: "Contact Me",
  subtitle: "LinkedIn is the best way to reach me",
};

//Twitter Section

const twitterDetails = {

  userName : "bradleycherrin"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, workExperiences, openSource, achievementSection, blogSection, patentsSection, contactInfo, twitterDetails};
