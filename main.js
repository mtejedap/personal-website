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

    document.querySelector(".resume-icon").setAttribute("href", "assets/Matias Tejeda Astaburuaga Resume (English).pdf");
    
    const aboutHeader = document.querySelector(".about-header");
    aboutHeader.style.opacity = "0";
    setTimeout(() => {
        aboutHeader.textContent = "About Me";
        aboutHeader.style.opacity = "1";
    }, 500);

    const aboutBody = document.querySelector(".about-body");
    aboutBody.style.opacity = "0";
    setTimeout(() => {
        aboutBody.textContent = "Hi, I'm Matias! I'm a senior student from " + 
            "Purdue University majoring in Computer Science and an aspiring professional in the " + 
            "world of technology. While my professional journey may lack extensive industry " + 
            "experience, my academic pursuits, fortified by relentless dedication and a hunger for knowledge, " + 
            "equip me with a solid foundation and a holistic skill set necessary to excel in the dynamic " + 
            "landscape of the technology industry. Competent in multiple programming languages, " + 
            "well-versed in diverse technologies, and possessing a multilingual communication proficiency " + 
            "in 3 different languages, I'm eager to channel my academic rigor and passion into a challenging " + 
            "professional role. If you'd like to check out my work or talk to me, please click the icons above!";
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
        copyright.textContent = "© 2023 Matias Tejeda Astaburuaga | " + 
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

    document.querySelector(".resume-icon").setAttribute("href", "assets/Matias Tejeda Astaburuaga CV (Español).pdf");

    const aboutHeader = document.querySelector(".about-header");
    aboutHeader.style.opacity = "0";
    setTimeout(() => {
        aboutHeader.textContent = "Acerca de mí";
        aboutHeader.style.opacity = "1";
    }, 500);

    const aboutBody = document.querySelector(".about-body");
    aboutBody.style.opacity = "0";
    setTimeout(() => {
        aboutBody.textContent = "¡Hola, soy Matias! Soy un estudiante de " + 
            "último año en Purdue University con especialización en Ciencias de la Computación " + 
            "y un aspirante a profesional en el mundo de la tecnología. Si bien mi trayectoria profesional " + 
            "puede carecer de una amplia experiencia en la industria, mis actividades académicas, " + 
            "fortalecidas por una dedicación incesante y un hambre de conocimiento, me dotan de " + 
            "una base sólida y un conjunto de habilidades holísticas necesarias para sobresalir " + 
            "en el panorama dinámico de la industria de la tecnología. Competente en múltiples lenguajes " + 
            "de programación, bien versado en diversas tecnologías y con dominio de la comunicación " + 
            "multilingüe en 3 idiomas diferentes, estoy ansioso por canalizar mi rigor académico y mi " + 
            "pasión en un rol profesional desafiante. Si desea ver mi trabajo o hablar conmigo, " + 
            "¡Haga click en los íconos de arriba!";
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
        copyright.textContent = "© 2023 Matias Tejeda Astaburuaga | " + 
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

    document.querySelector(".resume-icon").setAttribute("href", "assets/Matias Tejeda Astaburuaga Resume (English).pdf");
    
    const aboutHeader = document.querySelector(".about-header");
    aboutHeader.style.opacity = "0";
    setTimeout(() => {
        aboutHeader.textContent = "私について";
        aboutHeader.style.opacity = "1";
    }, 500);

    const aboutBody = document.querySelector(".about-body");
    aboutBody.style.opacity = "0";
    setTimeout(() => {
        aboutBody.textContent = "初めまして、マティアスです！私はパデュー大学" + 
            "の四年生で、コンピュータ科学を専攻して、テクノロジーの世界におけるプロフェッショナルを目指しています。" + 
            "私の職業上のキャリアには豊富な業界経験が不足しているかもしれませんが、私の学業は、" + 
            "絶え間ない献身と知識への渇望によって強化されており、テクノロジー業界のダイナミックな状況で優れている" + 
            "ために必要な強固な基礎と総合的なスキルセットを私に備えさせてくれます。私は複数のプログラミング言語に対応し" + 
            "、さまざまなテクノロジーに精通しており、3 つの異なる言語での多言語コミュニケーション能力を備えているため" + 
            "、学術的な厳格さと情熱をやりがいのある専門的な役割に注ぎたいと考えています。 私の作品をご覧になりたい場合、" + 
            "または私と話したい場合は、上のアイコンをクリックしてください。";
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
        copyright.textContent = "© 2023 マティアス・テジェダ・アスタブルアガ | " + 
        "HTMLとCSSとJavaScriptで作りました";
        copyright.style.opacity = "1";
    }, 500);
});
