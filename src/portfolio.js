/* Change this file to get your personal Portfolio */

// Summary And Greeting Sectiontrue

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'Rishi Jha',
  title: "Hi all, I'm Rishi",
  subTitle: emoji(
    'Innovative optimized solution seeker. Excited to be at the deployment phase of my career as a full stack developer. I am ambitious, adventurous, assiduous and animated.'
  ),
  resumeLink:
    'https://drive.google.com/file/d/1uOfivTwubdVh3dsgAfTnHM5WA_Sjv4GU/view?usp=sharing',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/rishiiee',
  linkedin: 'https://www.linkedin.com/in/rishikesh-jha-593120176/',
  email: 'rishi_rj@live.in',
  facebook: 'https://www.facebook.com/rj.rishiii',
  medium: 'https://medium.com/@rishijha_5732',
  instagram: 'https://instagram.com/notrishii',
  twitter: 'https://twitter.com/rj_rishikesh',
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  skills: [
    emoji(
      '⚡ Responsible for server-side web application logic and integration of the work front-end developers do'
    ),
    emoji('⚡ Out of the box thinker '),
    emoji(
      '⚡ Well Versed with document readers'
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'java',
      fontAwesomeClassname: 'fab fa-java',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node',
    },
    {
      skillName: 'machine learning',
      fontAwesomeClassname: 'fas fa-robot',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'aws',
      fontAwesomeClassname: 'fab fa-aws',
    },
    {
      skillName: 'firebase',
      fontAwesomeClassname: 'fas fa-fire',
    },
    {
      skillName: 'python',
      fontAwesomeClassname: 'fab fa-python',
    },
    {
      skillName: 'docker',
      fontAwesomeClassname: 'fab fa-docker',
    },
    {
      skillName: 'azure',
      fontAwesomeClassname: 'fab fa-microsoft',
    },
    {
      skillName: 'telebot',
      fontAwesomeClassname: 'fab fa-telegram',
    },
    {
      skillName: 'tesseract',
      fontAwesomeClassname: 'fas fa-cube',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Dayananda Sagar Academy of Technology and Management,',
      logo: require('./assets/images/DSI.png'),
      subHeader: 'Bachelors of Engineering in Information Science',
      duration: 'August 2016 - September 2020',
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend', //Insert stack or technology you have experience in
      progressPercentage: '60%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '80%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '80%',
    },
    {
      Stack: 'Machine Learing',
      progressPercentage: '50%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Software Engineer',
      company: 'Zwayam',
      companylogo: require('./assets/images/zwayam.jpeg'),
      date: 'Jan 2020 – Present',
      desc:
        'I am a part of Machine Learning and Parsing Team.',
      descBullets: [
        'Worked on improving accuracy for various parsing parameters.',
        'Improved name parsing accuracy from 58% to 90%.',
        'Improved file reading capabilities by introducing an OCR reader for image resumes.',
        'Improved Experience accuracy to 100%',
        'Changed existing file readers with a better and faster reader.',
        'Installed a tool on the server for annotating remotely',
      ],
    },
    {
      role: 'Intern',
      company: 'Ethnus',
      companylogo: require('./assets/images/Ethnus.jpeg'),
      date: 'June 2019 – Aug 2019',
      desc:
        'Completed Internship in Intelligent Image Recognition on AWS.',
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'rishiiee', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/saayaHealthLogo.webp'),
      link: 'http://saayahealth.com/',
    },
    {
      image: require('./assets/images/nextuLogo.webp'),
      link: 'http://nextu.se/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letttrueers and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: 'Ethnus Certification',
      subtitle:
        'Certification of completion of Internship in Intelligent Image Recognition on AWS.',
      image: require('./assets/images/Ethnus.png'),
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://drive.google.com/file/d/1kPo5ZD0jXlWmwS5rNBqqq2XueySwl_8e/view?usp=sharing',
        },
      ],
    },
    {
      title: 'CIL Certification',
      subtitle:
        'Certification for completion of Dynamic Skills Integrated Program',
      image: require('./assets/images/DSI.png'),
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://drive.google.com/file/d/1NPU8kmasb35LvdkBw6zRLXtUpIpHOeJa/view?usp=sharing',
        }
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'https://medium.com/maice/football-28a5320a4d9b',
      title: 'I write. Therefore, I am.',
      },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: 'https://bit.ly/saadpasta-slides',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  number: '+91-9739679376',
  emailAddress: 'rishi_rj@live.in',
};

// Twitter Section

const twitterDetails = {
  userName: 'rj_rishikesh', //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
};

