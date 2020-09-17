
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Simba Ndoro",
  title: "Hi all, I'm Simba",
  subTitle: emoji("An experienced 1st and 2nd Line Support / FullsStack Web Developer / Mobile Developer with further interest in Progressive Web Apps."),
  resumeLink: "https://docs.google.com/document/d/1NS5JvWW7RRRBphcZIAvglNJaph4ehq9DHkTNomLt2g0/edit?usp=sharing"
};

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
  title: "What i do",
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
