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
  username: "ML99",
  title: "Hi all, I'm Mustapha",
  subTitle: emoji(
    "I'm a Data Science Enthusiast focusing on AI and Cloud Tech. I thrive on transforming complex data into smart solutions using my data science skills. Eager to bring these skills to life in the real world!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1aQzDFpYmC4dAIq8RUR7PRYKOUrWsddcu/view?usp=sharing", // Add a link to your online resume if available, create one if you don't have; ; ; ; ; ; 
  displayGreeting: true
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/MuLIAICHI",
  linkedin: "https://www.linkedin.com/in/liaichi-mustapha",
  gmail: "mustaphaliaichi@email.com",
  // Add other social media links if available
  // Instagram, Twitter, Facebook, Medium, Stackoverflow, Gitlab, etc. are supported
  twitter: "https://twitter.com/liaichi_m", // replace with your Twitter profile link
  display: true
};


// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE DATA SCIENCE STUDENT | EXPLORING AI & MACHINE LEARNING",
  skills: [
    emoji(
      "⚡ Developing skills in building and optimizing data pipelines and working with complex datasets."
    ),
    emoji(
      "⚡ Strong interest in analyzing and interpreting unstructured datasets."
    ),
    emoji(
      "⚡ Gaining practical experience with web data extraction using tools like Selenium and Scrapy."
    )
  ],

  softwareSkills: [
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "scrapy",
      fontAwesomeClassname: "fas fa-spider" // Note: Custom icon for Scrapy as it might not have a specific FontAwesome icon
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "pandas",
      fontAwesomeClassname: "fas fa-table" // Generic icon for data tables, as Pandas does not have a specific icon
    },
    {
      skillName: "numpy",
      fontAwesomeClassname: "fas fa-calculator" // Generic icon, representing numerical computation
    },
    {
      skillName: "plotly",
      fontAwesomeClassname: "fas fa-chart-line" // Represents plotting capabilities
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: "fas fa-brain" // Represents AI/Neural Network capabilities
    }
  ],
  display: true
};


// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Ibn Tahir",
      logo: require("./assets/images/ibnTahirLogo.png"), // Replace with the actual path to your school's logo
      subHeader: "CPGE Student",
      duration: "2018 – 2020",
      desc: "Preparatory Classes’s degree - Mathematics and Physics", // You can customize this description
      descBullets: [
        "Located in Errachidia, Morocco"
      ]
    },
    {
      schoolName: "School Of Information Science",
      logo: require("./assets/images/schoolOfInfoSciLogo.jpg"), // Replace with the actual path to your school's logo
      subHeader: "Data Science Student",
      duration: "2020 – 2025",
      desc: "Engineer’s degree - Data Science", // Customize this description as needed
      descBullets: [
        "Located in Rabat, Morocco"
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Python Programmer & Web Scraping",
      company: "Freelancer.com",
      companylogo: require("./assets/images/freelancerLogo.png"), // Replace with the actual path to Freelancer.com's logo
      date: "2021 – Present",
      desc: "Specializing in web scraping, automation, and machine learning. Expert in extracting and transforming data, API development, and building automation solutions.",
      descBullets: [
        "Web scraping using Scrapy and BeautifulSoup to extract data from websites and PDFs.",
        "Automation using Selenium and Seleniumbase frameworks for web applications.",
        "Proficiency in OpenCV for computer vision tasks and bot development for Telegram/Discord.",
        "Transforming data into JSON, CSV, or Excel formats for seamless integration."
      ]
    },
    {
      role: "Python Programmer & Automation",
      company: "PeoplePerHour",
      companylogo: require("./assets/images/peoplePerHourLogo.png"), // Replace with the actual path to PeoplePerHour's logo
      date: "2023 – Present",
      desc: "Focused on leveraging advanced Python programming, my projects deliver high-quality, specialized services in data analysis and automation.",
      descBullets: [
        "Constructed a rapid-response chatbot using Groq API integrated with Streamlit, capitalizing on Groq's high-speed computational power.",
        "Developing and maintaining APIs and webhooks for efficient data communication.",
        " Developed a tool to analyze consumer finance surveys, utilizing K-means clustering to categorize consumer behaviors. Ensuring accurate insights and actionable results.",
        "Designed and built an app for demographic analysis, applying data science techniques to provide insights into population statistics and trends."
      ]
    },
    // Add your new experience here
    {
      role: "Internship Trainee",
      company: "ONSSA",
      companylogo: require("./assets/images/onssaLogo.png"), // Replace with the path to ONSSA's logo
      date: "July 2023 - August 2023",
      desc: "I was assigned the responsibility of designing and implementing a sophisticated Python script, with the primary objective of automating a complex calculation process. This task required seamless integration with Microsoft Excel, ensuring efficient data manipulation and analysis.",
      // Add 'descBullets' if you have bullet points to add
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
  subtitle: "Highlighting Major Projects and Contributions",
  projects: [
    {
      image: require("./assets/images/docuMindsLogo.png"), // Replace with the path to your DocuMinds project's logo
      projectName: "DocuMinds - File Embedding App",
      projectDesc: "DocuMinds is a Streamlit-based web application for processing and analyzing text documents. It enables users to upload documents, input prompts, and receive insightful responses. Features include document upload, embeddings storage in AWS S3, and generating responses based on user prompts.",
      footerLink: [
        {
          name: "View Project", // Change this if you have a different call to action
          url: "https://github.com/MuLIAICHI/DocuMinds" // Add the URL of your DocuMinds project if it's deployed
        }
        // Add more buttons if needed
      ]
    },
    {
      image: require("./assets/images/schoolTextAnalysisLogo.png"), // Replace with the path to your School Text Analysis project's logo
      projectName: "School Text Analysis using Word Cloud",
      projectDesc: "This project focuses on analyzing text from various schools using word cloud visualization. It involves data collection, processing, keyword extraction using nlp_rake, and visualizing the most frequent terms with word clouds and bar plots. The project is collaborative, inviting contributions for analyzing different schools.",
      footerLink: [
        {
          name: "View Project", // Change this if you have a different call to action
          url: "https://github.com/MuLIAICHI/HighSchoolEngMorocco-WC" // Add the URL of your School Text Analysis project if available
        }
        // Add more buttons if needed
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "My journey in learning and achieving milestones in my career",

  achievementsCards: [
    {
      title: "Applied Data Science Lab",
      subtitle:
        "I have completed eight end-to-end, applied data science projects. In each project, I accessed data from files, SQL and NoSQL databases, and APIs. I have demonstrated my ability to explore and clean data, create functions and ETL pipelines to prepare training sets. I have built machine learning models for supervised and unsupervised learning tasks, and have created visualizations to explain data characteristics and model predictions for non-technical audiences.",
      image: require("./assets/images/applied-data-science-lab.png"), // Replace with the path to your certificate image
      imageAlt: "applied-data-science-lab Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/aa0fe882-d322-46c8-85d6-22b9c5112f18/linked_in_profile" // Add link to your certificate if available online
        }
        // You can add more links related to this achievement if available
      ]
    },
    {
      title: "Learn Project Management",
      subtitle:
        "Successfully completed the Project Management course, gaining skills in managing projects of any scale.",
      image: require("./assets/images/projectManagementCertificate.png"), // Replace with the path to your certificate image
      imageAlt: "Project Management Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://onemonth.com/certificates/qxzuePh9aRJc29MrRw3R" // Add link to your certificate if available online
        }
        // You can add more links related to this achievement if available
      ]
    },
    // ... Include other achievements or certifications here
  ],
  display: true // Set true to display this section
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Exploring and sharing insights on Data Science, Web Development, and the Future of Technology.",
  displayMediumBlogs: "false", // Set false since you're using Hashnode instead of Medium
  blogs: [
    {
      url: "https://it-lounge.hashnode.dev/unlocking-the-power-of-data-science-a-journey-into-the-world-of-data",
      title: "Unlocking the Power of Data Science: A Journey into the World of Data",
      description:
        "This blog post delves into the significance of data in the digital age, highlighting its role in driving advancements and innovations. It explores the field of data science, an interdisciplinary domain that combines various techniques to extract insights from data."
    },
    {
      url: "https://it-lounge.hashnode.dev/apis-and-webhooks-powering-modern-web-development",
      title: "APIs and Webhooks: Powering Modern Web Development",
      description:
        "This blog post discusses the critical roles of APIs (Application Programming Interfaces) and Webhooks in modern web development. It explains how these technologies facilitate dynamic, integrative, and responsive web applications."
    },
    {
      url: "https://it-lounge.hashnode.dev/customizing-ai-responses-with-llama-index-a-case-study-in-data-specific-interaction",
      title: "Customizing AI Responses with Llama Index: A Case Study in Data-Specific Interaction",
      description:
        "In this blog post, I delve into the technical intricacies of customizing AI models to respond exclusively from a predefined dataset. I discuss the development of a Flask-based application that leverages OpenAI's models, focusing on restricting the AI’s responses to only those derived from our own indexed documents."
    }
  ],
  display: true // Set true to display this section
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
  number: "+212 691626946",
  email_address: "mustaphaliaihci@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "liaichi_m", //Replace "twitter" with your twitter username without @
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
  isHireable,
  resumeSection
};
