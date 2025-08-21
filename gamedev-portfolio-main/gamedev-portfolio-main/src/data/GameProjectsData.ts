import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Gun for All", "img/projects/gun-for-all-icon.png", 
    `
    <div class="paragraph">
     <strong>Gun for All</strong> is a roguelike platformer game that makes use of multiple system windows to create unique gameplay challenges. It features a dynamic combat system, procedurally generated levels, and a variety of enemies and obstacles to overcome.
        <br/><br/>This game was started during my time at university as a way to explore unconventional game mechanics as part of my final year project.
        <br/><br/> It is currently in <strong>active development</strong> and will later include many more features and improvements.
        <br/><br/> Below is gameplay footage of the early prototype:
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/AL_4kay2vVw" frameborder="0"></iframe>
    </div>
    <div class="paragraph center">
        <a href="https://github.com/Omega3713/gun-for-all" target="_blank"><img src="img/projects/github-logo.png" alt="GitHub badge" /></a>
    </div>


    <div class="paragraph center">
        <div class="notice">
            Read my <a class="download-link" href="d/Gun_for_All__Final_ (1).pdf" target="_blank">project report</a> for a comprehensive overview of the development process.
        </div>
    </div>
    `, "#23bd69", true),
    new ProjectData("project-2", "Escape the Aisle", "img/projects/escape-the-aisle-icon.png", `
    <div class="paragraph">
        <strong>Escape the Aisle</strong> is a project started by myself, and 3 other university students.
        <br/>It is a 3D survival horror game set in an uncanny almost supernatural environment, haunted by malevolent entities. Players must navigate through the eerie aisles, scavenging for supplies while avoiding threats to escape.
        <br/>The game features a retro pixellated style to emulate the horror games of the late 90s
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/escape-the-aisle-screenshot.png" alt="Escape the Aisle Screenshot" />
    </div>

    <div class="paragraph center">
        <a href="https://github.com/NicolasAcosta04/ECS657U-GameDev-PP1.1_GroupF" target="_blank"><img src="img/projects/github-logo.png" alt="GitHub badge" /></a>
    </div>

    <div class="paragraph">
        In this project, I was responsible for various aspects of development, including:
        <ul>
        <li>Enemy Behaviour & AI</li>
        <li>Terrain Navigation & Pathfinding</li>
        <li>Sound Design</li>
        </ul>
    </div>

    <div class="paragraph">
    <div class="notice">
        Playable build available <a href="https://nicolasacosta04.github.io/PP1.1_GroupF_Builds/Build%20v0.7" target="_blank">here</a>.
    </div>
    </div>

    `, "#5a78af"),
    /*new ProjectData("project-3", "Drawing Overload", "img/projects/project-3-icon.png", `
    <div class="paragraph">
        <strong>Drawing Overload</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
        <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@miphotography">Miesha Maiden</a>.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Playable in the browser (WebGL) on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
    </div>
    `, "#383838"),
    new ProjectData("project-4", "Eugeneable", "img/projects/project-4-icon.png", `
    <div class="paragraph">
    <strong>Eugeneable</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
    <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@neo8iam">NEOSiAM 2020</a>.
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
    </div>
    `, "#e80fb7"),
    new ProjectData("project-5", "Cloud Drew Land", "img/projects/project-5-icon.png", `
    <div class="paragraph">
        <strong>Cloud Drew Land</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
        <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@cottonbro">cottonbro</a>.
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
    </div>`, "#e48246") */
];