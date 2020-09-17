
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Simba Ndoro",
  title: "Hi, I'm Simba",
  subTitle: emoji("Experienced 1st and 2nd Line Support and FullsStack Web Developer proficient in Linux, macOS, Windows, Windows Server, PC & Phone Repair, NodeJs, MongoDB, SQL, Express.js, HTML5, CSS3, Flutter, Javascript. Presently enrolled in a DevOps course with further interest in Progressive Web Apps."),
  resumeLink: "https://docs.google.com/document/d/1NS5JvWW7RRRBphcZIAvglNJaph4ehq9DHkTNomLt2g0/edit?usp=sharing"
};

// "An experienced 1st and 2nd Line Support / FullsStack Web Developer / Mobile Developer with further interest in Progressive Web Apps."
// Experienced 1st and 2nd Line Support and FullsStack Web Developer proficient in Linux, macOS, Windows, Windows Server, PC & Phone Repair, NodeJs, MongoDB, SQL, Express.js, HTML5, CSS3, Flutter, Javascript. Presently enrolled in a DevOps course with further interest in Progressive Web Apps.

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/dittogod",
  linkedin: "https://www.linkedin.com/in/simbarashe-ndoro/",
  gmail: "dittogod1@gmail.com",
  gitlab: "https://gitlab.com/DittoGod",
  facebook: "https://www.facebook.com/D1ttoGod/",
  medium: "https://medium.com/@Dittogod",
  stackoverflow: "https://stackoverflow.com/users/12103604/dittogod",
  instagram: "https://www.instagram.com/dittogod/"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "Skill Set",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE MANY TECH STACKS",
  skills: [
    emoji("⚡ Develop interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Flutter Mobile development"),
    emoji("⚡ Integration of third party services such as Firebase / Heroku / Jenkins"),
    emoji("⚡ Proficient with Linux, macOS, Windows, Windows Server."),
    emoji("⚡ PC & Phone Repair")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
// NodeJs, MongoDB, SQL, Express.js, HTML5, CSS3, Flutter, Javascript

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
      skillName: "Vue",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
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
    },
    {
      skillName: "Express.js",
      fontAwesomeClassname: ""
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "60%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ]
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: false, //Set it to true to show workExperiences Section
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
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "DittoGod", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"false" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

// const bigProjects = {
//   title: "Big Projects",
//   subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
//   projects: [
//     // {
//     //   image: "https://www.wallpaperup.com/uploads/wallpapers/2014/09/25/455955/45cc249825d1d76d509d0aa81a67adb5-700.jpg",
//     //   link: "TBA"
//     // },
//     // {
//     //   image: require("./assets/images/nextuLogo.webp"),
//     //   link: "http://nextu.se/"
//     // }
//   ]
// };

// Your Achievement Section Include Your Certification Talks and More
const bcs_logo = "data:image/png;base64,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"
const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "FullStack Web Developer",
      subtitle: "Completed FullStack Web Developer Course on Udemy",
      image: "https://www.payuoc.com/wp-content/wpmowebp/wp-content/uploads/2020/06/Udemy-Logo.webp",
      footerLink: [
        { name: "Certification", url: "https://udemy-certificate.s3.amazonaws.com/image/UC-2Y2YGPYB.jpg?l=null" },
        { name: "Award Letter", url: "https://www.udemy.com/certificate/UC-2Y2YGPYB/" },
        { name: "Udemy Course", url: "https://www.udemy.com/course/the-web-developer-bootcamp/" }
      ]
    },
    {
      title: "Flutter Developer",
      subtitle: "Completed Flutter Developer Course on Udemy",
      image: "https://www.payuoc.com/wp-content/wpmowebp/wp-content/uploads/2020/06/Udemy-Logo.webp",
      footerLink: [
        { name: "Certification", url: "https://udemy-certificate.s3.amazonaws.com/image/UC-b140cee4-0dda-4a76-b226-35764b953964.jpg?v=1586560149000" },
        { name: "Award Letter", url: "https://www.udemy.com/certificate/UC-b140cee4-0dda-4a76-b226-35764b953964/"},
        { name: "Udemy Course", url: "https://www.udemy.com/course/flutter-bootcamp-with-dart/"}
      ]
    },
    {
      title: "MTA: Cloud Fundamentals",
      subtitle: "Earners of the MTA: Cloud Fundamentals certification have demonstrated fundamental knowledge of and basic skills using Microsoft cloud services.",
      image: "https://images.youracclaim.com/size/340x340/images/032707aa-1479-4d45-8848-860c174c65eb/MTA-Cloud-Fundamentals-2018.png",
      footerLink: [
        {name: "Badge", url: "https://www.youracclaim.com/badges/665f34ac-fb91-490c-9096-5bbda9aff088/public_url"}
      ]
    },
    {
      title: "MTA: Mobility and Device Fundamentals",
      subtitle: "Earners of the MTA: Mobility and Device Fundamentals certification have demonstrated fundamental Windows devices and mobility knowledge and skills.",
      image: "https://images.youracclaim.com/size/340x340/images/97285c88-0d8f-469d-8ca9-de8731abc942/MTA-Mobility-and-Device-Fundamentals-2018.png",
      footerLink: [
        {name: "Badge", url: "https://www.youracclaim.com/badges/ad3ae1da-396a-427d-a58b-c39e1652ce92/public_url"},
        {name: "Certificate", url: "https://drive.google.com/file/d/1joc5B9c-7evfXEv7s5TKfMm8bG8hlf1k/view?usp=sharing"}
      ]
    },
    {
      title: "MTA: Networking Fundamentals",
      subtitle: "Earners of the MTA: Networking Fundamentals certification have demonstrated knowledge of fundamental networking concepts.",
      image: "https://images.youracclaim.com/size/340x340/images/158181d6-8b69-407e-b143-d9a86f0f5b82/MTA_Networking_Fundamentals_2017-01.png",
      footerLink: [
        {name: "Badge", url: "https://www.youracclaim.com/badges/b6830478-52da-4460-82b9-5a0b7ac76a1f/public_url"},
        {name: "Certificate", url: "https://drive.google.com/file/d/12jsUGrNIMiKg6VjEIEC0g1WD6OKlsMtF/view?usp=sharing"}
      ]
    },
    {
      title: "BCS Level 3 Award in Business Processes",
      subtitle: "Completed Level 3 Award in Business Processes",
      image: bcs_logo,
      footerLink: [
        {name: "Certificate", url: "https://drive.google.com/file/d/1o0V-wAJ4B9Hms0QgY2gWo_uCv-s_HYT6/view?usp=sharing"}
      ]
    },
    {
      title: "BCS Level 3 Award in Coding and Logic",
      subtitle: "Completed Level 3 Award in Coding and Logic",
      image: bcs_logo,
      footerLink: [
        {name: "Certificate", url: "https://drive.google.com/file/d/1L6s0v_Nx92VIAkz9xba-cIa2k8w15rwz/view?usp=sharing"}
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  // title: "Blogs",
  // subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  // blogs: [
  //   {
  //     url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
  //     title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
  //     description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
  //   },
  //   {
  //     url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
  //     title: "Why REACT is The Best?",
  //     description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
  //   }
  // ]
};

// Talks Sections

const talkSection = {
//   title: "TALKS",
//   subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ]
};

// Podcast Section

const podcastSection = {
  // title: emoji("Podcast 🎙️"),
  // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // // Please Provide with Your Podcast embeded Link
  // podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-3243454077",
  email_address: "dittogod1@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "8BitLion"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
