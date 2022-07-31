// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [{
        id: 1,
        title: "AutoCadMDK",
        category: "Class Library for AutoCad",
        img: require("@/assets/images/autocadmdk.png"),
        singleProjectHeader: {
            singleProjectTitle: "AutoCadMDK",
            singleProjectDate: "2022",
            singleProjectTag: "Class Library",
        },
        projectImages: [{
            id: 1,
            title: "AutoCadMDK",
            img: require("@/assets/images/autocadmdk.png"),
        }, ],
        projectInfo: {
            objectivesHeading: "Objective",
            objectivesDetails: "Create a data translator from a computer-aided design software to calculation software",
            technologies: [{
                title: "Tools & Technologies",
                techs: ["C#", "AutoCad SDK", ".NET Environment"],
            }, ],
            projectDetailsHeading: "Challenge",
            projectDetails: [{
                id: 1,
                details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
            }, ],
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
        },
        projectImages: [{
            id: 1,
            title: "VBS",
            img: require("@/assets/images/vbs.png"),
        }, ],
        projectInfo: {
            objectivesHeading: "Objective",
            objectivesDetails: "Have recommendations based on what you have already read ! ",
            technologies: [{
                title: "Tools & Technologies",
                techs: ["Vue", "Javascript", "I18n", "Vuetify"],
            }, ],
            projectDetailsHeading: "Challenge",
            projectDetails: [{
                id: 1,
                details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
            }, ],
        },
    },
    {
        id: 3,
        title: "MoVueDb",
        category: "Web Application",
        img: require("@/assets/images/movuedb.png"),
    },
    {
        id: 4,
        title: "Python Library app",
        category: "Python Application",
        img: require("@/assets/images/python_library_app.png"),
    },
    {
        id: 5,
        title: "Programme de Marche",
        category: "Java Application",
        img: require("@/assets/images/programme_marche.png"),
    },
];

export default projects;