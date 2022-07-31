// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [{
        id: 1,
        title: "AutoCadMDK",
        category: "Class Library for AutoCad",
        img: require("@/assets/images/autocadmdk.png"),
    },
    {
        id: 2,
        title: "VBS (Vue Book Suggestion)",
        category: "Web Application",
        img: require("@/assets/images/vbs.png"),
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