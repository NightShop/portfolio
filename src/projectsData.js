const projectsData = {
    optimizer: {
        title: "Optimizer",
        live: "https://optimized-b2358.web.app",
        code: "https://github.com/NightShop/personalWebToolV2",
        imageUrl: "optimizer",
        description: `Site I made for myself for personal development. Data is stored
        with Firestore and authentication is set with Firebase AUTH. Each account has acces to his documents. Blog is visible to all but
        posts can only be edited from admin account directly
        from site. I used React, Webpack, Tailwind. It's mobile friendly.`,
        tags: ["html", "javascript", "firebase", "tailwind", "react"],
    },
    wheresWaldo: {
        title: "Where's Waldo",
        live: "https://whereswaldo-f02d4.web.app/",
        code: "https://github.com/NightShop/wheresWaldo",
        imageUrl: "wheresWaldo-small",
        description: `Made with React and Firestore Database. Deployed on Firebase Hosting.
        All game data is stored on Firebase, new levels can be added with only updating database
        through Firebase Console. Top scores list is included. It is mobile friendly`,
        tags: ["html", "css", "javascript", "firebase", "react", "webpack"],
    },
    personalWebTool: {
        title: "predecessor of Optimizer",
        live: "/",
        code: "https://github.com/NightShop/PersonalWebTool_V1.2",
        imageUrl: "https://i.imgur.com/Nnzd0bM.png",
        description: `First substancial project I made in VS with C#, MVC pattern. 
        It had a simple authorization (hashed password saved in code) for admin area. It contains CRUD methods.
        It has publicly accesible blog with categories filtering and privately accesible: \n
        -blog editor -> simple custom cms
        -blog categories editor -> CRUD
        -gratefullness diary -> CRUD
        -habits tracker -> creating habits to which you assign points and sum is calculated for each day.
        
        Data is stored in SQL with Entity Framework.`,
        tags: ["csharp", ".NET", "ENTITY FRAMEWORK"],
    },
    toDo: {
        title: "To Do",
        live: "https://to-do-list-exercise-93187.web.app/",
        code: "https://github.com/NightShop/To-Do-Project",
        imageUrl: "toDo",
        description: `Project I made for tracking goals. It has categories
        and filtering, user accounts with connected data. It is made only for mobile.`,
        tags: ["html", "css", "javascript", "webpack", "firebase"],
    },
    pixelBoy: {
        title: "Pixel Boy Doodle",
        live: "https://nightshop.github.io/Pixel-Boy-Doodles/",
        code: "https://github.com/NightShop/Pixel-Boy-Doodles",
        imageUrl: "pixelBoy",
        description: "Cute little drawing game in pixel style.",
        tags: ["html", "css", "javascript"],
    },
};

export default projectsData;
