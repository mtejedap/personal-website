const english = document.querySelector(".english");
const spanish = document.querySelector(".spanish");
const japanese = document.querySelector(".japanese");
const githubIcon = document.querySelector(".github-icon");
const linkedinIcon = document.querySelector(".linkedin-icon");
const emailIcon = document.querySelector(".email-icon");
const resumeIcon = document.querySelector(".resume-icon");

githubIcon.addEventListener("click", () => {
    gtag('event', 'github_visit', {
    });
});

linkedinIcon.addEventListener("click", () => {
    gtag('event', 'linkedin_visit', {
    });
});

emailIcon.addEventListener("click", () => {
    gtag('event', 'email_visit', {
    });
});

resumeIcon.addEventListener("click", () => {
    gtag('event', 'resume_visit', {
    });
});

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
        aboutBody.textContent = "Hi, I'm Matias! I'm a Software Engineer with over 1 year of experience " +
            "and a Bachelor's degree in Computer Science from Purdue University. " +
            "I love playing around with computers and finding creative solutions " +
            "to challenging problems. My areas of expertise include Full-Stack " +
            "(Back-End and Front-End) Applications, DevOps Engineering, Operating " +
            "Systems, Computer Networks, and Embedded Systems. In my spare time, " +
            "I like to work on personal projects or research interesting technologies " +
            "to expand my skills. If you'd like to check out my work or talk to me, " +
            "please click the icons above!";
        aboutBody.style.opacity = "1";
    }, 500);

    // const projectsHeader = document.querySelector(".projects-header");
    // projectsHeader.style.opacity = "0";
    // setTimeout(() => {
    //     projectsHeader.textContent = "Projects";
    //     projectsHeader.style.opacity = "1";
    // }, 500);

    const copyright = document.querySelector(".copyright");
    copyright.style.opacity = "0";
    setTimeout(() => {
        copyright.textContent = "© 2025 Matias Tejeda Astaburuaga | " + 
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
        aboutBody.textContent = "¡Hola! Soy Matías, un Ingeniero de Software con más de un año de experiencia " +
            "y un título en Ciencias de la Computación de Purdue University. " +
            "Me apasiona experimentar con los computadores y encontrar soluciones creativas a problemas desafiantes. " +
            "Mis áreas de especialidad incluyen las Aplicaciones Full-Stack (Back-End y Front-End), " +
            "Ingeniería DevOps, Sistemas Operativos, Redes de Computadores y Sistemas Embebidos. " +
            "En mi tiempo libre me gusta trabajar en proyectos personales o investigar tecnologías interesantes " +
            "para seguir ampliando mis habilidades. Si desea ver mi trabajo o hablar conmigo, ¡haga click en los íconos de arriba!";
        aboutBody.style.opacity = "1";
    }, 500);

    // const projectsHeader = document.querySelector(".projects-header");
    // projectsHeader.style.opacity = "0";
    // setTimeout(() => {
    //     projectsHeader.textContent = "Proyectos";
    //     projectsHeader.style.opacity = "1";
    // }, 500);

    const copyright = document.querySelector(".copyright");
    copyright.style.opacity = "0";
    setTimeout(() => {
        copyright.textContent = "© 2025 Matias Tejeda Astaburuaga | " + 
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
        aboutBody.textContent = "こんにちは、マティアスと申します。パデュー大学でコンピュータサイエンスの学士号を取得したソフトウェアエンジニアです。 " +
            "私はコンピュータを使った作業や、挑戦的な問題に対して創造的な解決策を見つけることが大好きです。 " +
            "専門分野は、フルスタックアプリケーション、オペレーティングシステム、コンピュータネットワーク、組み込みシステムです。 " +
            "余暇には、個人プロジェクトに取り組んだり、スキルを向上させるために興味深い技術を調査したりしています。 " +
            "私の作品をご覧になりたい場合やお話ししたい場合は、上のアイコンをクリックしてください。";
        aboutBody.style.opacity = "1";
    }, 500);

    // const projectsHeader = document.querySelector(".projects-header");
    // projectsHeader.style.opacity = "0";
    // setTimeout(() => {
    //     projectsHeader.textContent = "プロジェクト";
    //     projectsHeader.style.opacity = "1";
    // }, 500);

    const copyright = document.querySelector(".copyright");
    copyright.style.opacity = "0";
    setTimeout(() => {
        copyright.textContent = "© 2025 マティアス・テジェダ・アスタブルアガ | " + 
        "HTMLとCSSとJavaScriptで作りました";
        copyright.style.opacity = "1";
    }, 500);
});
