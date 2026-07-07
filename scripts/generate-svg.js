const fs = require("fs");
const path = require("path");

console.log("=======================================");
console.log("   GitHub Portfolio SVG Generator");
console.log("=======================================\n");

// Files to verify
const files = [
    "assets/banner.svg",
    "assets/about.svg",
    "assets/terminal.svg",
    "assets/skills.svg",
    "assets/projects.svg",
    "assets/roadmap.svg",
    "assets/achievements.svg",
    "assets/footer.svg"
];

console.log("Checking SVG files...\n");

files.forEach(file => {

    if (fs.existsSync(file)) {
        console.log("✅ " + file);
    } else {
        console.log("❌ Missing: " + file);
    }

});

console.log("\n=======================================");
console.log("Verification Completed");
console.log("=======================================\n");

// Count SVGs
const svgCount = files.filter(file => fs.existsSync(file)).length;

console.log(`SVG Files : ${svgCount}/${files.length}`);

if (svgCount === files.length) {
    console.log("\n🚀 Portfolio Assets Ready.");
} else {
    console.log("\n⚠ Some SVG files are missing.");
}