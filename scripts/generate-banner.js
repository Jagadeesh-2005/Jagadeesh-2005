const fs = require("fs");
const config = require("./config");

const {
    profile,
    theme,
    banner
} = config;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg"
     width="${banner.width}"
     height="${banner.height}"
     viewBox="0 0 ${banner.width} ${banner.height}">

<defs>

<linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
<stop offset="0%" stop-color="${theme.background}"/>
<stop offset="50%" stop-color="${theme.secondary}"/>
<stop offset="100%" stop-color="${theme.primary}"/>
</linearGradient>

<filter id="glow">
<feGaussianBlur stdDeviation="6" result="blur"/>
<feMerge>
<feMergeNode in="blur"/>
<feMergeNode in="SourceGraphic"/>
</feMerge>
</filter>

<style>
.title{
fill:white;
font-size:70px;
font-family:Segoe UI;
font-weight:bold;
}

.subtitle{
fill:${theme.primary};
font-size:30px;
font-family:Segoe UI;
}

.small{
fill:white;
font-size:22px;
font-family:Consolas;
}
</style>

</defs>

<rect
width="100%"
height="100%"
fill="url(#bg)"
/>

<!-- Background Grid -->

<g opacity=".12">

${Array.from({length:40})
.map((_,i)=>
`<line x1="${i*40}" y1="0"
x2="${i*40}" y2="500"
stroke="white"/>`).join("")}

${Array.from({length:15})
.map((_,i)=>
`<line x1="0" y1="${i*40}"
x2="1600" y2="${i*40}"
stroke="white"/>`).join("")}

</g>

<!-- Animated Circles -->

<circle cx="180" cy="120" r="12" fill="${theme.primary}">
<animate attributeName="cy"
values="120;80;120"
dur="4s"
repeatCount="indefinite"/>
</circle>

<circle cx="1450" cy="360" r="10" fill="${theme.accent}">
<animate attributeName="cy"
values="360;320;360"
dur="5s"
repeatCount="indefinite"/>
</circle>

<circle cx="1350" cy="120" r="8" fill="${theme.secondary}">
<animate attributeName="cy"
values="120;160;120"
dur="6s"
repeatCount="indefinite"/>
</circle>

<!-- Title -->

<text
x="800"
y="170"
text-anchor="middle"
class="title"
filter="url(#glow)">

${profile.name}

</text>

<!-- Subtitle -->

<text
x="800"
y="230"
text-anchor="middle"
class="subtitle">

${profile.title}

</text>

<!-- Tech -->

<text
x="800"
y="280"
text-anchor="middle"
class="small">

Python • Java • Machine Learning • Flask • AI

</text>

<!-- Status -->

<text
x="800"
y="360"
text-anchor="middle"
fill="#00FF88"
font-size="24"
font-family="Consolas">

● Building Intelligent Applications

<animate
attributeName="opacity"
values="1;.3;1"
dur="2s"
repeatCount="indefinite"/>

</text>

</svg>
`;

if (!fs.existsSync("assets")) {
    fs.mkdirSync("assets");
}

fs.writeFileSync("assets/banner.svg", svg);

console.log("✅ banner.svg generated successfully.");