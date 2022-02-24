/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import React from "react";

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
  resumeLink: "", //require("./assets/CV.pdf"), // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Darkblizzard21",
  gmail: "hi@pirminpfeifer.eu",
  twitter: "https://twitter.com/GE_pirmin",
  itch: "https://darkblizzard.itch.io/",
  // steam: "https://steamcommunity.com/id/darkblizzard21",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/pp.png"),
  subTitle:
    "MAINLY GRAPHICS ENGINEERING AND OTHER ENGINE TECH BUT ALSO A BIT OF ALL DISCIPLINES OF GAME DEVELOPMENT ",
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
        icon: require("./assets/images/ISO_C++_Logo.svg"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/cpp.png"),
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
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/csharp.png"),
        icon: require("./assets/images/csharp.svg"),
        tooltip: {
          name: "C#",
          type: "PROGRAMMING LANGUAGE",
          proficiency: 4
        }
      }
    },
    {
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
      skillName: "TypeScript",
      iconData: {
        link: "https://www.typescriptlang.org/",
        icon: require("./assets/images/TypeScript.svg"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/ts.png"),
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
        icon: require("./assets/images/js.png"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/jsComposit.png"),
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
        icon: require("./assets/images/ue4Desat.svg"),
        saturatedIcon: require("./assets/images/ue4.svg"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/ue4.png"),
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
        link: "https://git-scm.com",
        icon: require("./assets/images/unityDesat.svg"),
        saturatedIcon: require("./assets/images/unitySat.svg"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/unityComposit.png"),
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
        icon: require("./assets/images/blender_icon_64x64.png"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/blenderComposit.png"),
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
        icon: require("./assets/images/Git.png"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/gitComposit.png"),
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
        icon: require("./assets/images/vs19.svg"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/vsComposit.png"),
        tooltip: {
          name: "Visual Studio",
          type: "IDE",
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
    {
      skillName: "Switch SDK",
      iconData: {
        icon: require("./assets/images/ndiDesat.png"),
        saturatedIcon: require("./assets/images/ndi.png"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/ndiComposit.png"),
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
        icon: require("./assets/images/openglDesat.svg"),
        saturatedIcon: require("./assets/images/opengl.svg"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/glComposit.png"),
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
        icon: require("./assets/images/WebGL_LogoDeSat.svg"),
        saturatedIcon: require("./assets/images/WebGL_Logo.svg"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/glComposit.png"),
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
        icon: require("./assets/images/Discord-Logo-Color.svg"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/discordComposit.png"),
        tooltip: {
          name: "Discord API",
          type: "API (JS, PYTHON, C#)",
          proficiency: 5
        }
      }
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Julius-Maximilians University",
      logo: require("./assets/images/uniwue.png"),
      subHeader: "Games Engineering BSc",
      duration: "September 2019 - Current",
      desc: "Received highest grade for multiple Games Engineering projects:",
      descBullets: [
        "GameLab I: EmptySpaces",
        "GameLab II: Balancing Hub",
        "MovieMakingWithGameEngines: BrightnessBasedTextureLayering",
        "Seminar Current Trends in Games Engineering: Automated Animation of Creatures"
      ]
    },
    {
      schoolName: "Friedrich-List-Gymnasium Gemünden",
      logo: require("./assets/images/flg.jpg"),
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
      role: "Software Engineer",
      company: "Building Information Innovator GmbH",
      companylogo: require("./assets/images/bii2.png"),
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
      companylogo: require("./assets/images/uniwue.png"),
      date: "October 2020 – Present",
      desc: "Supported students at overcoming problems they face during the game development process.",
      descBullets: [
        "Explained basic and intermediate topics that the students brought up",
        "Created introductory tutorials on for unreal engine 4",
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
  subtitle:
    "GAMES AND TOOLS I DEVELOPED FOR THE BIG COURSES IN MY GAMES ENGINEERING BACHELOR",
  projects: [
    {
      video: require("./assets/videos/fractalWebSnippet.webm"),
      image: require("./assets/images/fractalEngineLogo.png"),
      projectName: "",
      projectDesc:
        "Hardware-oriented, specialised engine for the Nintendo Switch ™ console with a focus on compile-time-safe loading, use of hardware features and various graphics options. Currently a Minesweeper game is implemented as proof of concept",
      footerLink: [
        {
          name: "Watch WS21 Teaser",
          url: "https://www.youtube.com/watch?v=Gxc_A7myOg4"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      video: require("./assets/videos/HauntedForest.webm"),
      image: require("./assets/images/mmwge.png"),
      projectName: "BrightnessBasedTextureLayering",
      projectDesc:
        "This PostProcess effect uses the Unreal Engine 4 exposure system to create an artistic image from textures. Created in collaboration with four design students.",
      footerLink: [
        {
          name: "Download on Itch.io",
          url: "https://darkblizzard.itch.io/texturelayering"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      video: require("./assets/videos/EmptySpaces.webm"),
      image: require("./assets/images/emptySpaces.png"),
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
      image: require("./assets/images/balancingHub.png"),
      projectName: "Balancing Hub",
      projectDesc:
        'Balance your variables while playing with the "Balancing Hub" plugin for Unreal 4.24.3. Created in collaboration with Quirin Maier.',
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
    "GAMES AND PROJECTS THAT I MADE DURING GAME JAMS OR OTHER SMALLER TIME PERIODS",
  projects: [
    {
      video: require("./assets/videos/boids.webm"),
      image: require("./assets/images/boidLogo.png"),
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
      image: require("./assets/images/longLegs.png"),
      projectName: "Dada LongLegs",
      projectDesc:
        "This game is was submission the Franken Game Jam 2021. The theme was Growth.",
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
      image: require("./assets/images/TDCratos.png"),
      projectName: "TD Cratos",
      projectDesc:
        "This game started as self proposed 72H game challenge and introduced me to unity.",
      footerLink: [
        {
          name: "Download on Itch.io",
          url: "https://darkblizzard.itch.io/td-project"
        }
      ]
    }
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
      image: require("./assets/images/GE-logo.svg")
    },
    {
      name: "Daniel Götz",
      jobTitle: "COO and Software Engineer",
      organization: "Building Information Innovator GmbH",
      location: "Würzburg, Germany",
      website: "https://www.bii-gmbh.com/",
      email: "goetz@bii-gmbh.com",
      image: require("./assets/images/bii2.png")
    }
  ]
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
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
  subtitle2: "My Inbox is open for all.",
  number: "",
  email_address: "hi@pirminpfeifer.eu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  gameJams,
  referencesSection,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
