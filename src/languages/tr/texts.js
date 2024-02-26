import emoji from "react-easy-emoji";
const data = {
  greeting: {
    username: "Saad Pasta",
    title: "Herkese merhaba, Ben Saad",
    subTitle: emoji(
      "JavaScript / Reactjs / Nodejs / React Native ve bazı diğer harika kütüphane ve framework'ler ile Web ve Mobil uygulamalar geliştirme deneyimine sahip tutkulu bir Full Stack Yazılım Geliştirici 🚀"
    ),
    resumeLink:
      "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Boşaltmak için butonu gizlemek
    displayGreeting: true // Bu bölümü gizlemek için false ayarlayın, varsayılan olarak true
  },
  skillsSectionF: {
    title: "Neler Yaparım",
    subTitle:
      "HER TEKNOLOJİ YI KEŞFETMEK İSTEYEN ÇILGIN FULL STACK GELİŞTİRİCİ",
    skills: [
      emoji(
        "⚡ Web ve mobil uygulamalarınız için son derece etkileşimli Front-end / Kullanıcı Arayüzleri geliştirin"
      ),
      emoji("⚡ Normal ve SPA Yığınlarında İlerici Web Uygulamaları (PWA)"),
      emoji(
        "⚡ Firebase/ AWS / Digital Ocean gibi üçüncü taraf servislerin entegrasyonu"
      )
    ]
  },
  educationInfo: {
    display: true, // Bu bölümü gizlemek için false ayarlayın, varsayılan olarak true
    schools: [
      {
        schoolName: "Harvard Üniversitesi",
        logo: require("../../assets/images/harvardLogo.png"),
        subHeader: "Bilgisayar Bilimlerinde Yüksek Lisans",
        duration: "Eylül 2017 - Nisan 2019",
        desc: "XXX araştırmasına katıldı ve 3 makale yayınladı.",
        descBullets: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        ]
      },
      {
        schoolName: "Stanford Üniversitesi",
        logo: require("../../assets/images/stanfordLogo.png"),
        subHeader: "Bilgisayar Bilimlerinde Lisans",
        duration: "Eylül 2013 - Nisan 2017",
        desc: "Programda ilk %10'a girdi. Yazılım Mühendisliği, Web Güvenliği, İşletim Sistemleri üzerine dersler aldı...",
        descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
      }
    ]
  },
  techStack: {
    viewSkillBars: true, // Beceriler Bölümünü göstermek için true ayarlayın
    experience: [
      {
        Stack: "Frontend/Tasarım", // Deneyim sahip olduğunuz yığın veya teknolojiyi ekleyin
        progressPercentage: "90%" // Göreceli yeterliliği yüzde cinsinden ekleyin
      },
      {
        Stack: "Backend",
        progressPercentage: "70%"
      },
      {
        Stack: "Programlama",
        progressPercentage: "60%"
      }
    ],
    displayCodersrank: false // true ayarlayarak codersrank rozetler bölümünü göstermek için değiştirin, varsayılan olarak false
  },
  workExperiences: {
    display: true, // workExperiences Bölümünü göstermek için true ayarlayın
    experience: [
      {
        role: "Yazılım Mühendisi",
        company: "Facebook",
        companylogo: require("../../assets/images/facebookLogo.png"),
        date: "Haziran 2018 – Şu Anda",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        descBullets: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        ]
      },
      {
        role: "Front-End Geliştirici",
        company: "Quora",
        companylogo: require("../../assets/images/quoraLogo.png"),
        date: "Mayıs 2017 – Mayıs 2018",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        role: "Yazılım Mühendisi Stajyeri",
        company: "Airbnb",
        companylogo: require("../../assets/images/airbnbLogo.png"),
        date: "Ocak 2015 – Eylül 2015",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ]
  },
  bigProjects: {
    title: "Büyük Projeler",
    subtitle:
      "TEKNOLOJİLERİNİ OLUŞTURMALARINA YARDIM ETTIĞIM BAZI STARTUP'LER VE ŞİRKETLER",
    projects: [
      {
        image: require("../../assets/images/saayaHealthLogo.webp"),
        projectName: "Saayahealth",
        projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        footerLink: [
          {
            name: "Websitesini Ziyaret Et",
            url: "http://saayahealth.com/"
          }
          //  buraya ekstra düğmeler ekleyebilirsiniz.
        ]
      },
      {
        image: require("../../assets/images/nextuLogo.webp"),
        projectName: "Nextu",
        projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        footerLink: [
          {
            name: "Websitesini Ziyaret Et",
            url: "http://nextu.se/"
          }
        ]
      }
    ],
    display: true // Bu bölümü gizlemek için false ayarlayın, varsayılan olarak true
  },
  achievementSection: {
    title: emoji("Başarılar ve Sertifikalar 🏆 "),
    subtitle:
      "Başarılar, Sertifikalar, Ödül Mektupları ve Yaptığım Bazı Harika Şeyler!",

    achievementsCards: [
      {
        title: "Google Code-In Finalisti",
        subtitle:
          "77 farklı ülkeden 4000 öğrenci arasından Google Code-in Finalisti olarak seçilen ilk Pakistanlı.",
        image: require("../../assets/images/codeInLogo.webp"),
        imageAlt: "Google Code-In Logo",
        footerLink: [
          {
            name: "Sertifika",
            url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
          },
          {
            name: "Ödül Mektubu",
            url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
          },
          {
            name: "Google Code-in Blogu",
            url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
          }
        ]
      },
      {
        title: "Google Assistant Eylemi",
        subtitle:
          "Dünya çapında 2 Milyar cihazda bulunan Google Assistant Eylemi JavaScript Guru'yu geliştirdi.",
        image: require("../../assets/images/googleAssistantLogo.webp"),
        imageAlt: "Google Assistant Action Logo",
        footerLink: [
          {
            name: "Google Assistant Eylemini Görüntüle",
            url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
          }
        ]
      },

      {
        title: "PWA Web Uygulama Geliştiricisi",
        subtitle: "PWA Web Uygulama Geliştirme için SMIT'ten Sertifika Aldı",
        image: require("../../assets/images/pwaLogo.webp"),
        imageAlt: "PWA Logo",
        footerLink: [
          {name: "Sertifika", url: ""},
          {
            name: "Final Projesi",
            url: "https://pakistan-olx-1.firebaseapp.com/"
          }
        ]
      }
    ],
    display: true // Bu bölümü gizlemek için false ayarlayın, varsayılan olarak true
  },
  blogSection: {
    title: "Bloglar",
    subtitle:
      "Cool stuff oluşturmayı seven biri olarak, öğrendiklerimi yazmak ve diğerlerine öğretmekten hoşlanırım.",
    displayMediumBlogs: "true", // Sabit kodlanmış olanlar yerine getirilen medium bloglarını göstermek için true ayarlayın
    blogs: [
      {
        url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
        title: "Google Assistant T-shirt ve $200 Google Bulut Kredisi Kazanın",
        description:
          "30 dakikadan az sürede bir Google Assistant Eylemi oluşturarak $200 ve Google Assistant T-shirt kazanmak ister misiniz?"
      },
      {
        url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
        title: "Neden REACT En İyisidir?",
        description:
          "React, Kullanıcı Arayüzü oluşturmak için bir JavaScript kütüphanesidir. Facebook ve bireysel geliştiriciler ve şirketler topluluğu tarafından sürdürülmektedir."
      }
    ],
    display: true // Bu bölümü gizlemek için false ayarlayın, varsayılan olarak true
  },
  talkSection: {
    title: "KONUŞMALAR",
    subtitle: emoji(
      "SINIRLI BİLGİMİ PAYLAŞMAYI VE KONUŞMACI ROZETİ ALMAYI SEVERİM 😅"
    ),

    talks: [
      {
        title: "Google Assistant Eylemleri Oluşturma",
        subtitle: "GDG DevFest Karachi 2019'da Codelab",
        slides_url: "https://bit.ly/saadpasta-slides",
        event_url: "https://www.facebook.com/events/2339906106275053/"
      }
    ],
    display: true // Set false to hide this section, defaults to true
  },
  podcastSection: {
    title: emoji("Podcast 🎙️"),
    subtitle: "KENDİMDEN VE TEKNOLOJİ HAKKINDA KONUŞMAYI SEVİYORUM",

    // Please Provide with Your Podcast embeded Link
    podcast: [
      "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
    ],
    display: true // Set false to hide this section, defaults to true
  },
  contactInfo: {
    title: emoji("Contact Me ☎️"),
    subtitle:
      "Bir projeyi tartışmak mı istiyorsunuz yoksa sadece merhaba mı demek istiyorsunuz? Mesaj kutum herkese açıktır.",
    number: "+92-0000000000",
    email_address: "saadpasta70@gmail.com"
  }
};

export {data};
