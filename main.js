const english = document.querySelector(".english");
const spanish = document.querySelector(".spanish");
const japanese = document.querySelector(".japanese");

english.addEventListener("click", () => {
    english.classList.add("active");
    spanish.classList.remove("active");
    japanese.classList.remove("active");

    const name = document.querySelector(".name");
    name.style.opacity = "0";
    setTimeout(() => {
        name.textContent = "Matias Tejeda Astaburuaga";
        name.style.opacity = "1";
    }, 500);

    const title = document.querySelector(".title");
    title.style.opacity = "0";
    setTimeout(() => {
        title.textContent = "Software Engineer";
        title.style.opacity = "1";
    }, 500);

    document.querySelector(".resume-icon").setAttribute("href", "assets/Matias Tejeda Astaburuaga Resume.pdf");
    
    const aboutHeader = document.querySelector(".about-header");
    aboutHeader.style.opacity = "0";
    setTimeout(() => {
        aboutHeader.textContent = "About Me";
        aboutHeader.style.opacity = "1";
    }, 500);

    const aboutBody = document.querySelector(".about-body");
    aboutBody.style.opacity = "0";
    setTimeout(() => {
        aboutBody.textContent = "Hi, I'm Matias! I'm a Software Engineer with a Bachelor's degree in Computer Science from Purdue University. " +
            "I love playing around with computers and finding creative solutions to challenging problems. My areas of expertise include full-stack applications, " +
            "operating systems, computer networks, and embedded systems. In my spare time, I like to work on personal projects or research interesting technologies " +
            "to expand my skills. If you'd like to check out my work or talk to me, please click the icons above!";
        aboutBody.style.opacity = "1";
    }, 500);

    const projectsHeader = document.querySelector(".projects-header");
    projectsHeader.style.opacity = "0";
    setTimeout(() => {
        projectsHeader.textContent = "Projects";
        projectsHeader.style.opacity = "1";
    }, 500);

    const copyright = document.querySelector(".copyright");
    copyright.style.opacity = "0";
    setTimeout(() => {
        copyright.textContent = "© 2024 Matias Tejeda Astaburuaga | " + 
        "Made with HTML & CSS & JavaScript";
        copyright.style.opacity = "1";
    }, 500);
});

spanish.addEventListener("click", () => {
    english.classList.remove("active");
    spanish.classList.add("active");
    japanese.classList.remove("active");

    const name = document.querySelector(".name");
    name.style.opacity = "0";
    setTimeout(() => {
        name.textContent = "Matias Tejeda Astaburuaga";
        name.style.opacity = "1";
    }, 500);

    const title = document.querySelector(".title");
    title.style.opacity = "0";
    setTimeout(() => {
        title.textContent = "Ingeniero de Software";
        title.style.opacity = "1";
    }, 500);

    document.querySelector(".resume-icon").setAttribute("href", "assets/Matias Tejeda Astaburuaga CV.pdf");

    const aboutHeader = document.querySelector(".about-header");
    aboutHeader.style.opacity = "0";
    setTimeout(() => {
        aboutHeader.textContent = "Acerca de mí";
        aboutHeader.style.opacity = "1";
    }, 500);

    const aboutBody = document.querySelector(".about-body");
    aboutBody.style.opacity = "0";
    setTimeout(() => {
        aboutBody.textContent = "¡Hola, soy Matías! Soy un ingeniero de software con una licenciatura en Ciencias de Computación de Purdue University. " +
            "Me encanta jugar con las computadoras y encontrar soluciones creativas a problemas desafiantes. Mis áreas de especialización " +
            "incluyen aplicaciones full-stack, sistemas operativos, redes informáticas y sistemas integrados. En mi tiempo libre, me gusta " +
            "trabajar en proyectos personales o investigar tecnologías interesantes para ampliar mis habilidades. Si desea ver mi trabajo " +
            "o hablar conmigo, ¡haga click en los íconos de arriba!";
        aboutBody.style.opacity = "1";
    }, 500);

    const projectsHeader = document.querySelector(".projects-header");
    projectsHeader.style.opacity = "0";
    setTimeout(() => {
        projectsHeader.textContent = "Proyectos";
        projectsHeader.style.opacity = "1";
    }, 500);

    const copyright = document.querySelector(".copyright");
    copyright.style.opacity = "0";
    setTimeout(() => {
        copyright.textContent = "© 2024 Matias Tejeda Astaburuaga | " + 
            "Hecho con HTML & CSS & JavaScript";
        copyright.style.opacity = "1";
    }, 500);
});

japanese.addEventListener("click", () => {
    english.classList.remove("active");
    spanish.classList.remove("active");
    japanese.classList.add("active");

    const name = document.querySelector(".name");
    name.style.opacity = "0";
    setTimeout(() => {
        name.textContent = "マティアス・テジェダ・アスタブルアガ";
        name.style.opacity = "1";
    }, 500);

    const title = document.querySelector(".title");
    title.style.opacity = "0";
    setTimeout(() => {
        title.textContent = "ソフトウェアエンジニア";
        title.style.opacity = "1";
    }, 500);

    document.querySelector(".resume-icon").setAttribute("href", "assets/Matias Tejeda Astaburuaga Resume.pdf");
    
    const aboutHeader = document.querySelector(".about-header");
    aboutHeader.style.opacity = "0";
    setTimeout(() => {
        aboutHeader.textContent = "私について";
        aboutHeader.style.opacity = "1";
    }, 500);

    const aboutBody = document.querySelector(".about-body");
    aboutBody.style.opacity = "0";
    setTimeout(() => {
        aboutBody.textContent = "こんにちは、マティアスです。私は、パデュー大学でコンピューターサイエンスの学士号を取得したソフトウェアエン" +
            "ジニアです。コンピューターをいじったり、難しい問題に独創的な解決策を見つけたりするのが大好きです。私の専門分野は、フルスタックアプ" +
            "リケーション、オペレーティングシステム、コンピューターネットワーク、組み込みシステムです。余暇には、個人的なプロジェクトに取り組ん" +
            "だり、興味深いテクノロジーを研究してスキルを伸ばすのが好きです。私の作品をご覧になりたい場合や、私と話したい場合は、上のアイコ" +
            "ンをクリックしてください。";
        aboutBody.style.opacity = "1";
    }, 500);

    const projectsHeader = document.querySelector(".projects-header");
    projectsHeader.style.opacity = "0";
    setTimeout(() => {
        projectsHeader.textContent = "プロジェクト";
        projectsHeader.style.opacity = "1";
    }, 500);

    const copyright = document.querySelector(".copyright");
    copyright.style.opacity = "0";
    setTimeout(() => {
        copyright.textContent = "© 2024 マティアス・テジェダ・アスタブルアガ | " + 
        "HTMLとCSSとJavaScriptで作りました";
        copyright.style.opacity = "1";
    }, 500);
});
