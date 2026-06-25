/* 
  Developer Folio Configuration File
  Customized for Abdullah Alshehri - AI & ML Engineer
  Version: Professional / Corporate
*/

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {animated: true};

const greeting = {
  username: "Abdullah Alshehri",
  title: "Hello, I'm Abdullah",
  subTitle:
    "A dedicated Artificial Intelligence & Machine Learning Engineer specializing in designing end-to-end intelligent architectures, fine-tuning Large Language Models (LLMs), and engineering robust, scalable data pipelines.",
  resumeLink: "", // ضع رابط سيرتك الذاتية هنا
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/iAbdullah",
  linkedin: "https://linkedin.com/in/abdullah-alshehri",
  gmail: "abdullahalshahri22@gmail.com",
  display: true
};

const skillsSection = {
  title: "Core Competencies",
  subTitle: "ARCHITECTING ADVANCED COGNITIVE COMPUTING AND DATA-DRIVEN SYSTEMS",
  skills: [
    "Architecting and deploying end-to-end AI pipelines utilizing PyTorch, TensorFlow, and AWS AI services.",
    "Fine-tuning Large Language Models (LLMs) to optimize domain-specific Generative AI tasks and workflows.",
    "Automating complex data pipelines and developing intelligent analytics dashboards using Python and Power BI.",
    "Designing secure enterprise IT infrastructure and implementing robust monitoring systems."
  ],

  softwareSkills: [
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "SQL Databases", fontAwesomeClassname: "fas fa-database"},
    {skillName: "AWS", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"}
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Jeddah",
      subHeader: "Bachelor of Science in Artificial Intelligence",
      duration: "2019 - 2024",
      desc: "Completed comprehensive coursework focusing on Deep Learning, Robotics, Mixed Reality, and Computer Vision.",
      descBullets: []
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Artificial Intelligence / Machine Learning",
      progressPercentage: "95%"
    },
    {Stack: "Data Engineering", progressPercentage: "90%"},
    {Stack: "Cloud & Infrastructure", progressPercentage: "80%"}
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Artificial Intelligence Professional Trainee",
      company: "SDAIA Academy",
      date: "Dec. 2025 – Mar. 2026",
      desc: "Engineered scalable end-to-end AI pipelines and fine-tuned LLMs to execute domain-specific Generative AI tasks."
    },
    {
      role: "Financial Data Analyst & AI Specialist Intern",
      company: "Blomal Capital",
      date: "Dec. 2024 – Mar. 2025",
      desc: "Automated over 20 core financial metrics and integrated GPT-4 powered agents to deliver actionable executive insights."
    },
    {
      role: "IT Intern",
      company: "Ministry of Health",
      date: "Jul. 2023 – Aug. 2023",
      desc: "Facilitated the seamless deployment and optimization of the enterprise Electronic Health Record (EHR) system."
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Featured Projects",
  subtitle:
    "INNOVATIVE SYSTEMS BRIDGING COGNITIVE COMPUTING WITH REAL-WORLD APPLICATIONS",
  projects: [
    {
      projectName: "StockVision",
      projectDesc:
        "An AI-powered platform designed to analyze Saudi stock market trends and accurately predict price movements utilizing advanced machine learning models.",
      footerLink: []
    },
    {
      projectName: "Blind Guide (BG)",
      projectDesc:
        "A specialized computer vision system built to assist visually impaired navigation, developed using Faster R-CNN, TensorFlow Lite, and FastAPI.",
      footerLink: []
    },
    {
      projectName: "EduLensAR",
      projectDesc:
        "A Mixed Reality educational platform developed with Unity and ARCore, demonstrated to increase STEM learning retention by 70%.",
      footerLink: []
    }
  ],
  display: true
};

const achievementSection = {
  title: "Achievements & Certifications",
  subtitle: "Professional Licenses and International Credentials",
  achievementsCards: [
    {
      title: "AWS Certified AI Practitioner",
      subtitle: "Cloud-based AI & Machine Learning Specialization",
      footerLink: []
    },
    {
      title: "Accredited AI Specialist",
      subtitle: "Saudi Council of Engineers (ID: 1089300)",
      footerLink: []
    },
    {
      title: "HCIA-AI & HCIA-Security V3.0",
      subtitle: "Huawei Certified ICT Associate",
      footerLink: []
    }
  ],
  display: true
};

const contactInfo = {
  title: "Contact Me",
  subtitle:
    "Feel free to reach out for collaborations or professional inquiries.",
  number: "+966538278138",
  email_address: "abdullahalshahri22@gmail.com"
};

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
  contactInfo
};
