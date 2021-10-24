const projectsData = {
    optimizer: {
        title: "Optimizer",
        live: "https://optimized-b2358.web.app",
        code: "https://github.com/NightShop/personalWebToolV2",
        imageUrl: "optimizer",
        description: `Succesor of Personal Web Tool V1 also made for personal development. Data is stored
        with Cloud Firestore (NoSQL) and authentication is set with Firebase Authentication. Each account has acces to his data. 
        Blog is visible to all but posts can only be edited from admin account directly
        from site. I used React, Webpack, Tailwind. It's mobile friendly.`,
        tags: ["HTML", "JavaScript", "Firebase", "tailwindcss", "React"],
    },
    wheresWaldo: {
        title: "Where's Waldo",
        live: "https://whereswaldo-f02d4.web.app/",
        code: "https://github.com/NightShop/wheresWaldo",
        imageUrl: "wheresWaldo-small",
        description: `Made with React and Firestore Database. Deployed on Firebase Hosting.
        All game data is stored on Firebase, new levels can be added with updating only database
        through Firebase Console. Top scores list is included. It is mobile friendly.
        You play by selecting a level with characters to find shown at the top. Fastest players with their times are shown on leaderboard.`,
        tags: ["HTML", "CSS", "JavaScript", "Firebase", "React", "Webpack"],
    },
    personalWebTool: {
        title: "Personal Web Tool",
        live: "https://imgur.com/a/FDV6jg6",
        code: "https://github.com/NightShop/PersonalWebTool_V1.2",
        imageUrl: "https://i.imgur.com/Nnzd0bM.png",
        description: `Project made in VS with C#, MVC pattern. 
        It had a simple authorization (hashed password saved in code) for admin area. It contains CRUD methods.
        It has publicly accesible blog with categories filtering and privately accesible blog editor with simple custom cms,
        blog categories editor, gratefullness diary and habits tracker with which you can create habits to which you assign points
        and sum is calculated for each day (CRUD functions). Project is not deployed, only screenshots are available.
        
        Data is stored in SQL with Entity Framework.`,
        tags: ["C#", ".NET", "Entity Framework"],
    },
    toDo: {
        title: "To Do",
        live: "https://to-do-list-exercise-93187.web.app/",
        code: "https://github.com/NightShop/To-Do-Project",
        imageUrl: "toDo",
        description: `Project I made for tracking goals. It has categories
        and filtering, user accounts with connected data. It is made only for mobile.`,
        tags: ["HTML", "CSS", "JavaScript", "Webpack", "Firebase"],
    },
    pixelBoy: {
        title: "Pixel Boy Doodle",
        live: "https://nightshop.github.io/Pixel-Boy-Doodles/",
        code: "https://github.com/NightShop/Pixel-Boy-Doodles",
        imageUrl: "pixelBoy",
        description: "Cute little drawing game in pixel style.",
        tags: ["HTML", "CSS", "JavaScript"],
    },
};

export default projectsData;
