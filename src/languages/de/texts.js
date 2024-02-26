import emoji from "react-easy-emoji";
const data = {
  greeting: {
    username: "Saad Pasta",
    title: "Hallo zusammen, ich bin Saad",
    subTitle: emoji(
      "Ein leidenschaftlicher Full Stack Softwareentwickler 🚀 mit Erfahrung im Bau von Web- und Mobilanwendungen mit JavaScript / Reactjs / Nodejs / React Native und einigen anderen coolen Bibliotheken und Frameworks."
    ),
    resumeLink:
      "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Button ausblenden, um es leer zu setzen
    displayGreeting: true // Setze false, um diesen Abschnitt zu verbergen, Standardwert ist true
  },
  skillsSectionF: {
    title: "Was ich mache",
    subTitle:
      "VERÜCKTER FULL STACK ENTWICKLER, DER JEDEN TECH STACK ERKUNDEN WILL",
    skills: [
      emoji(
        "⚡ Entwickle hochinteraktive Frontend / Benutzeroberflächen für Ihre Web- und Mobilanwendungen"
      ),
      emoji("⚡ Progressive Webanwendungen ( PWA ) in normalen und SPA-Stacks"),
      emoji(
        "⚡ Integration von Drittanbieterdiensten wie Firebase / AWS / Digital Ocean"
      )
    ]
  },
  educationInfo: {
    display: true, // Auf false setzen, um diesen Abschnitt auszublenden, Standardwert ist true
    schools: [
      {
        schoolName: "Harvard-Universität",
        logo: require("../../assets/images/harvardLogo.png"),
        subHeader: "Master of Science in Informatik",
        duration: "September 2017 - April 2019",
        desc: "Teilnahme an der Forschung von XXX und Veröffentlichung von 3 Papieren.",
        descBullets: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        ]
      },
      {
        schoolName: "Stanford-Universität",
        logo: require("../../assets/images/stanfordLogo.png"),
        subHeader: "Bachelor of Science in Informatik",
        duration: "September 2013 - April 2017",
        desc: "Unter den besten 10% im Programm. Kurse zu Softwaretechnik, Web-Sicherheit, Betriebssystemen, ...",
        descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
      }
    ]
  },
  techStack: {
    viewSkillBars: true, // Setze es auf true, um den Abschnitt "Fähigkeiten" anzuzeigen
    experience: [
      {
        Stack: "Frontend/Design",
        progressPercentage: "90%"
      },
      {
        Stack: "Backend",
        progressPercentage: "70%"
      },
      {
        Stack: "Programmierung",
        progressPercentage: "60%"
      }
    ],
    displayCodersrank: false // Setze true, um den Abschnitt "codersrank badges" anzuzeigen, Benutzernamen in src/containers/skillProgress/skillProgress.js:17:62 ändern, Standardwert ist false
  },
  workExperiences: {
    display: true, // Setze es auf true, um den Arbeitsbereich anzuzeigen
    experience: [
      {
        role: "Softwareentwickler",
        company: "Facebook",
        companylogo: require("../../assets/images/facebookLogo.png"),
        date: "Juni 2018 – Heute",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        descBullets: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        ]
      },
      {
        role: "Front-End Entwickler",
        company: "Quora",
        companylogo: require("../../assets/images/quoraLogo.png"),
        date: "Mai 2017 – Mai 2018",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        role: "Softwareentwickler Praktikant",
        company: "Airbnb",
        companylogo: require("../../assets/images/airbnbLogo.png"),
        date: "Jan 2015 – Sep 2015",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ]
  },
  bigProjects: {
    title: "Große Projekte",
    subtitle:
      "EINIGE STARTUPS UND UNTERNEHMEN, DIE ICH BEIM AUFBAU IHRER TECHNIK UNTERSTÜTZT HABE",
    projects: [
      {
        image: require("../../assets/images/saayaHealthLogo.webp"),
        projectName: "Saayahealth",
        projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        footerLink: [
          {
            name: "Website besuchen",
            url: "http://saayahealth.com/"
          }
        ]
      },
      {
        image: require("../../assets/images/nextuLogo.webp"),
        projectName: "Nextu",
        projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        footerLink: [
          {
            name: "Website besuchen",
            url: "http://nextu.se/"
          }
        ]
      }
    ],
    display: true // Setze false, um diesen Abschnitt auszublenden, Standardwert ist true
  },
  achievementSection: {
    title: emoji("Leistungen und Zertifizierungen 🏆 "),
    subtitle:
      "Errungenschaften, Zertifizierungen, Auszeichnungsschreiben und einige coole Dinge, die ich gemacht habe!",
    achievementsCards: [
      {
        title: "Google Code-In Finalist",
        subtitle:
          "Erster Pakistani, der als Google Code-in Finalist aus 4000 Studenten aus 77 verschiedenen Ländern ausgewählt wurde.",
        image: require("../../assets/images/codeInLogo.webp"),
        imageAlt: "Google Code-In Logo",
        footerLink: [
          {
            name: "Zertifizierung",
            url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
          },
          {
            name: "Auszeichnungsschreiben",
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
          "Entwickelte eine Google Assistant Action JavaScript Guru, die auf 2 Milliarden Geräten weltweit verfügbar ist.",
        image: require("../../assets/images/googleAssistantLogo.webp"),
        imageAlt: "Google Assistant Action Logo",
        footerLink: [
          {
            name: "Google Assistant Action anzeigen",
            url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
          }
        ]
      },

      {
        title: "PWA Web App Entwickler",
        subtitle:
          "Abschluss der Zertifizierung von SMIT für die Entwicklung von PWA-Webanwendungen",
        image: require("../../assets/images/pwaLogo.webp"),
        imageAlt: "PWA Logo",
        footerLink: [
          {name: "Zertifizierung", url: ""},
          {
            name: "Abschlussprojekt",
            url: "https://pakistan-olx-1.firebaseapp.com/"
          }
        ]
      }
    ],
    display: true // Setze false, um diesen Abschnitt auszublenden, Standardwert ist true
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Mit Liebe zum Entwickeln cooler Dinge schreibe ich gerne und lehre andere, was ich gelernt habe.",
    displayMediumBlogs: "true", // Setze true, um abgerufene Medium-Blogs anstelle von festcodierten anzuzeigen
    blogs: [
      {
        url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
        title:
          "Gewinne ein Google Assistant T-Shirt und 200 $ in Google Cloud-Guthaben",
        description:
          "Möchten Sie $200 und ein Google Assistant T-Shirt gewinnen, indem Sie eine Google Assistant Action in weniger als 30 Minuten erstellen?"
      },
      {
        url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
        title: "Warum ist REACT das Beste?",
        description:
          "React ist eine JavaScript-Bibliothek zum Erstellen von Benutzeroberflächen. Sie wird von Facebook und einer Gemeinschaft von Einzelpersonen und Unternehmen gepflegt."
      }
    ],
    display: true // Setze false, um diesen Abschnitt auszublenden, Standardwert ist true
  },
  talkSection: {
    title: "VORTRÄGE",
    subtitle: emoji(
      "ICH LIEBE ES, MEIN BEGRENZTES WISSEN ZU TEILEN UND EINEN SPRECHERABZEICHEN ZU ERHALTEN 😅"
    ),

    talks: [
      {
        title: "Build Actions For Google Assistant",
        subtitle: "Codelab bei GDG DevFest Karachi 2019",
        slides_url: "https://bit.ly/saadpasta-slides",
        event_url: "https://www.facebook.com/events/2339906106275053/"
      }
    ],
    display: true // Setze false, um diesen Abschnitt auszublenden, Standardwert ist true
  },
  podcastSection: {
    title: emoji("Podcast 🎙️"),
    subtitle: "ICH LIEBE ES, ÜBER MICH SELBST UND TECHNOLOGIE ZU SPRECHEN",

    // Bitte geben Sie Ihren eingebetteten Podcast-Link an
    podcast: [
      "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
    ],
    display: true // Setze false, um diesen Abschnitt auszublenden, Standardwert ist true
  },
  contactInfo: {
    title: emoji("Kontaktiere mich ☎️"),
    subtitle:
      "Möchten Sie über ein Projekt sprechen oder einfach nur hallo sagen? Mein Posteingang steht allen offen.",
    number: "+92-0000000000",
    email_address: "saadpasta70@gmail.com"
  },
  navbar: {
    skills: "Fähigkeiten",
    workExperiences: "Berufserfahrung",
    openSource: "Open Source",
    achievements: "Leistungen",
    blogs: "Blogs",
    talk: "Vorträge",
    contactMe: "Kontaktiere mich"
  },
  buttons:{
    contact: "Kontaktiere mich",
    moreProjects: "Weitere Projekte",
    seeResume: "Lebenslauf ansehen"
  }
};

export {data};
