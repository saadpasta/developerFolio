/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Pirmin Pfeifer",
  title: "Hello There",
  subTitle: emoji(
    "I'm Pirmin Pfeifer, an aspiring games engineer. Currently I am studying Games Engineering BSc in Würzburg, Germany. My passions are game engines, computer graphics and graph theory."
  ),
  resumeLink: require("./assets/CV.pdf"), // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Darkblizzard21",
  gmail: "hi@pirminpfeifer.eu",
  // twitter: "https://twitter.com/PirminPfeifer",
  itch: "https://darkblizzard.itch.io/",
  linkedin: "https://www.linkedin.com/in/pirmin-pfeifer/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "FOCUS ON GRAPHICS ENGINEERING AND GAME ENGINE SYSTEMS BUT ALSO A BIT OF ALL OTHER DISCIPLINES OF GAME DEVELOPMENT",
  skills: [
    emoji("⚡ Develop new Engine Features, Extensions and Development Tools"),
    emoji("⚡ Design and Implementation of Gameplay Systems"),
    emoji("✨ Scripting of Shaders and Post-Processing-Effects")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  projects: [
    {
      description: "GameLab III: Fractal Engine",
      link: "https://www.youtube.com/watch?v=Gxc_A7myOg4",
      skills: [
        "C++",
        "Visual Studio",
        "ReSharper",
        "Nintendo Switch SDK",
        "OpenGl"
      ]
    },
    {
      description: "GameLab II: Balancing Hub",
      link: "https://www.youtube.com/watch?v=7q_E0Ke6AJ4",
      skills: ["C++", "Unreal Engine 4", "Visual Studio", "Rider"]
    },
    {
      description: "GameLab I: Empty Spaces",
      link: "https://darkblizzard.itch.io/emptyspaces",
      skills: ["C++", "Unreal Engine 4", "Visual Studio"]
    },
    {
      description: "BrightnessBased TextureLayering",
      link: "https://darkblizzard.itch.io/texturelayering",
      skills: ["Unreal Engine 4"]
    },
    {
      description: "dProB @ BII Gmbh",
      link: "https://www.bii-gmbh.com/",
      skills: ["C#", "Unity", "Rider"]
    },
    {
      description: "Dada Longlegs",
      link: "https://qu0d0.itch.io/dada-longlegs",
      skills: ["C#", "Unity", "Rider"]
    },
    {
      description: "TD Cratos",
      link: "https://darkblizzard.itch.io/td-project",
      skills: ["C#", "Unity", "Visual Studio"]
    },
    {
      description: "PacMan AI @ Interactive AI Lecture",
      skills: ["C#", "Unity", "Rider"]
    },
    {
      description: "Advent of Code 2021",
      link: "https://github.com/Darkblizzard21/AoC2021",
      skills: ["Java", "IntelliJ IDEA"]
    },
    {
      description: "Enigma Example Project",
      link: "https://github.com/ShaikaJar/Enigma",
      skills: ["Java", "IntelliJ IDEA"]
    },
    {
      description: "Boid Simulation on this Website",
      skills: ["JavaScript", "WebStorm", "WebGL"]
    },
    {
      description: "WebGL ProtoType @ Interactive Computer Graphics Lecture",
      skills: ["TypeScript", "WebStorm", "WebGL"]
    },
    {
      description: "SquaredCode Formatter",
      link: "https://github.com/Darkblizzard21/SquaredCode",
      skills: ["JavaScript", "WebStorm"]
    },
    {
      description: "DynamicChannels Discord Bot Module",
      link: "https://github.com/Darkblizzard21/DynamicChannelsModule",
      skills: ["C#", "Rider", "Discord API"]
    },
    {
      description: "Discord Management Bot",
      skills: ["JavaScript", "WebStorm", "Discord API"]
    },
    {
      description: "BlenderRenderCollection",
      link: "https://github.com/Darkblizzard21/BlenderRenderCollection",
      skills: ["Blender"]
    },
    {
      description: "3D Models and Promotional Art for my Projects",
      skills: ["Blender"]
    },
    {
      description: "Almost all of my projects",
      skills: ["Git"]
    }
  ],

  softwareSkills: [
    {
      skillName: "C++",
      iconData: {
        link: "https://isocpp.org/",
        icon: require("./assets/images/ISO_C++_Logo.webp"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/cpp.webp"),
        tooltip: {
          name: "C++",
          type: "PROGRAMMING LANGUAGE",
          proficiency: 4
        }
      }
    },
    {
      skillName: "C#",
      iconData: {
        link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/csharp.webp"),
        icon: require("./assets/images/csharp.webp"),
        tooltip: {
          name: "C#",
          type: "PROGRAMMING LANGUAGE",
          proficiency: 4
        }
      }
    },
    {
      skillName: "TypeScript",
      iconData: {
        link: "https://www.typescriptlang.org/",
        icon: require("./assets/images/TypeScript.webp"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/ts.webp"),
        tooltip: {
          name: "TypeScript",
          type: "PROGRAMMING LANGUAGE",
          proficiency: 3
        }
      }
    },
    {
      skillName: "JavaScript",
      iconData: {
        link: "https://www.javascript.com/",
        icon: require("./assets/images/js.webp"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/jsComposit.webp"),
        tooltip: {
          name: "JavaScript",
          type: "PROGRAMMING LANGUAGE",
          proficiency: 3
        }
      }
    },
    {
      skillName: "Unreal 4",
      iconData: {
        link: "https://www.unrealengine.com/en-US/",
        icon: require("./assets/images/ue4Desat.webp"),
        saturatedIcon: require("./assets/images/ue4.webp"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/ue4.webp"),
        tooltip: {
          name: "Unreal Engine 4",
          type: "GAME ENGINE",
          proficiency: 5
        }
      }
    },
    {
      skillName: "Unity",
      iconData: {
        link: "https://unity.com/",
        icon: require("./assets/images/unityDesat.webp"),
        saturatedIcon: require("./assets/images/unitySat.webp"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/unityComposit.webp"),
        tooltip: {
          name: "Unity",
          type: "GAME ENGINE",
          proficiency: 4
        }
      }
    },
    {
      skillName: "Blender",
      iconData: {
        link: "https://www.blender.org/",
        icon: require("./assets/images/blender_icon_64x64.webp"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/blenderComposit.webp"),
        tooltip: {
          name: "Blender",
          type: "3D MODELING TOOL",
          proficiency: 5
        }
      }
    },
    {
      skillName: "Git",
      iconData: {
        link: "https://git-scm.com",
        icon: require("./assets/images/Git.webp"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/gitComposit.webp"),
        tooltip: {
          name: "Git",
          type: "VERSION CONTROL",
          proficiency: 4
        }
      }
    },
    {
      skillName: "Visual Studio",
      iconData: {
        name: "Visual Studio",
        link: "https://visualstudio.microsoft.com/",
        icon: require("./assets/images/vs19.webp"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/vsComposit.webp"),
        tooltip: {
          name: "Visual Studio",
          type: "IDE",
          proficiency: 4
        }
      }
    },
    {
      skillName: "Switch SDK",
      iconData: {
        link: "https://developer.nintendo.com/",
        icon: require("./assets/images/ndiDesat.webp"),
        saturatedIcon: require("./assets/images/ndi.webp"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/ndiComposit.webp"),
        tooltip: {
          name: "Nintendo Switch SDK",
          type: "API/SDK",
          proficiency: 3
        }
      }
    },
    {
      skillName: "OpenGL",
      iconData: {
        link: "https://www.opengl.org//",
        icon: require("./assets/images/openglDesat.webp"),
        saturatedIcon: require("./assets/images/opengl.webp"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/glComposit.webp"),
        tooltip: {
          name: "OpenGL",
          type: "GRAPHICS API",
          proficiency: 4
        }
      }
    },
    {
      skillName: "WebGL",
      iconData: {
        link: "https://www.khronos.org/webgl/",
        icon: require("./assets/images/WebGL_LogoDeSat.webp"),
        saturatedIcon: require("./assets/images/WebGL_Logo.webp"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/glComposit.webp"),
        tooltip: {
          name: "WebGL",
          type: "GRAPHICS API",
          proficiency: 4
        }
      }
    },
    {
      skillName: "Discord API",
      iconData: {
        link: "https://discord.com/developers/docs/intro",
        icon: require("./assets/images/Discord-Logo-Color.webp"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/discordComposit.webp"),
        tooltip: {
          name: "Discord API",
          type: "API (JS, PYTHON, C#)",
          proficiency: 5
        }
      }
    }
  ],
  /*
  unusedSoftwareSkills:[ {
    skillName: "Java",
    iconData: {
      link: "https://www.java.com/en/",
      icon: require("./assets/images/java.png"),
      boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/javaComposit.png"),
      tooltip: {
        name: "Java",
        type: "PROGRAMMING LANGUAGE",
        proficiency: 4
        }
      }
    },
    {
      skillName: "Rider",
      iconData: {
        link: "https://www.jetbrains.com/rider/",
        icon: require("./assets/images/rider.png"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/riderComposit.png"),
        tooltip: {
          name: "Rider",
          type: "IDE",
          proficiency: 5
        }
      }
    },
    {
      skillName: "ReSharper",
      iconData: {
        link: "https://www.jetbrains.com/resharper-cpp/",
        icon: require("./assets/images/resharper.png"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/resharperComposit.png"),
        tooltip: {
          name: "ReSharper",
          type: "VS EXTENSION",
          proficiency: 2
        }
      }
    },
    {
      skillName: "IntelliJ IDEA",
      iconData: {
        link: "https://www.jetbrains.com/idea/",
        icon: require("./assets/images/intellij.png"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/ideaComposit.png"),
        tooltip: {
          name: "IntelliJ IDEA",
          type: "IDE",
          relatedProjects: [
            {
              description: "Enigma Example Project",
              link: "https://github.com/ShaikaJar/Enigma"
            }
          ],
          proficiency: 4
        }
      }
    },
    {
      skillName: "WebStorm",
      iconData: {
        link: "https://www.jetbrains.com/webstorm/",
        icon: require("./assets/images/webstorm.png"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/webstormComposit.png"),
        tooltip: {
          name: "WebStorm",
          type: "IDE",
          proficiency: 3
        }
      }
    },
  ],*/
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Julius-Maximilians University",
      logo: require("./assets/images/uniwue.webp"),
      subHeader: "Games Engineering BSc",
      duration: "September 2019 - Current",
      desc: "Received highest grade for all Games Engineering projects:",
      descBullets: [
        "GameLab I: EmptySpaces",
        "GameLab II: Balancing Hub",
        "GameLab III: Fractal Engine & Minesweeper",
        "Movie Making with Game Engines: BrightnessBasedTextureLayering",
        "Seminar Current Trends in Games Engineering: Automated Animation of Creatures"
      ]
    },
    {
      schoolName: "Friedrich-List-Gymnasium Gemünden",
      logo: require("./assets/images/flg.webp"),
      subHeader: "Abitur",
      duration: "September 2011 - July 2019"
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
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineering Intern",
      company: "Advanced Micro Devices, Inc.",
      companylogo: require("./assets/images/AMD_E_Wh_RGB.webp"),
      date: "October 2022 – Present",
      desc: "",
      descBullets: [
      ]
    },
    {
      role: "Software Engineer",
      company: "Building Information Innovator GmbH",
      companylogo: require("./assets/images/bii2.webp"),
      date: "March 2021 – September 2021",
      desc: "Developed professional digital tool for modeling, simulation and visualization of construction processes with Unity and a functional C# library.",
      descBullets: [
        "Build graph data structures for the management of cargo flows",
        "Build development & debug tools"
      ]
    },
    {
      role: "Tutor for Game Lab I",
      company: "Julius-Maximilians University",
      companylogo: require("./assets/images/uniwue.webp"),
      date: "October 2020 – September 2022",
      desc: "Supported students at overcoming problems they faced during game development process.",
      descBullets: [
        "Explained basic and intermediate topics the students brought up",
        "Created introductory tutorials for Unreal Engine 4 & Unity",
        "Tested and reviewed the students games"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "University Projects",
  projects: [
    {
      video: require("./assets/videos/fractalWebSnippet.webm"),
      image: require("./assets/images/fractalEngineLogo.webp"),
      projectName: "",
      projectDesc:
        "Hardware-oriented, specialised Framework for the Nintendo Switch ™ console with a focus on compile-time-safe loading, use of hardware features and various graphics options. Minesweeper was implemented as proof of concept game.",
      footerLink: [
        {
          name: "Watch Trailer",
          url: "https://www.youtube.com/watch?v=73KvNSI9d8c"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      video: require("./assets/videos/HauntedForest.webm"),
      image: require("./assets/images/mmwge.webp"),
      projectName: "BrightnessBasedTextureLayering",
      projectDesc:
        "This PostProcess effect uses the Unreal Engine 4 exposure system to create an artistic image from textures. Created in collaboration with four design students.",
      footerLink: [
        {
          name: "Project Movie",
          url: "https://motiondesign101.de/filme/texture-worlds/"
        },
        {
          name: "Download on Itch.io",
          url: "https://darkblizzard.itch.io/texturelayering"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      video: require("./assets/videos/EmptySpaces.webm"),
      image: require("./assets/images/emptySpaces.webp"),
      projectName: "Empty Spaces",
      projectDesc:
        "A game prototype that explores the combination of Bullet-Hell-Twin-Stick-Shooters and Metroidvania style games. The game contains four areas and three bosses. ",
      footerLink: [
        {
          name: "Watch Trailer",
          url: "https://www.youtube.com/watch?v=7nlux89EjxY"
        },
        {
          name: "Download on Itch.io",
          url: "https://darkblizzard.itch.io/emptyspaces"
        }
      ]
    },
    {
      video: require("./assets/videos/balancingHub.webm"),
      image: require("./assets/images/balancingHub.webp"),
      projectName: "Balancing Hub",
      projectDesc:
        'Balance your variables while playing with the "Balancing Hub" plugin for Unreal Engine 4.24.3. Created in collaboration with Quirin Maier.',
      footerLink: [
        {
          name: "Watch Trailer",
          url: "https://www.youtube.com/watch?v=7q_E0Ke6AJ4"
        },
        {
          name: "Download on Itch.io",
          url: "https://qu0d0.itch.io/balancing-hub"
        },
        {
          name: "View Backend on GitHub",
          url: "https://github.com/Darkblizzard21/BalancingHubBackend"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// GameJams Section

const gameJams = {
  title: "Small Projects & Game Jams",
  subtitle:
    "MADE DURING GAME JAMS OR OTHER SMALLER TIME PERIODS",
  projects: [
    {
      video: require("./assets/videos/boids.webm"),
      image: require("./assets/images/boidLogo.webp"),
      projectName: "WebGL Boid Simulation",
      projectDesc:
        "Boid Simulation on this website. Calculated on the GPU via Transform Feedbacks.",
      footerLink: [
        {
          name: "View Code on GitHub",
          url: "https://github.com/Darkblizzard21/WebGL-Boids"
        }
      ]
    },
    {
      video: require("./assets/videos/dada.webm"),
      image: require("./assets/images/longLegs.webp"),
      projectName: "Dada LongLegs",
      projectDesc:
        "This game was submission the Franken Game Jam 2021. The theme was Growth.",
      footerLink: [
        {
          name: "Download on Itch.io",
          url: "https://qu0d0.itch.io/dada-longlegs"
        },
        {
          name: "GameJam Page",
          url: "https://frankengamejam.de/de/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      video: require("./assets/videos/TDCratos.webm"),
      image: require("./assets/images/TDCratos.webp"),
      projectName: "TD Cratos",
      projectDesc:
        "This game started as a self proposed 72H game challenge and introduced me to unity.",
      footerLink: [
        {
          name: "Download on Itch.io",
          url: "https://darkblizzard.itch.io/td-project"
        }
      ]
    },
    {
      video: require("./assets/videos/rgb.webm"),
      image: require("./assets/images/rgbWeel.webp"),
      projectName: "\n",
      projectDesc:
        "A silly small website.",
      footerLink: [
        {
          name: "Visit",
          url: "rgb.prmn.eu"
        },
        {
          name: "GitHub",
          url: "https://github.com/Darkblizzard21/rgb-website"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// References Section

const referencesSection = {
  references: [
    {
      name: "Prof. Dr. Sebastian von Mammen",
      jobTitle: "Professor of Games Engineering",
      organization: "Julius-Maximilians University",
      location: "Würzburg, Germany",
      website: "http://hci.uni-wuerzburg.de/people/sebastian-von-mammen/",
      email: "sebastian.von.mammen@uni-wuerzburg.de",
      image: require("./assets/images/GE-logo.webp")
    },
    {
      name: "Daniel Götz",
      jobTitle: "COO and Software Engineer",
      organization: "Building Information Innovator GmbH",
      location: "Würzburg, Germany",
      website: "https://www.bii-gmbh.com/",
      email: "goetz@bii-gmbh.com",
      image: require("./assets/images/bii2.webp")
    }
  ]
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Honors & Scholarships"),
  subtitle:
    "Honors and Scholarships i received",

  achievementsCards: [
    {
      title: "Deutschlandstipendium",
      subtitle:
        "Scholarship granted by the Julius-Maximilians-Universität Würzburg. Co-financed by Lotum media GmbH",
      image: require("./assets/images/logo-deutschlandstipendium.webp"),
      footerLink: [
        {
          name: "University Page",
          url: "https://www.uni-wuerzburg.de/aktuelles/einblick/single/news/gemeinsam-sind-wir-stark/"
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
  ],
  display: false // Set false to hide this section, defaults to true
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

const contactInfo = {
  title: emoji("Contact Me "),
  subtitle1: "Discuss a project, offer an opportunity or just want to say hi?",
  subtitle2: "My Inbox is open for for everything.",
  number: "",
  email_address: "hi@pirminpfeifer.eu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  gameJams,
  referencesSection,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
