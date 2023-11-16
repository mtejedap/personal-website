const english = document.querySelector(".english");
const spanish = document.querySelector(".spanish");
const japanese = document.querySelector(".japanese");

english.addEventListener("click", () => {
    english.classList.add("active");
    spanish.classList.remove("active");
    japanese.classList.remove("active");
    document.querySelector(".name").textContent = "Matias Tejeda Astaburuaga";
    document.querySelector(".title").textContent = "Software Engineer";
    document.querySelector(".about-header").textContent = "About Me";
    document.querySelector(".about-body").textContent = "Hi, I'm Matias! I'm a senior student from " + 
    "Purdue University majoring in Computer Science and an aspiring professional in the " + 
    "world of technology. While my professional journey may lack extensive industry " + 
    "experience, my academic pursuits, fortified by relentless dedication and a hunger for knowledge, " + 
    "equip me with a solid foundation and a holistic skill set necessary to excel in the dynamic " + 
    "landscape of the technology industry. Competent in multiple programming languages, " + 
    "well-versed in diverse technologies, and possessing a multilingual communication proficiency " + 
    "in 3 different languages, I'm eager to channel my academic rigor and passion into a challenging " + 
    "professional role. If you'd like to check out my work or talk to me, please click the icons above!";
    document.querySelector(".copyright").textContent = "© 2023 Matias Tejeda Astaburuaga | " + 
    "Made with HTML & CSS & JavaScript";
});

spanish.addEventListener("click", () => {
    english.classList.remove("active");
    spanish.classList.add("active");
    japanese.classList.remove("active");
    document.querySelector(".name").textContent = "Matias Tejeda Astaburuaga";
    document.querySelector(".title").textContent = "Ingeniero de Software";
    document.querySelector(".about-header").textContent = "Acerca de mí";
    document.querySelector(".about-body").textContent = "¡Hola, soy Matias! Soy un estudiante de " + 
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
    document.querySelector(".copyright").textContent = "© 2023 Matias Tejeda Astaburuaga | " + 
    "Hecho con HTML & CSS & JavaScript";
});

japanese.addEventListener("click", () => {
    english.classList.remove("active");
    spanish.classList.remove("active");
    japanese.classList.add("active");
    document.querySelector(".name").textContent = "マティアス テジェダ アスタブルアガ";
    document.querySelector(".title").textContent = "ソフトウェアエンジニア";
    document.querySelector(".about-header").textContent = "私について";
    document.querySelector(".about-body").textContent = "初めまして、マティアスです！私はパデュー大学" + 
        "の四年生で、コンピュータ科学を専攻して、テクノロジーの世界におけるプロフェッショナルを目指しています。" + 
        "私の職業上のキャリアには豊富な業界経験が不足しているかもしれませんが、私の学業は、" + 
        "絶え間ない献身と知識への渇望によって強化されており、テクノロジー業界のダイナミックな状況で優れている" + 
        "ために必要な強固な基礎と総合的なスキルセットを私に備えさせてくれます。私は複数のプログラミング言語に対応し" + 
        "、さまざまなテクノロジーに精通しており、3 つの異なる言語での多言語コミュニケーション能力を備えているため" + 
        "、学術的な厳格さと情熱をやりがいのある専門的な役割に注ぎたいと考えています。 私の作品をご覧になりたい場合、" + 
        "または私と話したい場合は、上のアイコンをクリックしてください。";
    document.querySelector(".copyright").textContent = "© 2023 マティアス テジェダ アスタブルアガ | " + 
    "HTMLとCSSとJavaScriptで作りました";
});
