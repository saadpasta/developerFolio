
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Righved",
  title: "Hi all, I'm Righved",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web and Machine Learning applications with Python / Java / Nodejs and some other cool libraries and frameworks. An ardent lover of Data Structures, Algorithms and Mathematics"),
  resumeLink: "https://drive.google.com/file/d/1y3w8VVyTzpga3lZGCICwDCRQUr_PZt4V/view?usp=drivesdk"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/Righved",
  linkedin: "https://www.linkedin.com/in/righved-kumar-6b9a7a137/",
  gmail: "kumar.righved7@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "BUDDING SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly complex algorithms for your web applications"),
    emoji("⚡ Incorporate Design Patterns that I learn on my way"),
    emoji("⚡ Integration of third party services such as Swagger/ AWS / Redis")
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
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
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
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
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    // {
    //   schoolName: "Harvard University",
    //   logo: require("./assets/images/harvardLogo.png"),
    //   subHeader: "Master of Science in Computer Science",
    //   duration: "September 2017 - April 2019",
    //   desc: "Participated in the research of XXX and published 3 papers.",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   ]
    // },
    {
      schoolName: "APJ Abdul Kalam University",
      logo: require("./assets/images/uptu_logo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "July 2015 - Jun 2019",
      desc: "Ranked top 2% in the University.Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Optimised RSA Encryption System with Number Theory Techniques",
        "Developed Book Recommendation System as a part of Final Year Project"
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Competitive Programming",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Data Science",
      progressPercentage: "65%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Development Engineer",
      company: "Media.Net (Directi)",
      companylogo: require("./assets/images/medianet_logo.png"),
      date: "Jan 2020 – Present",
      desc: "7 out of 10,000 applicants chosen",
      descBullets: [
        "Working ( primarily Java and Javascript) on contextual advertising tech engine workflow, developing tools to monitor impressions and track user information to give boost in business.",
        "Optimised the Heirarchial Agglomorative Clustering Model on TF-IDF based article vectors with cosine similarity as metric for news articles classification."
      ]
    },
    {
      role: "Software Development Engineer",
      company: "shareChat",
      companylogo: require("./assets/images/sharechat_logo.png"),
      date: "Jul 2019 – Dec 2019",
      desc: "Owned the Centralized API Documentation Scheme for the ShareChat Engineering Team using Eureka and Swagger to directly receive request payloads and runs mock services on the various APIs of 300 different services of the company."
    },
    {
      role: "Software Engineer Intern",
      company: "People Matters",
      companylogo: require("./assets/images/people_Matters_logo.png"),
      date: "Jun 2018 – Jul 2018",
      desc: "Wrote a complete scalable Login portal for the 200 employees of the company which is heavily used by the over-expanding company using PHP, HTML, JavaScript and MySQL."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "Righved", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"False" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "College and Hackathon Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/hacka.jpeg"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/book_reco.jpeg"),
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements 🏆 "),
  subtitle: "Achievements and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Winner of Codechef Long Challenge",
      subtitle: "Achieved 1st,28th 59th Rank Globally in October, March and July Long Challenge on Codechef (2018)",
      image: require("./assets/images/codechef_logo.jpeg"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Finalist in University Programming Competition",
      subtitle: "Secured 3rd University Rank in CodersBit(InterviewBit Flagship Contest) (2018)",
      image: require("./assets/images/interviewbit_logo.png"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "A Division 1 Competitive Programmer",
      subtitle: "An Expert and a Division 1 user on Codeforces, Codechef and Hackerrank Platforms.Achieving 95 percentile around the world.",
      image: require("./assets/images/codeforces_logo.png"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "Being the Co-Founder of the Programming Club in our college, we discuss about new tech, workshops and competitions",

  blogs: [
    {
      url: "https://www.instagram.com/programmingclub.akgec/",
      title: "Incodenito Programming Club",
      description: "An Initiative by the students to grow the culture of Programming in college"
    },
    // {
    //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    // }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "The journey of getting into Best Tech Companies",
      subtitle: "Sharing our journey to get into best porduct based companies in India",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.youtube.com/watch?v=bU_c9KEFxsc&t=2913s"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Playlit 🎙️"),
  subtitle: "ENOUGH ABOUT MY PROFESSIONAL AND ACADEMIC EXPERIENCE, LET ME SHARE YOU MY GO-TO PLAYLIST ",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9871853319",
  email_address: "kumar.righved7@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
