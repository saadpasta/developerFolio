
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
  twitter: "https://twitter.com/bradleycherrin",
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
        "Working with IBM Cloud CTO Office"
      ]
    },
    {
      role: "IBM Watson Financial Services - Senior Software Engineer",  
      company: "IBM",
      companylogo: require("./assets/images/ibmLogoNew.png"),
      date: "June 2017 – November 2018",
      desc: "I lead the portfolio development efforts with focus on product development, architectures, technical implementation of security & compliance strategy, Agile leadership & culture, and DevOps engineering.",
      descBullets: [
        "Working with IBM Watson CSO Office",
        "Heavy focus on Industry Security/Compliance influence in Software design for Financial regulated products worldwide"
      ]
    },
    {
      role: "Visiting Lecturer",  
      company: "NCSU",
      companylogo: require("./assets/images/nc-state.png"),
      date: "August 2017 – August 2018",
      desc: "Guest Speaker at North Carolina State University Computer Science Graduate School",
      descBullets: [
        "DevOps Talks at the CSC Graduate DevOps Course",
        "AI Challenges and AI Ops in Financial Services at CSC and Statisitics Graduate Courses"
      ]
    },
    {
      role: "IBM Watson & Cloud Platform - Senior Software Engineer",  
      company: "IBM",
      companylogo: require("./assets/images/ibmLogoNew.png"),
      date: "July 2015 – June 2017",
      desc: "Architecture, Software Engineering, DevOps, Site Reliability Engineering, Security for IBM Internal Software Tools and CI/CD Systems worldwide. We build systems at scale with 24x7x365 reliability. Working with rockstar Software & Site Reliability Engineers.",
      descBullets: [
        "Building, Hosting, Running the IBM CI/CD Delivery Pipeline around the Globe",
        "Focused on four 9s of availabilty with 100s in sight",
        "Working with IBM Cloud CTO Office"
      ]
    },
    {
      role: "IBM Systems - Advisory Software Engineer",  
      company: "IBM",
      companylogo: require("./assets/images/ibmLogoNew.png"),
      date: "November 2013 – July 2015",
      desc: "Architecture, Software Engineering, DevOps for IBM Systems organization worldwide",
      descBullets: [
        "Lead Software Engineering DevOps Pipeline efforts for IBM Systems",
        "Lead development/design with Aerospace and Defense companies for DevOps architectures and solutions in air gap lab scenarios",
      ]
    },
    {
      role: "IBM Systems - Staff Software Engineer",  
      company: "IBM",
      companylogo: require("./assets/images/ibmLogoNew.png"),
      date: "November 2012 – October 2013",
      desc: "Python Automation framework development, Architecture, Software Engineering, DevOps for IBM Systems organization worldwide",
      descBullets: [
        "Embedding enterprise software into pre-baked patterns for rapid deployments in private network racks",
        "Python Automation framework development",
        "Regulated industry customer development and design consulting for CI/CD frameworks"
      ]
    },
    {
      role: "IBM Systems - Software Engineer",  
      company: "IBM",
      companylogo: require("./assets/images/ibmLogoNew.png"),
      date: "May 2011 – November 2012",
      desc: "Python Automation framework development, Software Engineering, DevOps for IBM Systems organization worldwide",
      descBullets: [
        "Python Automation framework development",
        "CI/CD Automation development"
      ]
    },
    {
      role: "Open Source Research Assistant",  
      company: "NCSU",
      companylogo: require("./assets/images/nc-state.png"),
      date: "January 2010 – May 2011",
      desc: "Undergraduate Computer Science Research Assistant at North Carolina State University",
      descBullets: [
        "Served as an Undergraduate Research Assistant contributor to java generics analysis tools.",
        "Provided theoretical analysis and plugin development for statistical collection of java generics in large open source software projects."
      ]
    },
    {
      role: "IBM Systems - Student Intern Software Engineer",  
      company: "IBM",
      companylogo: require("./assets/images/ibmLogoNew.png"),
      date: "January 2009 – May 2011",
      desc: "Lead developer on deployment framework for IBM Systems teams and introduced DevOps concepts to organization through CI tools and workflows",
      descBullets: [
        "Python Automation framework development",
        "CI/CD Automation development"
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
      title: "Jenkins Engineer Certification",
      subtitle: "This certificate confirms that the recipient has successfully passed the Jenkins Engineer exam.",
      image: require("./assets/images/jenkins.jpg"),
      footerLink: [
        { name: "Certification", url: "https://certificates.cloudbees.com/31225cb4-d3b7-4f2e-ae41-f376aeb0fe91#gs.c78138" },
        { name: "Information", url: "www.cloudbees.com/jenkins-certification"}
      ]
    },
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
      title: "IBM Eminence and Excellence Award",
      subtitle: "Senior Management award for relentless reinvention across the business",
      image: require("./assets/images/ibmLogo.png"),
      footerLink: [
        { name: "2017 Award", url: "https://www.ibm.com" }
      ]
    },
    {
      title: "IBM Manager's Choice Award",
      subtitle: "Senior Management Choice for Outstanding Employee Contributions.  Awarded to individuals who go above and beyond for bringing value to the business.",
      image: require("./assets/images/ibmLogo.png"),
      footerLink: [
        { name: "2017 Award", url: "https://www.ibm.com" }
      ]
    },
    {
      title: "The President's Volunteer Service Award",
      subtitle: "The President’s Volunteer Service Award recognizes individuals, families, and groups that have achieved a certain standard – measured by the number of hours of service during a 12-month period or cumulative hours earned over the course of a lifetime.  Awards are given to youth ages 14 and under who have completed 50 or more hours of volunteer service; to individuals 15 and older who have completed 100 or more hours; and to families or groups who have completed 200 or more hours. Lifetime achievement is recognized with a special President's Call to Service Award, which honors those who have provided more than 4,000 hours of service during the course of their lifetime.",
      image: require("./assets/images/cncs_white1.jpg"),
      footerLink: [
        { name: "2014 Award", url: "https://www.nationalservice.gov/special-initiatives/presidents-volunteer-service-award" },
        { name: "Information", url: "https://www.nationalservice.gov/special-initiatives/presidents-volunteer-service-award" }
      ]
    },
    {
      title: "IBM Manager's Choice Award",
      subtitle: "Senior Management Choice for Outstanding Employee Contributions.  Awarded to individuals who go above and beyond for bringing value to the business.",
      image: require("./assets/images/ibmLogo.png"),
      footerLink: [
        { name: "2014 Award", url: "https://www.ibm.com" }
      ]
    },
    {
      title: "IBM Top Contributor Award",
      subtitle: "Senior Management recognition as a Top Contributor ranking in the Top 5% of the Global Workforce.",
      image: require("./assets/images/ibmLogo.png"),
      footerLink: [
        { name: "2013 Award", url: "https://www.ibm.com" }
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
      url: "http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=10671647.PN.&OS=PN/10223075=PN/10671647",
      title: "System and method to identify, gather, and detect reusable digital assets",
      description: "Patent No. 10,671,647"
    },
    {
      url: "http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=10628461.PN.&OS=PN/10223075=PN/10628461",
      title: "System and method to identify, gather, and detect reusable digital assets",
      description: "Patent No. 10,628,461"
    },
    {
      url: "http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=10565093.PN.&OS=PN/10565093=PN/10565093",
      title: "Providing cognitive intelligence across continuous delivery pipeline data",
      description: "Patent No. 10,565,093"
    },
    {
      url: "http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=10334110.PN.&OS=PN/10334110=PN/10334110",
      title: "Managing, monitoring and transcribing concurrent meetings and/or conference calls",
      description: "Patent No. 10,334,110"
    },
    {
      url: "http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=10223075.PN.&OS=PN/10223075=PN/10223075",
      title: "Development community assessment via real-time workspace monitoring",
      description: "Patent No. 10,223,075"
    },
    {
      url: "http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=10042744.PN.&OS=PN/10042744=PN/10042744",
      title: "Adopting an existing automation script to a new framework",
      description: "Patent No. 10,042,744"
    },
    {
      url: "http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=9652225.PN.&OS=PN/9652225=PN/9652225",
      title: "Development community assessment via real-time workspace monitoring",
      description: "Patent No. 9,652,225"
    },
    {
      url: "http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=9411711.PN.&OS=PN/9411711=PN/9411711",
      title: "Adopting an existing automation script to a new framework",
      description: "Patent No. 9,411,711"
    },
    {
      url: "http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=9378122.PN.&OS=PN/9378122=PN/9378122",
      title: "Adopting an existing automation script to a new framework",
      description: "Patent No. 9,378,122"
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
export { greeting, socialMediaLinks, skillsSection, workExperiences, openSource, achievementSection, blogSection, patentsSection, contactInfo , twitterDetails};
