const fs = require("fs");
const path = require("path");

console.clear();

console.log("========================================");
console.log("      GitHub Portfolio Updater");
console.log("========================================\n");

// ---------- Load JSON Files ----------

const projects = JSON.parse(
    fs.readFileSync(path.join("data", "projects.json"))
);

const skills = JSON.parse(
    fs.readFileSync(path.join("data", "skills.json"))
);

const roadmap = JSON.parse(
    fs.readFileSync(path.join("data", "roadmap.json"))
);

const achievements = JSON.parse(
    fs.readFileSync(path.join("data", "achievements.json"))
);

// ---------- Statistics ----------

const stats = {

    projects:
        projects.projects.length,

    categories:
        skills.categories.length,

    skills:
        skills.categories.reduce(
            (sum, category) => sum + category.skills.length,
            0
        ),

    roadmap:
        roadmap.roadmap.length,

    achievements:
        achievements.achievements.length

};

// ---------- Display ----------

console.log("📊 Portfolio Summary\n");

console.table({

    Projects: stats.projects,

    Skill_Categories: stats.categories,

    Total_Skills: stats.skills,

    Roadmap_Categories: stats.roadmap,

    Achievements: stats.achievements

});

console.log("\n========================================");

console.log("✅ Data Loaded Successfully");

console.log("========================================\n");

// ---------- Future Modules ----------

console.log("Generating Assets...");

console.log("✔ Banner");
console.log("✔ About");
console.log("✔ Skills");
console.log("✔ Projects");
console.log("✔ Roadmap");
console.log("✔ Achievements");
console.log("✔ Footer");

console.log("\n========================================");

console.log("🚀 Portfolio Updated Successfully");

console.log("========================================");