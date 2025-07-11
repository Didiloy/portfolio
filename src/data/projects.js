// Projects data.

const projects = [
  {
    id: 9,
    title: "Spotwrap Next",
    category: "Desktop Application",
    img: require("@/assets/images/spotwrapnext/home.png"),
    singleProjectHeader: {
      singleProjectTitle: "Spotwrap Next",
      singleProjectDate: "2025",
      singleProjectTag: "Desktop Application",
      singleProjectLink: "https://github.com/Didiloy/spotwrap-next",
    },
    projectImages: [
      {
        id: 1,
        title: "Spotwrap Next",
        img: require("@/assets/images/spotwrapnext/home.png"),
      },
      {
        id: 2,
        title: "Spotwrap Next",
        img: require("@/assets/images/spotwrapnext/search.png"),
      },
      {
        id: 3,
        title: "Spotwrap Next",
        img: require("@/assets/images/spotwrapnext/album.png"),
      },
      {
        id: 4,
        title: "Spotwrap Next",
        img: require("@/assets/images/spotwrapnext/artist.png"),
      },
      {
        id: 5,
        title: "Spotwrap Next",
        img: require("@/assets/images/spotwrapnext/settings.png"),
      },
    ],
    projectInfo: {
      objectivesHeading: "Objective",
      objectivesDetails:
        "Create a cross platform desktop application to download music and have notifications when an artist release something new.",
      technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Golang", "Wails", "Vue", "Vite", "Spotdl"],
        },
      ],
      projectDetailsHeading: "Description",
      projectDetails: [
        {
          id: 1,
          details:
            " I created this application because I wanted to download my favorite tracks from Spotify and never miss a release from the artists I follow. To make it happen, I chose Vue for the frontend and golang for the backend so it runs on Windows and Linux without hassle. Under the hood it talks to the Spotify Web API for search and all the songs data, and it uses a lightweight local database to remember your followed artists. Whenever an artist you’re tracking puts out something new, the app pushes a desktop notification. It can also automatically download the new songs in background mode.",
        },
      ],
    },
  },
  {
    id: 8,
    title: "GameClock",
    category: "Desktop Application",
    img: require("@/assets/images/gameclock1.png"),
    singleProjectHeader: {
      singleProjectTitle: "GameClock",
      singleProjectDate: "2024",
      singleProjectTag: "Desktop Application",
      singleProjectLink: "https://github.com/Didiloy/Gameclock",
    },
    projectImages: [
      {
        id: 1,
        title: "GameClock",
        img: require("@/assets/images/gameclock1.png"),
      },
      {
        id: 2,
        title: "GameClock",
        img: require("@/assets/images/gameclock2.png"),
      },
      {
        id: 3,
        title: "GameClock",
        img: require("@/assets/images/gameclock3.png"),
      },
      {
        id: 4,
        title: "GameClock",
        img: require("@/assets/images/gameclock4.png"),
      },
      {
        id: 5,
        title: "GameClock",
        img: require("@/assets/images/gameclock5.png"),
      },
      {
        id: 6,
        title: "GameClock",
        img: require("@/assets/images/gameclock6.png"),
      },
    ],
    projectInfo: {
      objectivesHeading: "Objective",
      objectivesDetails:
        "Create a cross platform desktop application to have statistics about my playtime",
      technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Vue",
            "Firebase",
            "Electron",
            "Vite",
            "PrimeVue",
            "SteamGridDB API",
          ],
        },
      ],
      projectDetailsHeading: "Description",
      projectDetails: [
        {
          id: 1,
          details:
            "I created this application because I wanted to know how much time I was spending gaming. I also wanted to know which games I was playing the most ? By myself or with friends ? Was I enjoying it or not ? And a ton of other statistics. I used Vue because it's a framework I'm comfortable with and with Electron it's easy to create cross platform desktop applications. I used Firebase to store the data because it have a generous free plan and everyone with a google account can create their own database to use in the app. You can add games to the application and start a timer when you start playing, when you finished you simply stop the timer and enter a new session !",
        },
      ],
    },
  },
  {
    id: 7,
    title: "SpotWrap",
    category: "Desktop Application",
    img: require("@/assets/images/spotwrap.png"),
    singleProjectHeader: {
      singleProjectTitle: "SpotWrap",
      singleProjectDate: "2023",
      singleProjectTag: "Desktop Application",
      singleProjectLink: "https://github.com/Didiloy/spotwrap",
    },
    projectImages: [
      {
        id: 1,
        title: "SpotWrap",
        img: require("@/assets/images/spotwrap.png"),
      },
      {
        id: 2,
        title: "SpotWrap",
        img: require("@/assets/images/spotwrap2.png"),
      },
      {
        id: 3,
        title: "SpotWrap",
        img: require("@/assets/images/spotwrap3.png"),
      },
    ],
    projectInfo: {
      objectivesHeading: "Objective",
      objectivesDetails:
        "Create a cross platform graphical wrapper around Spotdl and Savify",
      technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Python", "PySide6", "PyInstaller", "QT"],
        },
      ],
      projectDetailsHeading: "Description",
      projectDetails: [
        {
          id: 1,
          details:
            "I created this application because I personally use Spotdl to download music. Spotdl is a command-line based application and I wanted a graphical version to simplify the process. I chose to use the QT framework because I wanted to create a cross-platform application. I really wanted the application to be cross-platform because I wanted everyone to be able to use it. I used Python because that's the language Spotdl is written in. You can choose the file format you want to download and the quality of the music. You can also choose the folder in which the files will be downloaded.",
        },
      ],
    },
  },
  {
    id: 6,
    title: "DRSSR",
    category: "Desktop Application",
    img: require("@/assets/images/drssr.png"),
    singleProjectHeader: {
      singleProjectTitle: "DRSSR",
      singleProjectDate: "2023",
      singleProjectTag: "Desktop Application",
      singleProjectLink: "https://github.com/Didiloy/DRSSR",
    },
    projectImages: [
      {
        id: 1,
        title: "DRSSR",
        img: require("@/assets/images/drssr.png"),
      },
      {
        id: 2,
        title: "DRSSR",
        img: require("@/assets/images/drssr1.png"),
      },
      {
        id: 3,
        title: "DRSSR",
        img: require("@/assets/images/drssr2.png"),
      },
    ],
    projectInfo: {
      objectivesHeading: "Objective",
      objectivesDetails:
        "Create a simple RSS reader to get used to the GTK toolkit",
      technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Python", "GTK4", "LibAdwaita", "PyGObject"],
        },
      ],
      projectDetailsHeading: "Description",
      projectDetails: [
        {
          id: 1,
          details:
            "I created this application because I wanted to learn how to use the GTK toolkit. I find the user interfaces produced with this tool very beautiful and I wanted to create one too. I also wanted to use PYTHON because it's a language I like to work with, so I looked for a wrapper that would allow me to use this language with GTK. I decided to make a simple RSS reader because I find existing applications complex and full of features too advanced for a user who only wants a platform to gather his favorite feeds.",
        },
      ],
    },
  },
  {
    id: 1,
    title: "AutoCadMDK",
    category: "Class Library for AutoCad",
    img: require("@/assets/images/autocadmdk.png"),
    singleProjectHeader: {
      singleProjectTitle: "AutoCadMDK",
      singleProjectDate: "2022",
      singleProjectTag: "Class Library",
    },
    projectImages: [
      {
        id: 1,
        title: "AutoCadMDK",
        img: require("@/assets/images/autocadmdk.png"),
      },
      {
        id: 2,
        title: "AutoCadMDK",
        img: require("@/assets/images/autocadmdk2.png"),
      },
      {
        id: 3,
        title: "AutoCadMDK",
        img: require("@/assets/images/autocadmdk3.png"),
      },
    ],
    projectInfo: {
      objectivesHeading: "Objective",
      objectivesDetails:
        "Create a data translator from a computer-aided design software to calculation software",
      technologies: [
        {
          title: "Tools & Technologies",
          techs: ["C#", "AutoCad SDK", ".NET Environment"],
        },
      ],
      projectDetailsHeading: "Description",
      projectDetails: [
        {
          id: 1,
          details:
            "I developed this project for the company Kadran Ingénierie as part of my internship at the end of my DUT. This project allowed me to learn the C# language and the .net environment. I could also discover the Autocad software and learn how to manipulate it through its sdk. I also used the autocad sdk to create objects and display them on the plan. I was able to manipulate excel and xml files via the C# language as well as make calls to remote api. It's a big project that helped me to perfect my mastery of object oriented programming.",
        },
      ],
    },
  },
  {
    id: 2,
    title: "VBS (Vue Book Suggestion)",
    category: "Web Application",
    img: require("@/assets/images/vbs.png"),
    singleProjectHeader: {
      singleProjectTitle: "VBS (Vue Book Suggestion)",
      singleProjectDate: "2022",
      singleProjectTag: "Web Application",
      singleProjectLink: "http://vue-book-suggestion.netlify.app",
    },
    projectImages: [
      {
        id: 1,
        title: "VBS",
        img: require("@/assets/images/vbs.png"),
      },
      {
        id: 2,
        title: "VBS",
        img: require("@/assets/images/vbs2.png"),
      },
      {
        id: 3,
        title: "VBS",
        img: require("@/assets/images/vbs3.png"),
      },
      {
        id: 4,
        title: "VBS",
        img: require("@/assets/images/vbs4.png"),
      },
      {
        id: 5,
        title: "VBS",
        img: require("@/assets/images/vbs5.png"),
      },
    ],
    projectInfo: {
      objectivesHeading: "Objective",
      objectivesDetails:
        "Have recommendations based on what you have already read ! https://vue-book-suggestion.netlify.app/",
      technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Vue", "Javascript", "I18n", "Vuetify", "Google Book Api"],
        },
      ],
      projectDetailsHeading: "Description",
      projectDetails: [
        {
          id: 1,
          details:
            "I built this project to learn the use of the Vue JS framework. So I decided to rebuilt from the ground the same application I had made in python. I went more in depth in the idea than I did in the python application. In this application I implemented the search feature using the Google Book Api. The application make recommendation in function of the books you added in your library.",
        },
      ],
    },
  },
  {
    id: 3,
    title: "MoVueDb",
    category: "Web Application",
    img: require("@/assets/images/movuedb.png"),
    singleProjectHeader: {
      singleProjectTitle: "MoVueDb",
      singleProjectDate: "2022",
      singleProjectTag: "Web Application",
    },
    projectImages: [
      {
        id: 1,
        title: "MoVueDb",
        img: require("@/assets/images/movuedb.png"),
      },
      {
        id: 2,
        title: "MoVueDb",
        img: require("@/assets/images/movuedb2.png"),
      },
      {
        id: 3,
        title: "MoVueDb",
        img: require("@/assets/images/movuedb3.png"),
      },
      {
        id: 4,
        title: "MoVueDb",
        img: require("@/assets/images/movuedb4.png"),
      },
    ],
    projectInfo: {
      objectivesHeading: "Objective",
      objectivesDetails:
        "Search movie or TV shows and see details about them. Watch trailer and add movies to your favorite list !",
      technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Vue", "Javascript", "Materialize CSS"],
        },
      ],
      projectDetailsHeading: "Description",
      projectDetails: [
        {
          id: 1,
          details:
            "I've built this web application with Vue Js as a school project with a classmate. It is with this project that I learned Vue Js and Materialize CSS. I use the IMDB Api to fetch the movies and Tvs shows informations. The application also use the locale storage to store movies or Tvs shows as favorite.",
        },
      ],
    },
  },
  {
    id: 4,
    title: "Python Library app",
    category: "Python Application",
    img: require("@/assets/images/python_library_app.png"),
    singleProjectHeader: {
      singleProjectTitle: "Python Library App",
      singleProjectDate: "2021",
      singleProjectTag: "Python Desktop Application",
    },
    projectImages: [
      {
        id: 1,
        title: "Python Library App",
        img: require("@/assets/images/python_library_app.png"),
      },
    ],
    projectInfo: {
      objectivesHeading: "Objective",
      objectivesDetails:
        "Have recommendations based on what you have already read ! ",
      technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Python", "PyQt5", "Google Book Api"],
        },
      ],
      projectDetailsHeading: "Description",
      projectDetails: [
        {
          id: 1,
          details:
            "I wanted an application capable of suggest books in function of what you've already read. So I implemented a search function using the google books api. You can add books that you've already read in your library, which is stocked in a json file on your machine. The application recommend books from the same author and of the same type of a random selected book in your library.",
        },
      ],
    },
  },
  {
    id: 5,
    title: "Programme de Marche",
    category: "Java Application",
    img: require("@/assets/images/programme_marche.png"),
    singleProjectHeader: {
      singleProjectTitle: "Programme de Marche",
      singleProjectDate: "2021",
      singleProjectTag: "Java Desktop Application",
    },
    projectImages: [
      {
        id: 1,
        title: "Programme de marche",
        img: require("@/assets/images/programme_marche.png"),
      },
    ],
    projectInfo: {
      objectivesHeading: "Objective",
      objectivesDetails:
        "Be able to see graphics about the evolution of your wheight, time you spent walking and distance",
      technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Java", "JFreeCharts", "Swing"],
        },
      ],
      projectDetailsHeading: "Description",
      projectDetails: [
        {
          id: 1,
          details:
            "The goal of this application is to help people who regularly practice walking to visualize their walking times and distances. The design of this application was made in Java. I also conceived this application to learn how to master java and the MVC design pattern, because I had just been initiated to object-oriented programming at school.",
        },
      ],
    },
  },
];

export default projects;
