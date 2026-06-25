/* 
  Developer Folio Configuration File - Updated for AI & AWS Specialization
  Abdullah Alshehri
*/

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const greeting = {
  username: "Abdullah Alshehri",
  title: "Hi all, I'm Abdullah",
  subTitle: emoji(
    "Artificial Intelligence & Machine Learning Graduate passionate about Data Engineering and Cloud AI solutions 🚀"
  ),
  resumeLink: "", // ضع رابط سيرتك الذاتية هنا
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/iAbdullah", // استبدل بالرابط الصحيح
  linkedin: "https://www.linkedin.com/in/iabdullah/", // استبدل بالرابط الصحيح
  gmail: "your-email@example.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "CRAVING TO ENGAGE WITH DATA AND COGNITIVE COMPUTING SYSTEMS",
  skills: [
    emoji(
      "⚡ Engineering end-to-end AI pipelines using PyTorch, TensorFlow, and AWS AI services"
    ),
    emoji(
      "⚡ Implementing Generative AI solutions and fine-tuning LLMs on cloud infrastructure"
    ),
    emoji("⚡ Cloud-based AI deployment and orchestration using AWS ecosystem"),
    emoji(
      "⚡ Automating complex data pipelines and building intelligent financial analytics"
    )
  ],
  softwareSkills: [
    {skillName: "python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "aws", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "pytorch", fontAwesomeClassname: "fas fa-brain"},
    {skillName: "tensorflow", fontAwesomeClassname: "fas fa-code-branch"},
    {skillName: "docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "git", fontAwesomeClassname: "fab fa-git-alt"}
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Jeddah",
      logo: null,
      subHeader:
        "Bachelor of Science in Artificial Intelligence and Machine Learning",
      duration: "2019 - 2024",
      desc: "Regular full-time attendance program focusing on AI, ML, and Data Engineering.",
      descBullets: [
        "Graduation Project: Blind Guide (AI assistive application)"
      ]
    }
  ]
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Professional Licenses and International Certifications",
  achievementsCards: [
    {
      title: "AWS Certified AI Practitioner",
      subtitle:
        "Cloud-based Artificial Intelligence & Machine Learning Specialization",
      image: null,
      imageAlt: "AWS Logo",
      footerLink: []
    },
    {
      title: "Accredited AI Specialist",
      subtitle: "Saudi Council of Engineers (ID: 1089300)",
      image: null,
      imageAlt: "SCE Logo",
      footerLink: []
    },
    {
      title: "HCIA-AI & HCIA-Security V3.0",
      subtitle: "Huawei Certified ICT Associate",
      image: null,
      imageAlt: "Huawei Logo",
      footerLink: []
    }
  ],
  display: true
};

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "AI Graduate & Developer",
      company: "University of Jeddah / Projects",
      companylogo: null,
      date: "2025 - Present",
      desc: "Developing FinBrain-OS and AI-powered assistive tools like Blind Guide.",
      descBullets: [
        "Built AI pipelines",
        "TensorFlow & FastAPI implementations"
      ]
    }
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "My Inbox is always open.",
  number: "",
  email_address: "your-email@example.com"
};

const isHireable = true;

export {
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  achievementSection,
  contactInfo,
  isHireable
};
